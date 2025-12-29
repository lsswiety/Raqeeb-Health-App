import { useState } from 'react';
import { MessageSquare, User, Send, Paperclip, Smile, Home, Bell } from 'lucide-react';

interface DoctorMessagesPageProps {
  onNavigate: (page: string) => void;
}

const conversations = [
  {
    id: '1',
    name: 'John Johnson (Caregiver)',
    role: 'Caregiver for Sarah Johnson',
    lastMessage: 'Thank you for the advice, doctor.',
    time: '10:30 AM',
    unread: 2,
    avatar: 'JJ',
  },
  {
    id: '2',
    name: 'Mary Davis (Caregiver)',
    role: 'Caregiver for Emma Davis',
    lastMessage: 'When should we schedule the next visit?',
    time: '9:45 AM',
    unread: 0,
    avatar: 'MD',
  },
  {
    id: '3',
    name: 'James Wilson (Caregiver)',
    role: 'Caregiver for Robert Wilson',
    lastMessage: 'The medications are working well.',
    time: 'Yesterday',
    unread: 1,
    avatar: 'JW',
  },
];

const messages = [
  {
    id: '1',
    sender: 'caregiver',
    text: 'Good morning, doctor. I wanted to update you on Sarah\'s blood pressure.',
    time: '9:00 AM',
  },
  {
    id: '2',
    sender: 'caregiver',
    text: 'It was 145/95 this morning. Should I be concerned?',
    time: '9:01 AM',
  },
  {
    id: '3',
    sender: 'doctor',
    text: 'Good morning, John. That reading is slightly elevated. Has she been taking her medication regularly?',
    time: '9:15 AM',
  },
  {
    id: '4',
    sender: 'caregiver',
    text: 'Yes, I make sure she takes it every morning with breakfast.',
    time: '9:20 AM',
  },
  {
    id: '5',
    sender: 'doctor',
    text: 'Good. Let\'s monitor it for the next few days. Please take readings twice daily and keep me updated.',
    time: '9:25 AM',
  },
  {
    id: '6',
    sender: 'caregiver',
    text: 'Thank you for the advice, doctor.',
    time: '10:30 AM',
  },
];

export function DoctorMessagesPage({ onNavigate }: DoctorMessagesPageProps) {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message
      setMessageText('');
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
            onClick={() => onNavigate('doctor-dashboard')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Overview</span>
          </button>

          <button 
            onClick={() => onNavigate('doctor-alerts')}
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
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold mb-2">Messages</h2>
            <p className="text-gray-600">Chat with caregivers</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full text-left p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  selectedConversation.id === conversation.id ? 'bg-red-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {conversation.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-bold truncate">{conversation.name}</h3>
                        <p className="text-sm text-gray-500">{conversation.role}</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conversation.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                {selectedConversation.avatar}
              </div>
              <div>
                <h3 className="font-bold">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-500">{selectedConversation.role}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md ${
                    message.sender === 'doctor'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-900'
                  } rounded-2xl px-4 py-3`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'doctor' ? 'text-red-100' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleSendMessage}
                className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
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