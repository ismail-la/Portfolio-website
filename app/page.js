// page.js
"use client";
import "./globals.css";
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./components/Chatbot";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import Header from "./components/Header"; // Import header
import Hero from "./components/Hero"; // Import Hero
import Logos from "./components/Logos"; // Import Logos
import Projects from "./components/Projects";
import Skills from "./components/Skills"; // Import skills
import WorkExperience from "./components/Work experience"; // Correct import path
import Contact from "./components/Contact"; // Import Contact
import Footer from "./components/Footer"; // Import footer
import { useDarkMode } from "./components/DarkMod"; // Import dark mode hook
import { LanguageProvider } from "./components/LanguageContext"; // Correct import path

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // dark mod
  const [darkMode, toggleDarkMode] = useDarkMode(); // Use dark mode hook

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <LanguageProvider>
        <Header />
        <main>
          <Hero />
          <Logos />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
          <Chatbot />
          <Footer />
        </main>
      </LanguageProvider>
    </>
  );
}
