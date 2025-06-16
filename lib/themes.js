'use client'



// themes.js

export const THEMES = {
  'light-blue': {
    name: 'Ocean Blue',
    description: 'Clean and professional with ocean blue accents',
    preview: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
    vars: {
      '--primary-color':   '#3B82F6',
      '--primary-hover':   '#2563EB',
      '--primary-light':   '#DBEAFE',
      '--secondary-color': '#1E40AF',
      '--background':      '#F8FAFC',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#1E293B',
      '--text-secondary':  '#64748B',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#E2E8F0',
      '--shadow':          'rgba(59, 130, 246, 0.1)',
      '--gradient':        'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
    }
  },

  'dark-gray': {
    name: 'Dark Professional',
    description: 'Sleek dark theme with purple accents',
    preview: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
    vars: {
      '--primary-color':   '#8B5CF6',
      '--primary-hover':   '#7C3AED',
      '--primary-light':   '#EDE9FE',
      '--secondary-color': '#6D28D9',
      '--background':      '#111827',
      '--surface':         '#1F2937',
      '--text-primary':    '#F9FAFB',
      '--text-secondary':  '#9CA3AF',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#374151',
      '--shadow':          'rgba(0, 0, 0, 0.3)',
      '--gradient':        'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
    }
  },

  'purple-gradient': {
    name: 'Purple Cosmic',
    description: 'Vibrant purple gradient with cosmic feel',
    preview: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    vars: {
      '--primary-color':   '#8B5CF6',
      '--primary-hover':   '#7C3AED',
      '--primary-light':   '#EDE9FE',
      '--secondary-color': '#A855F7',
      '--background':      '#FAF5FF',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#581C87',
      '--text-secondary':  '#7C3AED',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#DDD6FE',
      '--shadow':          'rgba(139, 92, 246, 0.15)',
      '--gradient':        'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    }
  },

  'green-modern': {
    name: 'Nature Green',
    description: 'Fresh green theme with modern touches',
    preview: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    vars: {
      '--primary-color':   '#10B981',
      '--primary-hover':   '#059669',
      '--primary-light':   '#D1FAE5',
      '--secondary-color': '#047857',
      '--background':      '#F0FDF4',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#064E3B',
      '--text-secondary':  '#047857',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#A7F3D0',
      '--shadow':          'rgba(16, 185, 129, 0.1)',
      '--gradient':        'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    }
  },

  'sunset-orange': {
    name: 'Sunset Orange',
    description: 'Warm orange and pink gradient to evoke sunset vibes',
    preview: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    vars: {
      '--primary-color':   '#F97316',
      '--primary-hover':   '#EA580C',
      '--primary-light':   '#FFD8A8',
      '--secondary-color': '#FB923C',
      '--background':      '#FFF7ED',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#9A3412',
      '--text-secondary':  '#C2410C',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#FDE68A',
      '--shadow':          'rgba(249, 115, 22, 0.15)',
      '--gradient':        'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    }
  },

  'teal-wave': {
    name: 'Teal Wave',
    description: 'Cool teal tones with a refreshing feel',
    preview: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
    vars: {
      '--primary-color':   '#14B8A6',
      '--primary-hover':   '#0F766E',
      '--primary-light':   '#A7F3D0',
      '--secondary-color': '#0D9488',
      '--background':      '#ECFEF9',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#064E3B',
      '--text-secondary':  '#065F46',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#6EE7B7',
      '--shadow':          'rgba(20, 184, 166, 0.15)',
      '--gradient':        'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
    }
  },

  'midnight-blue': {
    name: 'Midnight Blue',
    description: 'Deep blues for a sleek, professional look',
    preview: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
    vars: {
      '--primary-color':   '#1E3A8A',
      '--primary-hover':   '#1E40AF',
      '--primary-light':   '#DBEAFE',
      '--secondary-color': '#3B82F6',
      '--background':      '#EFF6FF',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#1E293B',
      '--text-secondary':  '#1E40AF',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#93C5FD',
      '--shadow':          'rgba(30, 58, 138, 0.15)',
      '--gradient':        'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
    }
  },

  'coral-blush': {
    name: 'Coral Blush',
    description: 'Soft pinks for a friendly, casual vibe',
    preview: 'linear-gradient(135deg, #FCA5A5 0%, #F87171 100%)',
    vars: {
      '--primary-color':   '#F87171',
      '--primary-hover':   '#EF4444',
      '--primary-light':   '#FCE7E7',
      '--secondary-color': '#FCA5A5',
      '--background':      '#FEF2F2',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#9B1C1C',
      '--text-secondary':  '#FCA5A5',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#FECACA',
      '--shadow':          'rgba(248, 113, 113, 0.15)',
      '--gradient':        'linear-gradient(135deg, #FCA5A5 0%, #F87171 100%)',
    }
  },

  'emerald-green': {
    name: 'Emerald Green',
    description: 'Rich greens for an earthy, trustworthy feel',
    preview: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
    vars: {
      '--primary-color':   '#047857',
      '--primary-hover':   '#065F46',
      '--primary-light':   '#A7F3D0',
      '--secondary-color': '#059669',
      '--background':      '#ECFDF5',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#064E3B',
      '--text-secondary':  '#047857',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#6EE7B7',
      '--shadow':          'rgba(4, 120, 87, 0.15)',
      '--gradient':        'linear-gradient(135deg, #047857 0%, #059669 100%)',
    }
  },

  'golden-sand': {
    name: 'Golden Sand',
    description: 'Warm golds and yellows for a modern, premium look',
    preview: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    vars: {
      '--primary-color':   '#F59E0B',
      '--primary-hover':   '#D97706',
      '--primary-light':   '#FEF3C7',
      '--secondary-color': '#FBBF24',
      '--background':      '#FFFBEB',
      '--surface':         '#FFFFFF',
      '--text-primary':    '#92400E',
      '--text-secondary':  '#C2410C',
      '--success':         '#10B981',
      '--warning':         '#F59E0B',
      '--error':           '#EF4444',
      '--border':          '#FDE68A',
      '--shadow':          'rgba(245, 158, 11, 0.15)',
      '--gradient':        'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    }
  },

  'dark-ocean': {
    name: 'Dark Ocean',
    description: 'Deep teal and navy for a cool, nocturnal sea vibe',
    preview: 'linear-gradient(135deg, #0A3D62 0%, #0E4DA4 100%)',
    vars: {
      '--primary-color':   '#0A3D62',
      '--primary-hover':   '#0E4DA4',
      '--primary-light':   '#3C6382',
      '--secondary-color': '#1B9CFC',
      '--background':      '#081E3E',
      '--surface':         '#112340',
      '--text-primary':    '#EAF0F1',
      '--text-secondary':  '#CAD3C8',
      '--success':         '#0ABDE3',
      '--warning':         '#FF9F1A',
      '--error':           '#EE5253',
      '--border':          '#1B1F3B',
      '--shadow':          'rgba(10, 61, 98, 0.3)',
      '--gradient':        'linear-gradient(135deg, #0A3D62 0%, #0E4DA4 100%)',
    }
  },

  'charcoal-mint': {
    name: 'Charcoal Mint',
    description: 'Dark charcoal ground with bright mint accents',
    preview: 'linear-gradient(135deg, #2F3640 0%, #44BDC6 100%)',
    vars: {
      '--primary-color':   '#44BDC6',
      '--primary-hover':   '#3DA9A8',
      '--primary-light':   '#ACE7EF',
      '--secondary-color': '#2F3640',
      '--background':      '#1B1F23',
      '--surface':         '#2F3640',
      '--text-primary':    '#F5F6FA',
      '--text-secondary':  '#DCDDE1',
      '--success':         '#44BDC6',
      '--warning':         '#E1B12C',
      '--error':           '#E84118',
      '--border':          '#3A3F45',
      '--shadow':          'rgba(44, 62, 80, 0.3)',
      '--gradient':        'linear-gradient(135deg, #2F3640 0%, #44BDC6 100%)',
    }
  },

  'midnight-forest': {
    name: 'Midnight Forest',
    description: 'Very dark green with subtle forest highlights',
    preview: 'linear-gradient(135deg, #0B3D0B 0%, #145214 100%)',
    vars: {
      '--primary-color':   '#145214',
      '--primary-hover':   '#0B3D0B',
      '--primary-light':   '#2E8B57',
      '--secondary-color': '#1D4E1F',
      '--background':      '#051005',
      '--surface':         '#0B3D0B',
      '--text-primary':    '#E8F5E9',
      '--text-secondary':  '#A5D6A7',
      '--success':         '#66BB6A',
      '--warning':         '#FFA726',
      '--error':           '#EF5350',
      '--border':          '#1A3A1A',
      '--shadow':          'rgba(11, 61, 11, 0.3)',
      '--gradient':        'linear-gradient(135deg, #0B3D0B 0%, #145214 100%)',
    }
  },

  'slate-steel': {
    name: 'Slate & Steel',
    description: 'Cool grays and silvers for a high‑tech feel',
    preview: 'linear-gradient(135deg, #2E3131 0%, #4B4F54 100%)',
    vars: {
      '--primary-color':   '#4B4F54',
      '--primary-hover':   '#2E3131',
      '--primary-light':   '#B0BEC5',
      '--secondary-color': '#607D8B',
      '--background':      '#1C1F21',
      '--surface':         '#2E3131',
      '--text-primary':    '#ECEFF1',
      '--text-secondary':  '#CFD8DC',
      '--success':         '#26A69A',
      '--warning':         '#FFCA28',
      '--error':           '#EF5350',
      '--border':          '#42464B',
      '--shadow':          'rgba(46, 49, 49, 0.3)',
      '--gradient':        'linear-gradient(135deg, #2E3131 0%, #4B4F54 100%)',
    }
  },

  'dark-crimson': {
    name: 'Dark Crimson',
    description: 'Moody black with bold red highlights',
    preview: 'linear-gradient(135deg, #330000 0%, #800000 100%)',
    vars: {
      '--primary-color':   '#800000',
      '--primary-hover':   '#550000',
      '--primary-light':   '#C62828',
      '--secondary-color': '#330000',
      '--background':      '#1A0000',
      '--surface':         '#330000',
      '--text-primary':    '#FBE9E7',
      '--text-secondary':  '#EF9A9A',
      '--success':         '#66BB6A',
      '--warning':         '#FFA726',
      '--error':           '#EF5350',
      '--border':          '#4D0000',
      '--shadow':          'rgba(51, 0, 0, 0.3)',
      '--gradient':        'linear-gradient(135deg, #330000 0%, #800000 100%)',
    }
  },

  'nebula-night': {
    name: 'Nebula Night',
    description: 'Space‑inspired dark purple and indigo blend',
    preview: 'linear-gradient(135deg, #2C003E 0%, #36096D 100%)',
    vars: {
      '--primary-color':   '#36096D',
      '--primary-hover':   '#2C003E',
      '--primary-light':   '#8E24AA',
      '--secondary-color': '#512DA8',
      '--background':      '#12002A',
      '--surface':         '#2C003E',
      '--text-primary':    '#EDE7F6',
      '--text-secondary':  '#B39DDB',
      '--success':         '#00E676',
      '--warning':         '#FFEA00',
      '--error':           '#FF1744',
      '--border':          '#4A0072',
      '--shadow':          'rgba(44, 0, 62, 0.3)',
      '--gradient':        'linear-gradient(135deg, #2C003E 0%, #36096D 100%)',
    }
  },
};





// export function loadTheme(theme) {
//   if (typeof window === 'undefined') return;
  
//   // Remove existing theme links
//   const existingThemes = document.querySelectorAll('link[data-theme]');
//   existingThemes.forEach(link => link.remove());
  
//   // Add new theme link
//   const link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.href = `/themes/theme-${theme}.css`;
//   link.setAttribute('data-theme', theme);
//   document.head.appendChild(link);
// }



export function loadTheme(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme || typeof window === 'undefined') return;

  Object.entries(theme.vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  // Optional: persist theme in localStorage
  localStorage.setItem('theme', themeKey);
}