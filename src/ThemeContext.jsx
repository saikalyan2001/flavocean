// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('#ffffff'); // Default color

  const changeThemeColor = (color) => {
    setThemeColor(color);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
