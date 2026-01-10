
import React, { useState, useEffect } from "react";
import "./App.css";
import { WikiHeader } from "./components/WikiHeader";
import { WikiHero } from "./components/WikiHero";
import { WikiContent } from "./components/WikiContent";
import { WikiFooter } from "./components/WikiFooter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      <WikiHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <WikiHero />
      <WikiContent />
      <WikiFooter />
    </div>
  );
}

export default App;
