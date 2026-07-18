// src/contexts/IconColorContext.tsx
import React, { createContext, useContext } from 'react';

const IconColorContext = createContext<string | undefined>(undefined);

export const IconColorProvider = IconColorContext.Provider;

export function useIconColor() {
  const context = useContext(IconColorContext);
  if (context === undefined) {
    throw new Error('useIconColor must be used within an IconColorProvider');
  }
  return context;
}
