import { useState, useEffect, ReactNode } from "react";
import React from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Provide a default value that matches the type
const defaultContextValue: ThemeContextType = {
  theme: "light", // Example default value
  toggleTheme: () => {},
};

const ThemeContext = React.createContext<ThemeContextType>(defaultContextValue);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
