import React, { createContext, useContext, useMemo } from 'react';
import { colors, spacing, typography, borderRadius, shadows, breakpoints, transitions, zIndex } from './tokens';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const tokens = { colors, spacing, typography, borderRadius, shadows, breakpoints, transitions, zIndex };

  const theme = useMemo(() => ({
    tokens,
    colors: tokens.colors,
    spacing: tokens.spacing,
    typography: tokens.typography,
    borderRadius: tokens.borderRadius,
    shadows: tokens.shadows,
    breakpoints: tokens.breakpoints,
    transitions: tokens.transitions,
    zIndex: tokens.zIndex,
  }), []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
