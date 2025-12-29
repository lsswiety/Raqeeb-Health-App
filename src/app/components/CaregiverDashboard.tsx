import { Home, Activity, Bell, MessageSquare, MessageCircle, Heart, Edit } from 'lucide-react';

interface CaregiverDashboardProps {
  onNavigate: (page: string) => void;
}

export function CaregiverDashboard({ onNavigate }: CaregiverDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
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
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-semibold">John Johnson</span>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Overview</div>
              <div className="text-xs text-gray-500">Dashboard</div>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <Activity className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Patient Status</div>
              <div className="text-xs text-gray-500">Vital signs</div>
            </div>
          </button>

          <button 
            onClick={() => onNavigate('caregiver-alerts')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Bell className="w-5 h-5 text-yellow-500" />
            <div className="text-left">
              <div className="font-semibold">Alerts</div>
              <div className="text-xs text-gray-500">1 warning</div>
            </div>
          </button>

          <button 
            onClick={() => onNavigate('messages')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Message</div>
              <div className="text-xs text-gray-500">communication</div>
            </div>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Monitor and support Sarah Johnson</h2>
              <div className="flex items-center gap-4 text-gray-600">
                <span>Sarah Johnson</span>
                <span>72 years old</span>
                <span>• ID: RQ-2024-5834</span>
              </div>
              <p className="text-gray-500 mt-1">Last check-in: 2 hours ago</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => onNavigate('messages')}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Message Doctor
              </button>
            </div>
          </div>
        </div>

        {/* Vital Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Blood Pressure */}
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">Blood Pressure</h3>
              <Heart className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold mb-1">120/80</p>
            <p className="text-green-600 text-sm mb-2">Normal range ✓</p>
          </div>

          {/* Heart Rate */}
          <div className="bg-green-50 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">Heart Rate</h3>
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold mb-1">72 bpm</p>
            <p className="text-green-600 text-sm mb-2">Normal range ✓</p>
          </div>

          {/* Medications */}
          <div className="bg-red-50 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">Medications</h3>
              <Edit className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold mb-1 text-red-600">2 missed</p>
            <p className="text-red-600 text-sm mb-2">Missed doses ⚠</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Quick Questions */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-6">Quick Questions</h3>
            
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Request Health Update</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit className="w-5 h-5" />
                <span>View Medication Schedule</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Send Reminder</span>
              </button>
              
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Bell className="w-5 h-5" />
                Emergency Contact
              </button>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="font-bold text-xl mb-4">Recent Activity & Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div className="flex-1">
                    <p className="font-semibold">Missed afternoon medication</p>
                    <p className="text-sm text-gray-600">Lisinopril dose not taken</p>
                  </div>
                  <span className="text-sm text-gray-500">1 hour ago</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <div className="flex-1">
                    <p className="font-semibold">Blood pressure reading normal</p>
                    <p className="text-sm text-gray-600">120/80 mmHg • Normal range</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hour ago</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="flex-1">
                    <p className="font-semibold">Completed morning exercises</p>
                    <p className="text-sm text-gray-600">30 minute walk</p>
                  </div>
                  <span className="text-sm text-gray-500">5 hour ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caregiver Access & Health Summary */}
          <div className="space-y-6">
            {/* Caregiver Access */}
            <div className="bg-blue-500 text-white rounded-lg shadow p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6" />
                <h3 className="font-bold text-lg">Caregiver Access</h3>
              </div>
              <p className="text-sm mb-4">Family members can view health summaries</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>John Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Mary Johnson</span>
                </div>
              </div>
              <button className="w-full bg-white text-blue-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Manage Access
              </button>
            </div>

            {/* Health Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-4 text-red-500">Health Summary</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Overall Status</p>
                  <p className="font-semibold text-green-600">Stable ✓</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Check-in</p>
                  <p className="font-semibold">2 hours ago</p>
                </div>
                <div>
                  <p className="text-gray-600">Active Alerts</p>
                  <p className="font-semibold text-yellow-600">1 warn</p>
                </div>
                <div>
                  <p className="text-gray-600">Compliance</p>
                  <p className="font-semibold">85%</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold mb-2 text-red-500">Next Steps</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Follow up missed meds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Schedule doctor visit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Review medications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}