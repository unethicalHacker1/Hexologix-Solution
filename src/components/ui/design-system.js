// Design System for Hexologix Solutions
// This file contains all reusable styles, components, and design tokens

// Color Palette
export const colors = {
  primary: {
    fuchsia: {
      400: 'from-fuchsia-400',
      500: 'from-fuchsia-500',
      600: 'from-fuchsia-600',
      700: 'from-fuchsia-700',
      800: 'from-fuchsia-800',
    },
    purple: {
      200: 'text-purple-200',
      300: 'text-purple-300',
      400: 'text-purple-400',
      500: 'text-purple-500',
      600: 'text-purple-600',
      700: 'text-purple-700',
      800: 'text-purple-800',
      900: 'text-purple-900',
    },
    white: 'text-white',
    black: 'text-black',
  },
  background: {
    primary: 'bg-gradient-to-br from-black via-[#2c003e] to-black',
    secondary: 'bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black',
    tertiary: 'bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black',
    card: 'bg-white/10 backdrop-blur-lg',
    cardHover: 'bg-white/20 backdrop-blur-lg',
  },
  border: {
    primary: 'border border-white/20',
    secondary: 'border border-purple-700',
    accent: 'border-fuchsia-400',
  },
  shadow: {
    primary: 'shadow-xl',
    hover: 'shadow-fuchsia-700/30',
    glow: 'shadow-purple-500/50',
  }
};

// Typography
export const typography = {
  heading: {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
    h3: 'text-2xl sm:text-3xl md:text-4xl font-bold',
    h4: 'text-xl sm:text-2xl font-semibold',
    h5: 'text-lg font-semibold',
    h6: 'text-base font-semibold',
  },
  body: {
    large: 'text-lg',
    medium: 'text-base',
    small: 'text-sm',
    xs: 'text-xs',
  },
  gradient: {
    primary: 'bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text',
    secondary: 'bg-gradient-to-r from-fuchsia-400 to-purple-500 text-transparent bg-clip-text',
  }
};

// Spacing
export const spacing = {
  section: {
    py: 'py-20',
    px: 'px-4 sm:px-6',
  },
  container: {
    max: 'max-w-7xl',
    center: 'mx-auto',
  },
  gap: {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
    xl: 'gap-12',
  }
};

// Button Styles
export const buttonStyles = {
  primary: 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all',
  secondary: 'bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105',
  outline: 'bg-transparent border-2 border-fuchsia-400 text-fuchsia-300 px-6 py-3 text-sm rounded-full hover:bg-fuchsia-600 hover:text-white transition-all hover:scale-105',
};

// Card Styles
export const cardStyles = {
  primary: 'bg-white/10 backdrop-blur-lg p-6 border border-white/20 text-white shadow-xl hover:shadow-fuchsia-700/30 hover:border-fuchsia-400 transition-all duration-300 rounded-2xl',
  secondary: 'bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105',
  process: 'group p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center',
};

// Animation Classes
export const animations = {
  hover: {
    scale: 'hover:scale-105 transition-transform duration-300',
    glow: 'hover:shadow-purple-500/50 transition-shadow duration-300',
    color: 'hover:text-white transition-colors duration-300',
  },
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-black',
  }
};

// Layout Components
export const layoutComponents = {
  section: 'relative py-20 px-4 sm:px-6 overflow-hidden',
  container: 'max-w-7xl mx-auto relative z-10',
  grid: {
    services: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    portfolio: 'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8',
    process: 'grid grid-cols-1 md:grid-cols-3 gap-8',
    contact: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  }
};

// Background Effects
export const backgroundEffects = {
  primary: `
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
      <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  `,
  secondary: `
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse"></div>
      <div className="w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  `,
  cta: `
    <div className="absolute inset-0 -z-10">
      <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
      <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
    </div>
  `
};

// Common Text Content
export const content = {
  cta: {
    primary: "Get Started",
    secondary: "Book a Call",
    viewAll: "View All Services",
    contact: "Contact Us",
  },
  sections: {
    services: {
      title: "Our Services",
      subtitle: "Accelerate your business with our modern, AI-powered solutions and creative development expertise.",
    },
    portfolio: {
      title: "Featured Work",
      subtitle: "Discover how we've transformed businesses with our innovative solutions and cutting-edge technology.",
    },
    process: {
      title: "Our Process",
      subtitle: "We follow a proven methodology that ensures your project's success from concept to launch.",
    },
    about: {
      title: "About Hexologix",
      subtitle: "We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology.",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your next project? Let's discuss how we can help bring your vision to life.",
    }
  }
};

// Form Styles
export const formStyles = {
  input: 'w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm',
  textarea: 'w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm resize-none',
  label: 'block text-sm font-medium text-purple-200 mb-2',
  error: 'text-red-400 text-sm mt-1',
  success: 'text-green-400 text-sm mt-1',
};

// Icon Styles
export const iconStyles = {
  primary: 'w-8 h-8 text-fuchsia-400',
  secondary: 'w-6 h-6 text-purple-300',
  large: 'w-12 h-12 text-fuchsia-400',
  social: 'w-5 h-5 text-purple-300 group-hover:scale-110 transition-transform duration-300',
};

// Utility Classes
export const utilities = {
  textGradient: 'bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text',
  backdropBlur: 'backdrop-blur-lg',
  glassEffect: 'bg-white/10 backdrop-blur-lg border border-white/20',
  hoverEffect: 'hover:scale-105 transition-all duration-300',
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-black',
}; 