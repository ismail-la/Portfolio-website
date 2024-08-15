// components/DarkMod.js
import React, { useState } from "react";
import "../components/DarkMod.css"; // Import dark mode CSS

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return [darkMode, toggleDarkMode];
};
