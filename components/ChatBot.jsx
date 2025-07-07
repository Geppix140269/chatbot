// ChatBot.jsx - Basic rule-based chatbot (no backend)
import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const userMessage = { role: 'user', text: input };
    const botMessage = generateReply(input);

    setMessages([...messages, userMessage, { role: 'bot', text: botMessage }]);
    setInput('');
  };

  const generateReply = (msg) => {
    const normalized = msg.toLowerCase();

    if (normalized.includes('hello') || normalized.includes('hi')) {
      return 'Hi there! How can I help you today?';
    } else if (normalized.includes('price')) {
      return 'Prices vary depending on the service. Please be specific.';
    } else if (normalized.includes('investiscope')) {
      return 'InvestiScope™ helps you analyze property deals in Puglia.';
    } else {
      return "I'm not sure how to answer that. Can you rephrase?";
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <div style={{ minHeight: 200 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flexGrow: 1 }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
