import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // إضافة رسالة ترحيبية عند تحميل المكون
  useEffect(() => {
    const welcomeMessage = {
      sender: "bot",
      text: "مرحبا، كيف يمكنني مساعدتك؟",
    };
    setMessages([welcomeMessage]);
  }, []); // يتم تنفيذها مرة واحدة عند التحميل

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !question.trim()) {
      alert("الرجاء إدخال عنوان وسؤال.");
      return;
    }

    const userMessage = {
      sender: "user",
      text: `${title}: ${question}`,
    };
    setMessages([...messages, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        title,
        question,
      });
      const botMessage = {
        sender: "bot",
        text: response.data.response,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "bot",
        text: "خطأ: تعذر الحصول على رد من الخادم.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      alert("فشل في الحصول على رد من الخادم.");
    }

    setIsLoading(false);
    setTitle("");
    setQuestion("");
  };

  return (
    <div className="flex flex-col h-[80vh] w-[35%] mx-auto mt-10 bg-white rounded-2xl shadow-2xl font-sans overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-300 p-4 text-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Medical ChatBot
        </h1>
        <p className="text-sm text-cyan-100">اسأل عن أي استفسار طبي!</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-xl shadow-md ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
              } transition-all duration-200`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="max-w-[70%] p-3 rounded-xl bg-white border border-gray-200 shadow-md text-gray-400 italic text-sm rounded-bl-none">
              جارٍ الكتابة...
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="العنوان"
            className="p-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-700 placeholder-gray-400 text-sm transition-all duration-200"
          />
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="اكتب سؤالك..."
              className="flex-1 p-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-700 placeholder-gray-400 text-sm transition-all duration-200"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 disabled:bg-cyan-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </form>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        /* Scrollbar Styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #a0aec0;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;