import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);

        let botReply = "";
        const userMsgCount = newMessages.filter(m => m.sender === "user").length;

        if (userMsgCount === 1) {
            botReply = "📞 Support Contact: +91-9888064333";
        } else if (userMsgCount === 2) {
            botReply = "⏳ Please wait, our team will respond shortly.";
        } else if (userMsgCount === 3) {
            botReply = "🙏 Thank you for visiting, our team will contact you soon.";
        }

        if (botReply) {
            setTimeout(() => {
                setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
            }, 500);
        }

        setInput("");
    };

    return (
        <>
            {/* Chatbot Icon */}
            {!isOpen && (
                <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
                    💬
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-container shadow-lg">
                    <div className="chatbot-header">
                        <h5>Support ChatBot</h5>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            ✖
                        </button>
                    </div>

                    <div className="chat-window">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type message..."
                            className="form-control"
                        />
                        <button onClick={handleSend} className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
