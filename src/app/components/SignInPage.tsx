import { useState } from 'react';

interface SignInPageProps {
  onNavigate: (page: string) => void;
}

export function SignInPage({ onNavigate }: SignInPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted:', { email, password });
    // Navigate to role selection after login
    onNavigate('role-selection');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* ECG Icon */}
        <div className="flex justify-center mb-8">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 30 L20 30 L25 15 L30 45 L35 20 L40 30 L75 30" 
              stroke="#EF4444" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Sign In Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-600">Access your Raqeeb dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-semibold mb-3">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => onNavigate('signup')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-12 py-3 rounded-lg font-semibold transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}