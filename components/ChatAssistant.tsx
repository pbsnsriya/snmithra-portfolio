import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = {
  services: {
    contract: {
      title: "Contract Development",
      description: "Full-cycle custom development including high-end Websites (Portfolio, E-commerce), Mobile Apps (iOS, Android), Windows Software, and bespoke AI-ML solutions. We build it, you own it.",
      features: [
        "Web: Portfolios & E-commerce",
        "Mobile: Native iOS & Android Apps",
        "Desktop: Windows Applications",
        "AI-ML: Custom Model Integration",
        "100% IP & Source Code Transfer"
      ],
      pricing: "One-time payment, milestone-based (e.g., 30% advance, 40% beta, 30% delivery)"
    },
    subscription: {
      title: "Subscription & Maintenance",
      description: "Ongoing support and scalable API solutions. We handle the technical maintenance so you can focus on business growth with our plug-and-play services.",
      features: [
        "Maintenance: Monthly Support Plans",
        "SaaS: Plug-and-Play API Access",
        "Regular Security & Feature Updates",
        "99.9% Uptime SLA Guarantee",
        "Dedicated Technical Support"
      ],
      pricing: "Recurring monthly/yearly billing based on usage tiers"
    }
  },
  company: {
    name: "SN Mithra",
    tagline: "NextGen Software Solutions",
    location: "Hyderabad, Telangana",
    email: "solutions@snmithra.com",
    phone: "+91 6305164517",
    technologies: ["React", "Node.js", "Python", "Cloud Native", "Three.js", "AI/ML"]
  },
  projects: [
    { name: "FinTech Core", type: "Contract", description: "Banking ledger system with regulatory compliance" },
    { name: "DataStream API", type: "API Subscription", description: "Real-time market analytics API" },
    { name: "MediVault System", type: "Contract", description: "HIPAA-compliant patient record ecosystem" },
    { name: "Urban Grid IoT", type: "Contract", description: "Smart city dashboard controlling 50,000+ nodes" },
    { name: "CryptoGuard API", type: "API Subscription", description: "Fraud detection API for crypto exchanges" }
  ]
};

// Simple keyword-based response generator
const generateResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  // Greetings
  if (msg.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! I'm MithraBot. I can help you learn about our services, projects, and how to get in touch. What would you like to know?";
  }

  // Services - General
  if (msg.includes('service') || msg.includes('what do you do') || msg.includes('what can you do') || msg.includes('offer')) {
    return `We offer two main engagement models:\n\n**1. Contract Development** - Custom software built for you. You own 100% of the IP and source code.\n\n**2. Subscription & Maintenance** - Ongoing support, API access, and maintenance plans.\n\nWould you like details on either of these?`;
  }

  // Contract Development
  if (msg.includes('contract') || msg.includes('custom') || msg.includes('build') || msg.includes('develop')) {
    const s = KNOWLEDGE_BASE.services.contract;
    return `**${s.title}**\n\n${s.description}\n\n**What's included:**\n${s.features.map(f => `• ${f}`).join('\n')}\n\n**Pricing:** ${s.pricing}`;
  }

  // Subscription / API
  if (msg.includes('subscription') || msg.includes('api') || msg.includes('maintenance') || msg.includes('support')) {
    const s = KNOWLEDGE_BASE.services.subscription;
    return `**${s.title}**\n\n${s.description}\n\n**What's included:**\n${s.features.map(f => `• ${f}`).join('\n')}\n\n**Pricing:** ${s.pricing}`;
  }

  // Websites / Portfolios / E-commerce
  if (msg.includes('website') || msg.includes('portfolio') || msg.includes('ecommerce') || msg.includes('e-commerce')) {
    return "Yes! We build stunning **Websites, Portfolios, and E-commerce platforms** under our Contract Development model. These are custom-built to your specifications, and you own 100% of the code. Contact us to discuss your project!";
  }

  // Mobile Apps
  if (msg.includes('mobile') || msg.includes('app') || msg.includes('ios') || msg.includes('android')) {
    return "We develop **native iOS and Android mobile applications** as part of our Contract Development services. From concept to App Store, we handle the entire lifecycle. Let's build your app!";
  }

  // AI / ML
  if (msg.includes('ai') || msg.includes('ml') || msg.includes('machine learning') || msg.includes('artificial intelligence')) {
    return "We offer **custom AI & Machine Learning solutions** integrated into your products. Whether it's predictive analytics, NLP, or computer vision, our team can build and deploy models tailored to your needs.";
  }

  // Projects / Portfolio
  if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work') || msg.includes('case stud')) {
    const projectList = KNOWLEDGE_BASE.projects.map(p => `• **${p.name}** (${p.type}): ${p.description}`).join('\n');
    return `Here are some of our featured projects:\n\n${projectList}\n\nVisit our Portfolio section for more details!`;
  }

  // Pricing
  if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('quote')) {
    return "Pricing depends on project scope. **Contract Development** uses milestone-based payments. **Subscriptions** have tiered monthly/yearly plans.\n\nContact us for a personalized quote!";
  }

  // Contact
  if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach') || msg.includes('talk')) {
    const c = KNOWLEDGE_BASE.company;
    return `You can reach us at:\n\n📧 **Email:** ${c.email}\n📞 **Phone:** ${c.phone}\n📍 **Location:** ${c.location}\n\nOr use the contact form on this page!`;
  }

  // Location
  if (msg.includes('where') || msg.includes('location') || msg.includes('based') || msg.includes('office')) {
    return `We are headquartered in **${KNOWLEDGE_BASE.company.location}**, India. We work with clients globally!`;
  }

  // Technologies
  if (msg.includes('tech') || msg.includes('stack') || msg.includes('language') || msg.includes('framework')) {
    return `Our tech stack includes: **${KNOWLEDGE_BASE.company.technologies.join(', ')}**. We're always learning and adapting to the latest technologies!`;
  }

  // About
  if (msg.includes('about') || msg.includes('who are you') || msg.includes('company')) {
    return `**${KNOWLEDGE_BASE.company.name}** is a premier software solutions company. We specialize in custom development and scalable API subscriptions. Our mission is to architect the digital future for our clients.`;
  }

  // Thank you
  if (msg.includes('thank') || msg.includes('thanks')) {
    return "You're welcome! Let me know if you have any other questions. 😊";
  }

  // Goodbye
  if (msg.includes('bye') || msg.includes('goodbye')) {
    return "Goodbye! Feel free to return anytime you have questions. Have a great day!";
  }

  // Default fallback
  return "I can help you with information about our **services**, **projects**, **pricing**, or **contact details**. What would you like to know?";
};

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm MithraBot. Ask me about our services, projects, or how to get in touch!", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Simulate a brief delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 500));

    const botResponse = generateResponse(inputText);
    setMessages(prev => [...prev, { role: 'model', text: botResponse, timestamp: new Date() }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Simple markdown-like rendering for bold text
  const renderMessage = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-mithra-primary">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-mithra-primary text-black transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-[#0a0a16] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[500px]"
          >
            {/* Header */}
            <div className="bg-mithra-primary p-4 flex justify-between items-center text-black">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-tech font-bold">MithraBot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-mithra-dark/90">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.role === 'user'
                    ? 'bg-mithra-primary text-black rounded-tr-none'
                    : 'bg-white/10 text-gray-200 rounded-tl-none'
                    }`}>
                    {msg.role === 'model' ? renderMessage(msg.text) : msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#0a0a16] border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-mithra-primary transition-colors text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-mithra-primary text-black p-2 rounded-xl hover:bg-mithra-primary/80 transition disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;