import { useState } from 'react';
import { Home, Bell, Users, UserPlus, MessageSquare, User, Paperclip, Send } from 'lucide-react';

interface MessagesPageProps {
  onNavigate: (page: string) => void;
}

type Conversation = {
  id: string;
  name: string;
  role: string;
  message: string;
  time: string;
  online: boolean;
  avatar: string;
};

type Message = {
  id: string;
  sender: 'user' | 'contact';
  text: string;
  time: string;
};

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Dr. Walter',
    role: 'Cardiologist',
    message: "Sarah's glucose levels need monitoring...",
    time: '2 min ago',
    online: true,
    avatar: 'DW',
  },
];

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'contact',
    text: "Good morning! I've reviewed Sarah's latest glucose readings. They're slightly elevated. Has she been following the meal plan?",
    time: '9:15 AM',
  },
  {
    id: '2',
    sender: 'user',
    text: "Yes, doctor. She's been following it closely. She had a stressful day yesterday which might have affected the readings.",
    time: '9:17 AM',
  },
  {
    id: '3',
    sender: 'contact',
    text: "That makes sense. Stress can definitely impact blood sugar levels. Let's monitor it for the next 2 days. If it stays elevated, we may need to adjust her medication.",
    time: '9:18 AM',
  },
  {
    id: '4',
    sender: 'user',
    text: "Understood! I'll keep a close eye on her readings and update you if anything changes.",
    time: '9:20 AM',
  },
];

export function MessagesPage({ onNavigate }: MessagesPageProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(conversations[0]);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: String(messages.length + 1),
        sender: 'user',
        text: newMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path 
                d="M5 20 L10 20 L12 12 L15 28 L18 16 L20 20 L35 20" 
                stroke="#EF4444" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <h1 className="text-xl font-bold text-red-500">Raqeeb</h1>
          </div>
        </div>

        <nav className="space-y-4">
          <button
            onClick={() => onNavigate('caregiver-dashboard')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Overview</span>
          </button>

          <button 
            onClick={() => onNavigate('caregiver-alerts')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="font-semibold">Alerts</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Messages</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Conversations List */}
        <div className="w-96 bg-white border-r border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-6">Messages</h2>
          <h3 className="font-semibold mb-4">Conversations</h3>

          <div className="space-y-1">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  selectedConversation.id === conv.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold text-sm">
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {conv.online && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                      <span className="font-semibold">{conv.name}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{conv.role}</div>
                    <div className="text-sm text-gray-600 truncate">{conv.message}</div>
                    <div className="text-xs text-gray-400 mt-1">{conv.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="border-b border-gray-200 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold">
                {selectedConversation.avatar}
              </div>
              <div>
                <h3 className="font-bold text-lg">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-600">
                  {selectedConversation.online && (
                    <>
                      <span className="text-green-500">Online</span>
                      {' • '}
                    </>
                  )}
                  {selectedConversation.role}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  {message.sender === 'contact' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold text-xs">
                        MC
                      </div>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-4 ${
                      message.sender === 'user'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 px-2">{message.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Paperclip className="w-6 h-6" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}