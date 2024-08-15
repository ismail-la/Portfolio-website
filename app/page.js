"use client";
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./components/Chatbot";
import "./globals.css";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import axios from "axios";
import Projects from "./components/Projects";
import Skills from "./components/skills"; // Import skills
import WorkExperience from "./components/Work experience"; // Import Work experience
import Footer from "./components/footer"; // Import footer
import Hero from "./components/hero"; // Import Hero
import Logos from "./components/logos"; // Import Logos
import { useDarkMode } from "./components/darkmod"; // Import dark mode hook
import Header from "./components/header"; // Import header

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
        <Chatbot />
        <Footer />
      </main>
    </>
  );
}
