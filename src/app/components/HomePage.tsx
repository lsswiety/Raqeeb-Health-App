import { Activity, Pill, AlertTriangle } from 'lucide-react';
import logoImage from 'figma:asset/4ddffb7b4f4c07bf916b1918f2bc5abf1655d5f2.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-6 px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Raqeeb - Always Watching , Always Caring</h1>
          <nav className="flex gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('signin')}
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </button>
            <button 
              onClick={() => onNavigate('signup')}
              className="text-gray-600 hover:text-gray-900"
            >
              Register
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Remote Health<br />
              Monitoring<br />
              for the Elderly
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Track vitals, stay safe, and get help in real time.
            </p>
            <button 
              onClick={() => onNavigate('role-selection')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src={logoImage} 
              alt="Raqeeb Logo" 
              className="max-w-md w-full"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vitals Monitoring */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500">
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-6 rounded-full">
                <Activity className="w-16 h-16 text-red-500" strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">
              Vitals<br />Monitoring
            </h3>
            <p className="text-gray-500 text-center">
              Logs BP, Glucose, HR
            </p>
          </div>

          {/* Medication Reminders */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500">
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-6 rounded-full">
                <Pill className="w-16 h-16 text-red-500" strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">
              Medication<br />Reminders
            </h3>
            <p className="text-gray-500 text-center">
              Alerts for each dose
            </p>
          </div>

          {/* Emergency Support */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500">
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-6 rounded-full">
                <AlertTriangle className="w-16 h-16 text-red-500" strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">
              Emergency<br />Support
            </h3>
            <p className="text-gray-500 text-center">
              Notifies caregivers
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}