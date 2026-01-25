# Chatbot-AI Overview:

The AI Chatbot is a web-based application that allows users to interact with an intelligent virtual assistant directly from their browser. Users can type messages, and the chatbot responds with relevant answers, simulating a conversational experience. This project leverages HTML for structure, CSS for styling, and JavaScript for functionality and AI-like responses.

### Objectives:

1.Create an interactive chatbot interface on a webpage.

2.Allow users to type messages and receive automated responses.

3.Implement a clean and responsive UI for both desktop and mobile devices.

4.Introduce basic AI-like behavior using JavaScript logic (can later be enhanced with APIs like OpenAI for real AI responses).

### Key Features:

1.User-friendly chat interface: Input box for typing messages, send button, and scrollable chat history.

2.Automated responses: Predefined JavaScript logic or keyword-based responses for a simple AI effect.

3.Responsive design: Compatible with different screen sizes using CSS.

4.Dynamic interaction: Messages from the user appear in the chat window in real time.

### Optional enhancements:

1.Use of local storage to save chat history.

2.Integration with external AI APIs for smarter responses.

3.Typing animation for bot messages to simulate real conversation.

### Technology Stack:

HTML: Structure of the chat window, input box, and buttons.

CSS: Styling the chatbot interface, chat bubbles, animations, and responsive layout.

JavaScript: Handling user input, generating bot responses, updating the chat window dynamically.

### Project Flow:

➤User opens the web page and sees the chat interface.

➤User types a message and clicks the "Send" button.

➤JavaScript captures the message and displays it in the chat window.

➤Bot generates a response based on predefined rules or logic.

➤Bot response is displayed in the chat window.

➤Conversation continues interactively.

### Expected Outcome:

➤A fully functional chatbot interface on a web page.

➤Real-time interaction between the user and bot.

➤Attractive, responsive design that enhances user experience.

➤A foundation for adding more complex AI features in the future.

### Optional Extensions:

Voice-to-text input for messages.

Natural Language Processing (NLP) integration for smarter responses.

Theme toggle (dark/light mode) for the chat interface.

Storing conversation history across sessions.

### How to Fetch Your API Key from Google AI Studio?

➤Sign In to Google AI Studio

➤Go to Google AI Studio and log in using your Google account.

➤Create a New Project

➤Click on dashboard

➤Enter a descriptive project name and configure any required settings.

➤Save the project.

<img width="1919" height="1075" alt="Screenshot 2026-01-26 174813" src="https://github.com/user-attachments/assets/aef08d90-a220-4d24-bb3b-cb2be899f511" />

### Enable API Access

➤Within your project dashboard, navigate to the API & Services section.

➤Click Enable to activate API access for your project.

➤Generate an API Key

➤Click Create Credentials → API Key.

➤Copy the API key and store it securely.

➤Use the API Key in Your Project

➤Open your project’s config.js (or equivalent configuration file).

<img width="1919" height="1003" alt="Screenshot 2026-01-26 175224" src="https://github.com/user-attachments/assets/36b43eb1-4322-41c8-860b-c864f8757b20" />

### How to get URL?

➤Click on get started

<img width="1912" height="1057" alt="Screenshot 2026-01-26 180738" src="https://github.com/user-attachments/assets/492bb2b3-3bc2-4ab0-925c-ec8515a25010" />

➤ click on API Reference and copy the url from Authentication

<img width="1919" height="1077" alt="Screenshot 2026-01-26 180950" src="https://github.com/user-attachments/assets/3226e1e7-a5a0-4197-9546-84ea06841312" />

### index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI CHATBOT</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="chat-container">
    <header>
        <h1>AI CHATBOT 🤖</h1>
    </header>

    <div id="chat-box" class="chat-box">
        <div class="message user-message">Hi!</div>
        <div class="message bot-message">Hi!</div>
    </div>
    <div class="input-area">
        <input 
            type="text" 
            id="user-input" 
            placeholder="Type your message..."
        />
        <button id="send-btn">Send</button>
    </div>

</div>
<script type="module" src="script.js"></script>
</body>
</html>

```

### style.css

```
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Montserrat",sans-serif;
}

body{
   background: linear-gradient(90.2deg, rgba(1,47,95,1)-0.4%, rgba(56, 141, 217, 1) 106.1%);
   color:#333;
   display:flex;
   justify-content:center;
   align-items:center;
   height:100vh;
}   
.chat-container{
    width:400px;
    height:600px;
    background:rgba(255,255,255,0,2);
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,0,3);
    border-radius:15px;
    box-shadow:0 8px 32px 0 rgba(0,0,0,0.15);
    display:flex;
    flex-direction:column;
    overflow:hidden;
}
header{
    background:rgba(0,0,0,0.1);
    color: #fff;
    padding:15px;
    text-align:center;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.chat-box{
    flex:1;
    overflow-y:auto;
    padding:15px;
    background:transparent;
}
.message{
    margin:10px 0;
    padding:10px;
    border-radius:10px;
    max-width:80%;
    line-height:1.4;
    box-shadow:0 1px 3px rgba(0,0,0,0.1);
}
.user-message{
    background:rgba(0,120,255,0.8);
    color:#fff;
    margin-left:auto;
    align-self:flex-end;
}
.bot-message{
    background:rgba(255,255,255,0.9);
    color:#333;
    align-self:flex-start;
}
.input-area{
    display:flex;
    padding:10px;
    background: rgba(0,0,0,0.1);
}
#user-input{
    flex:1;
    height: 38px;       
    padding: 8px 10px;
    resize: none;         
    border:1px solid rgba(255,255,255,0.4);
    background:rgba(255,255,255,0.9);
    outline:none;
    border-radius:8px;
    font-size:14px;
    line-height:1.4;
    overflow-y: hidden;    
}

#send-btn{
    background:#0078ff;
    color:#fff;
    border:none;
    padding:10px 15px;
    margin-left:10px;
    border-radius:8px;
    cursor:pointer;
    transition:background 0.3s;
}
#send-btn:hover{
    background:#005fcc;
}

```
### script.js

```
import { API_KEY } from "./config.js";
console.log("API KEY:",  API_KEY);


const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

window.onload = () => {
  const savedChat = localStorage.getItem("chatHistory");
  console.log("Loaded chat history:", savedChat);
  if (savedChat) chatBox.innerHTML = savedChat;
  chatBox.scrollTop = chatBox.scrollHeight;
};

function addMessage(message, className) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("message", "bot-message");
  typingDiv.textContent = "AI is typing...";
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typingDiv;
}

async function getBotReply(userMessage) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
  try {
    console.log("Sending request to API with message:", userMessage);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API responded with error:", data);
      return data?.error?.message || "Error fetching response.";
    }

    console.log("API response data:", data);

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get that.";
  } catch (error) {
    console.error("Fetch error:", error);
    return "Network error occurred.";
  }
}

sendBtn.onclick = async () => {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  userInput.value = "";

  const typingDiv = showTyping();

  const botReply = await getBotReply(message);

  typingDiv.remove();
  addMessage(botReply, "bot-message");

  localStorage.setItem("chatHistory", chatBox.innerHTML);
};

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

```
### config.js

```
export const API_KEY = "YOUR_API_KEY";

```


















