import React from "react";
import { useState } from "react";

const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const darkTheme = {
    bgWhite: "#222222",
    bgTransparentBlue: "#2F2F2F",
    textDeepBlue: "text-white",
  };

  const lightTheme = {
    textDeepBlue: "text-blue-900",
    bgWhite: "#222222",
    bgTransparentBlue: "#2F2F2F",
  };

  const [isDark, changeThemeMode] = useState(false);

  const changeTheme = (darkMode) => {
    changeThemeMode(darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeManager = () => React.useContext(ThemeContext);
