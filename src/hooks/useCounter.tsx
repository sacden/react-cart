import React, { createContext, useState } from "react";
const ThemeContext = createContext("");

function ThemeProvider(props: any) {
  // создаем константу
  const [theme, setTheme] = useState("dark");

  // создаем функцию
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // прячем константу и функцию в объект
  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  // передаем объект
  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
