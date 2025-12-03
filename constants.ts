import { StackCategory, VisualDeck } from './types';

export const VISUAL_DECKS: VisualDeck[] = [
  {
    id: 'deck_sports_mag',
    name: 'GQ Sports',
    category: StackCategory.SPORTS,
    description: 'High contrast, dramatic lighting, athlete feature.',
    promptModifier: 'Transform into a high-end sports magazine cover style. Dramatic rim lighting, sweat textures, intense contrast, heroic angle, stadium atmosphere in background.',
    iconName: 'Trophy',
    color: 'bg-blue-600'
  },
  {
    id: 'deck_aesthetic_vapor',
    name: 'Vaporwave',
    category: StackCategory.AESTHETICS,
    description: 'Neon purples, retro grids, nostalgic vibe.',
    promptModifier: 'Apply a vaporwave aesthetic. Neon purple and pink lighting, retro 80s grid background elements, soft misty glow, lo-fi texture overlay.',
    iconName: 'Sparkles',
    color: 'bg-purple-500'
  },
  {
    id: 'deck_flex_luxury',
    name: 'Old Money',
    category: StackCategory.FLEX,
    description: 'Quiet luxury, film grain, expensive textures.',
    promptModifier: 'Edit to look like "old money" aesthetic. muted beige and olive tones, high-quality film grain, expensive fabrics, soft natural lighting, European summer vibe.',
    iconName: 'Diamond',
    color: 'bg-emerald-600'
  },
  {
    id: 'deck_anim_pixar',
    name: 'Toon 3D',
    category: StackCategory.ANIMATION,
    description: 'High budget 3D animated movie render.',
    promptModifier: 'Convert to a high-end 3D animated movie style (like Pixar or Dreamworks). Big expressive eyes, soft subsurface scattering on skin, vibrant colors, soft rounded shapes.',
    iconName: 'Film',
    color: 'bg-orange-500'
  },
  {
    id: 'deck_aest_cyber',
    name: 'Cyberpunk',
    category: StackCategory.AESTHETICS,
    description: 'Futuristic, neon cities, techwear.',
    promptModifier: 'Cyberpunk style. Night time, rainy neon streets background, tech-wear clothing, chromatic aberration, futuristic HUD elements overlays.',
    iconName: 'Cpu',
    color: 'bg-pink-600'
  },
  {
    id: 'deck_flex_street',
    name: 'Hypebeast',
    category: StackCategory.FLEX,
    description: 'Streetwear, flash photography, edgy.',
    promptModifier: 'Hypebeast street photography style. Direct flash usage, dark vignette, edgy composition, urban concrete background, saturated colors.',
    iconName: 'Zap',
    color: 'bg-yellow-500'
  }
];
