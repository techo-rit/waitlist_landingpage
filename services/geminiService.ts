import { GoogleGenAI } from "@google/genai";

// Helper to convert Blob/File to Base64
export const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve({
        inlineData: {
          data: base64String,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateRemix = async (
  imageFile: File,
  promptModifier: string
): Promise<string> => {
  try {
    // Determine API Key source (Environment or User Selection)
    // Note: For gemini-3-pro-image-preview, specific paid keys might be needed via selection in some envs.
    // We try to use the selected key if available, otherwise fall back to env.
    
    // In this specific runtime environment, we check for window.aistudio
    let apiKey = process.env.API_KEY;
    
    // @ts-ignore
    if (window.aistudio && window.aistudio.hasSelectedApiKey && await window.aistudio.hasSelectedApiKey()) {
        // We need to re-instantiate to grab the selected key, or rely on the environment variable injection 
        // which happens automatically after selection in this specific playground.
        // However, the instructions say "The selected API key is available via process.env.API_KEY".
        // So we just proceed.
    }

    const ai = new GoogleGenAI({ apiKey });

    const imagePart = await fileToGenerativePart(imageFile);

    // Using 'gemini-3-pro-image-preview' as requested (mapped from "Nano Banana Pro" for high quality)
    // This model allows image input and text prompting for editing/generation.
    const modelId = 'gemini-3-pro-image-preview';

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
            imagePart,
            { text: `Edit this image. ${promptModifier}. Maintain the composition but change the style entirely to match the description. Make it look high quality and realistic.` }
        ]
      },
      config: {
        // No specific imageConfig for resolution needed unless requested, 
        // but let's ensure high quality if possible.
        // imageConfig: { imageSize: '1K' } // Default is 1K
      }
    });

    // Iterate through parts to find the image
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) throw new Error("No content generated");

    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};
