"use client";
import "./globals.css";
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./components/Chatbot";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import Header from "./components/header"; // Import header
import Hero from "./components/hero"; // Import Hero
import Logos from "./components/logos"; // Import Logos
import Projects from "./components/Projects";
import Skills from "./components/skills"; // Import skills
import WorkExperience from "./components/Work experience"; // Import Work experience
import Contact from "./components/Contact"; // Import Contact
import Footer from "./components/footer"; // Import footer
import { useDarkMode } from "./components/DarkMod"; // Import dark mode hook


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // dark mod
  const [darkMode, toggleDarkMode] = useDarkMode(); // Use dark mode hook

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
    </>
  );
}
