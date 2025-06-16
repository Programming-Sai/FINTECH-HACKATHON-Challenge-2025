export const THEMES = {
  'light-blue': {
    name: 'Ocean Blue',
    description: 'Clean and professional with ocean blue accents',
    preview: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
  },
  'dark-gray': {
    name: 'Dark Professional',
    description: 'Sleek dark theme with purple accents',
    preview: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
  },
  'purple-gradient': {
    name: 'Purple Cosmic',
    description: 'Vibrant purple gradient with cosmic feel',
    preview: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  },
  'green-modern': {
    name: 'Nature Green',
    description: 'Fresh green theme with modern touches',
    preview: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
};

export function loadTheme(theme) {
  if (typeof window === 'undefined') return;
  
  // Remove existing theme links
  const existingThemes = document.querySelectorAll('link[data-theme]');
  existingThemes.forEach(link => link.remove());
  
  // Add new theme link
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `/themes/theme-${theme}.css`;
  link.setAttribute('data-theme', theme);
  document.head.appendChild(link);
}