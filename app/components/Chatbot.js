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
      return "I specialize in full-stack development with expertise in front-end technologies (HTML, CSS, JavaScript, React, Next.js) and back-end frameworks (Node.js, Express.js, Django, Flask). My skills also include responsive web design, SEO optimization, UI/UX design with Figma, and AI integration.";
    } else if (normalizedMessage.includes("about you")) {
      return "Hi I'm Ismail I am a Software Engineer and Freelance Full-Stack Web Developer with a strong focus on DevOps, generative AI, and UX/UI design. I specialize in creating high-performance, innovative software solutions and visually appealing, user-friendly websites. Passionate about technology and continuous learning, I am excited to collaborate with professionals and take on new challenges in the tech industry.";
    } else if (normalizedMessage.includes("experience")) {
      return "I have extensive experience as a Full-Stack Developer, IT Engineer, and Senior IT Technician. I’ve worked on diverse projects including custom web applications, database management, and cloud computing. My experience spans freelance work, IT support, and technical project management.";
    } else if (normalizedMessage.includes("background")) {
      return "I hold a Certified Program in Full Stack Software Engineering from ALX/Holberton School and a Bachelor's degree in Full Stack and DevOps software engineering. My background includes a Master’s degree in Computer and Internet Engineering and a Bachelor’s degree in Computer Engineering.";
    } else if (
      normalizedMessage.includes("examples") ||
      normalizedMessage.includes("projects") ||
      normalizedMessage.includes("work")
    ) {
      return "You can view examples of my work in my portfolio. Key projects include an e-commerce website using Django, an Airbnb clone, a JavaScript music player, a work-out tracker, a food delivery app, a ToDo list application using ReactJS, and a chat application with a website.";
    } else if (
      normalizedMessage.includes("technologies") ||
      normalizedMessage.includes("proficient in")
    ) {
      return "I’m proficient in HTML5, CSS3, JavaScript, React, Next.js, Node.js, Python, and various frameworks like Django and Flask. I also have experience with DevOps tools, CI/CD pipelines, and cloud services.";
    } else if (
      normalizedMessage.includes("location") ||
      normalizedMessage.includes("where are you located")
    ) {
      return "I’m currently based in Casablanca, Morocco.";
    } else if (
      normalizedMessage.includes("portfolio") ||
      normalizedMessage.includes("walk me through")
    ) {
      return "My portfolio features a range of projects, including an e-commerce website built with Django, an Airbnb clone, a JavaScript music player, a work-out tracker, a food delivery app, a ToDo list application with ReactJS, and a chat application. You can explore the projects section for detailed descriptions and technologies used.";
    } else if (
      normalizedMessage.includes("latest project") ||
      normalizedMessage.includes("show me your latest project")
    ) {
      return "My latest project is a portfolio website developed with Next.js 14 and deployed on Vercel. It includes interactive features, detailed project sections, and SEO optimization.";
    } else if (
      normalizedMessage.includes("recent project") ||
      normalizedMessage.includes("technologies used in most recent project")
    ) {
      return "For my most recent project, I used Next.js 14 to create a responsive portfolio website. The project involved full-stack development and includes advanced features like interactive chatbots and SEO optimization.";
    } else if (
      normalizedMessage.includes("highlights") ||
      normalizedMessage.includes("portfolio highlights")
    ) {
      return "Highlights of my portfolio include an e-commerce website with Django, an Airbnb clone, a JavaScript music player, a work-out tracker, a food delivery app, a ToDo list application using ReactJS, and a chat application. Each project demonstrates my expertise in full-stack development and innovative solutions.";
    } else if (
      normalizedMessage.includes("technology used") ||
      normalizedMessage.includes("featured projects")
    ) {
      return "My featured projects utilize technologies such as React, Next.js, Django, and various AI tools. I focus on creating scalable and high-performance web applications with modern tech stacks.";
    } else if (
      normalizedMessage.includes("navigate to projects") ||
      normalizedMessage.includes("projects section")
    ) {
      return "You can navigate to the projects section of my portfolio to view detailed information about my work. Each project includes descriptions and the technologies used.";
    } else if (
      normalizedMessage.includes("recent work") ||
      normalizedMessage.includes("best way to view recent work")
    ) {
      return "The best way to view my recent work is through the projects section of my portfolio, where you can find the latest updates and detailed project descriptions.";
    } else if (
      normalizedMessage.includes("summary of projects") ||
      normalizedMessage.includes("summary of each project")
    ) {
      return "I can provide summaries of each project upon request. Generally, each project includes an overview, the technologies used, and key features or challenges faced.";
    } else if (
      normalizedMessage.includes("current projects") ||
      normalizedMessage.includes("working on")
    ) {
      return "I’m currently working on various projects, including advanced web applications and AI integrations. More details are available in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("examples of work") ||
      normalizedMessage.includes("javascript")
    ) {
      return "Examples of my work with JavaScript include a music player and interactive web applications. Specific details can be found in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("challenges faced") ||
      normalizedMessage.includes("read about challenges")
    ) {
      return "I’ve encountered various challenges such as performance optimization and integrating complex functionalities. Detailed information about these challenges is included in the project descriptions.";
    } else if (
      normalizedMessage.includes("react") ||
      normalizedMessage.includes("project with react")
    ) {
      return "I’ve developed a ToDo list application using ReactJS, among other projects. More details can be found in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("typescript") ||
      normalizedMessage.includes("skills in typescript")
    ) {
      return "My TypeScript skills are demonstrated through projects involving scalable web applications with strong typing and robust error handling. Details can be found in my portfolio.";
    } else if (
      normalizedMessage.includes("next.js") ||
      normalizedMessage.includes("project with next.js")
    ) {
      return "I’ve used Next.js in various projects to build server-side rendered applications and enhance performance. Specific examples are available in the projects section of my portfolio.";
    } else if (
      normalizedMessage.includes("full-stack development") ||
      normalizedMessage.includes("showcase full-stack skills")
    ) {
      return "My full-stack development skills are showcased in projects such as an e-commerce website with Django, a food delivery app, and a chat application. These projects highlight my ability to create comprehensive and functional web applications.";
    } else if (
      normalizedMessage.includes("hi") ||
      normalizedMessage.includes("hello") ||
      normalizedMessage.includes("who are you") ||
      normalizedMessage.includes("hey")
    ) {
      return "Hello! I'm your virtual assistant. How can I assist you with exploring my portfolio today?";
    } else if (normalizedMessage.includes("name")) {
      return "I'm virtual assistant, you can call me bot 😀";
    } else if (
      normalizedMessage.includes("contact") ||
      normalizedMessage.includes("email") ||
      normalizedMessage.includes("whatsapp")
    ) {
      return "You can contact me via email at lahbariismail@gmail.com or via WhatsApp at +212684830200.";
    } else if (normalizedMessage.includes("how are you")) {
      return "I’m doing great, thank you for asking! How can I assist you with my portfolio?";
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
