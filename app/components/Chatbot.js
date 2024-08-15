// components/Chatbot.js
import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("Ask me anything");
  const chatBoxRef = useRef(null);
  const audioRef = useRef(null); // Reference for the audio element

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() && input !== "Ask me anything") {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput(""); // Clear the input field

      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
        if (audioRef.current) {
          audioRef.current.play(); // Play the notification sound
        }
      }, 1000);
    }
  };

  const getBotResponse = (message) => {
    const normalizedMessage = message.toLowerCase();

    if (
      normalizedMessage.includes("skills") ||
      normalizedMessage.includes("main skills")
    ) {
      return "I have expertise in front-end development with HTML, CSS, JavaScript, React, and back-end development with Node.js and Python. I also have experience in AI and creating scalable server-side applications.";
    } else if (normalizedMessage.includes("experience")) {
      return "I have experience in software engineering, web development, and AI innovation. I’ve worked on various projects that demonstrate my abilities to create dynamic and responsive websites, and I’m passionate about continuous learning.";
    } else if (normalizedMessage.includes("background")) {
      return "I have a background in software engineering, web development, and AI innovation. I’ve worked on a range of projects that showcase my skills in creating dynamic and responsive websites and applications.";
    } else if (
      normalizedMessage.includes("examples") ||
      normalizedMessage.includes("work")
    ) {
      return "You can find examples of my work in my portfolio, which includes various projects such as 200 HTML-based calculators and dynamic websites. I’m also open to discussing specific examples if you have something particular in mind.";
    } else if (
      normalizedMessage.includes("technologies") ||
      normalizedMessage.includes("proficient in")
    ) {
      return "I’m proficient in technologies such as HTML, CSS, JavaScript, React, Next.js, Node.js, and Python. I also have experience with TypeScript and various libraries and frameworks for building modern web applications.";
    } else if (
      normalizedMessage.includes("location") ||
      normalizedMessage.includes("where are you located")
    ) {
      return "I’m currently based in Morocco.";
    } else if (
      normalizedMessage.includes("portfolio") ||
      normalizedMessage.includes("walk me through")
    ) {
      return "My portfolio showcases various projects, including calculators, websites, and AI integrations. You can explore my projects section to see detailed descriptions and examples of my work.";
    } else if (
      normalizedMessage.includes("latest project") ||
      normalizedMessage.includes("show me your latest project")
    ) {
      return "My latest project involves creating a set of advanced HTML-based calculators with custom functionalities. You can view details in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("recent project") ||
      normalizedMessage.includes("technologies used in most recent project")
    ) {
      return "For my most recent project, I used technologies like HTML, JavaScript, and React. The project focuses on advanced calculations and interactive features.";
    } else if (
      normalizedMessage.includes("highlights") ||
      normalizedMessage.includes("portfolio highlights")
    ) {
      return "Highlights of my portfolio include innovative calculators, responsive websites, and AI-driven solutions. Each project demonstrates my commitment to quality and technical skill.";
    } else if (
      normalizedMessage.includes("technology used") ||
      normalizedMessage.includes("featured projects")
    ) {
      return "My featured projects utilize technologies like React, Next.js, and TypeScript. I focus on creating robust and scalable applications with modern tech stacks.";
    } else if (
      normalizedMessage.includes("navigate to projects") ||
      normalizedMessage.includes("projects section")
    ) {
      return "You can navigate to the projects section of my portfolio to view detailed information about my work. Each project includes a description and the technologies used.";
    } else if (
      normalizedMessage.includes("recent work") ||
      normalizedMessage.includes("best way to view recent work")
    ) {
      return "The best way to view my recent work is through the projects section of my portfolio, where you can find the latest updates and detailed project descriptions.";
    } else if (
      normalizedMessage.includes("summary of projects") ||
      normalizedMessage.includes("summary of each project")
    ) {
      return "I can provide a summary of each project upon request. Generally, each project includes an overview, the technologies used, and key features or challenges faced.";
    } else if (
      normalizedMessage.includes("current projects") ||
      normalizedMessage.includes("working on")
    ) {
      return "I’m currently working on several projects, including advanced calculators and interactive web applications. More details can be found in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("examples of work") ||
      normalizedMessage.includes("javascript")
    ) {
      return "Examples of my work with JavaScript can be found in various projects, including interactive web applications and advanced calculators. Check the projects section for specific details.";
    } else if (
      normalizedMessage.includes("challenges faced") ||
      normalizedMessage.includes("read about challenges")
    ) {
      return "I’ve faced various challenges in my projects, including optimizing performance and integrating complex functionalities. You can find detailed information about these challenges in the project descriptions.";
    } else if (
      normalizedMessage.includes("react") ||
      normalizedMessage.includes("project with react")
    ) {
      return "I have several projects involving React, including dynamic web applications and interactive UI components. Details can be found in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("typescript") ||
      normalizedMessage.includes("skills in typescript")
    ) {
      return "One of my projects that demonstrates my skills in TypeScript involves creating scalable web applications with strong typing and robust error handling.";
    } else if (
      normalizedMessage.includes("ai") ||
      normalizedMessage.includes("project involves ai")
    ) {
      return "I have worked on AI-related projects that include machine learning models and intelligent systems. Details about these projects can be found in my portfolio under the AI section.";
    } else if (
      normalizedMessage.includes("next.js") ||
      normalizedMessage.includes("project with next.js")
    ) {
      return "I’ve used Next.js in various projects to build server-side rendered applications and improve performance. Specific examples can be viewed in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("full-stack development") ||
      normalizedMessage.includes("showcase full-stack skills")
    ) {
      return "My full-stack development skills are showcased in projects that involve both front-end and back-end development. These projects highlight my ability to create complete and functional web applications.";
    } else if (
      normalizedMessage.includes("hi") ||
      normalizedMessage.includes("hello") ||
      normalizedMessage.includes("who are you") ||
      normalizedMessage.includes("hey")
    ) {
      return "Hello! I'm your virtual assistant. How can I help you explore my portfolio?";
    } else if (normalizedMessage.includes("name")) {
      return "My name is Ismail.";
    } else if (
      normalizedMessage.includes("contact") ||
      normalizedMessage.includes("email") ||
      normalizedMessage.includes("whatsapp")
    ) {
      return "You can contact me via email at lahbariismail@gmail.com or via WhatsApp at +212684830200.";
    } else if (normalizedMessage.includes("how are you")) {
      return "I’m doing great, thank you for asking! I’m always excited to discuss my projects and skills.";
    } else if (
      normalizedMessage.includes("thank you") ||
      normalizedMessage.includes("thanks") ||
      normalizedMessage.includes("goodbye") ||
      normalizedMessage.includes("bye")
    ) {
      return "You’re welcome! If you have any more questions or need further assistance, feel free to reach out. Have a great day!";
    } else {
      return "I’m not sure I understand your question. Could you please rephrase it or ask about my skills, experience, projects, name, contact details, or specific technologies and projects?";
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section id="Chatbot" className="Chatbot-container">
      <div className="Chatbot">
        <div>
          <button onClick={toggleChatbot} className="ChatbotToggleBtn">
            <img src="./imgs/OIP.jpg" alt="Chatbot Button" />
          </button>
          {isOpen && (
            <div className="ChatbotPopup">
              <div className="ChatHeader">
                Chatbot{" "}
                <button onClick={toggleChatbot} className="CloseBtn">
                  &times;
                </button>
              </div>
              <div className="ChatBox" ref={chatBoxRef}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={
                      msg.sender === "user" ? "userMessage" : "botMessage"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="ChatInput">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => {
                    if (input === "Ask me anything") {
                      setInput(""); // Clear the placeholder text on focus
                    }
                  }}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
              </div>
              <div className="copyright">
                <a target="_blank" rel="noopener noreferrer">
                  Build By Lahbari ismail © 2024
                </a>
              </div>
              <audio ref={audioRef} src="/robot-sound.mp3" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
