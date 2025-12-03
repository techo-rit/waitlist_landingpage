export enum StackCategory {
  SPORTS = 'Sports',
  AESTHETICS = 'Aesthetics',
  FLEX = 'Flex',
  ANIMATION = 'Animation',
}

export interface VisualDeck {
  id: string;
  name: string;
  category: StackCategory;
  description: string;
  promptModifier: string; // The "backend" prompt magic
  iconName: string;
  color: string;
}

export interface GeneratedImage {
  originalUrl: string;
  generatedUrl: string;
  deckName: string;
}
