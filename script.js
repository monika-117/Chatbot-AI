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
