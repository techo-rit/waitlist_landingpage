import { useEffect } from 'react';

/**
 * Sets the document title and meta description for a page
 * @param title - Page title (will be appended with " | nopromt.ai")
 * @param description - Meta description for SEO
 */
export const useDocumentMeta = (title: string, description?: string) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | nopromt.ai`;
    
    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    // Cleanup: Reset to default when leaving page
    return () => {
      document.title = 'Visualize & Manifest Your Style | AI Transformation Free - nopromt.ai';
    };
  }, [title, description]);
};