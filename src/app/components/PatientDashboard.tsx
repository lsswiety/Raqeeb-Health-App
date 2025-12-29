import { useState } from 'react';
import { Home, Activity, Bell, Calendar, Plus, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PatientDashboardProps {
  onNavigate: (page: string) => void;
}

const vitalTrendsData = [
  { day: 'Mon', bloodGlucose: 95, bloodPressure: 120, heartRate: 72, temperature: 37 },
  { day: 'Tue', bloodGlucose: 98, bloodPressure: 118, heartRate: 70, temperature: 36.8 },
  { day: 'Wed', bloodGlucose: 92, bloodPressure: 122, heartRate: 74, temperature: 37.1 },
  { day: 'Thu', bloodGlucose: 96, bloodPressure: 119, heartRate: 71, temperature: 37 },
  { day: 'Fri', bloodGlucose: 94, bloodPressure: 121, heartRate: 73, temperature: 36.9 },
  { day: 'Sat', bloodGlucose: 97, bloodPressure: 120, heartRate: 72, temperature: 37.2 },
  { day: 'Sun', bloodGlucose: 95, bloodPressure: 120, heartRate: 72, temperature: 37 },
];

export function PatientDashboard({ onNavigate }: PatientDashboardProps) {
  const [showAddReadingModal, setShowAddReadingModal] = useState(false);
  const [activeTab, setActiveTab] = useState('vitals');

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
            <span className="font-semibold">Sarah Johnson</span>
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
            <Activity className="w-5 h-5 text-red-500" />
            <div className="text-left">
              <div className="font-semibold">Vitals</div>
              <div className="text-xs text-gray-500">Vital signs</div>
            </div>
          </button>

          <button 
            onClick={() => onNavigate('patient-alerts')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Bell className="w-5 h-5 text-red-500" />
            <div className="text-left">
              <div className="font-semibold">Alerts</div>
              <div className="text-xs text-gray-500">No alerts</div>
            </div>
          </button>

          <button 
            onClick={() => setActiveTab('medications')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Calendar className="w-5 h-5 text-red-500" />
            <div className="text-left">
              <div className="font-semibold">Medication</div>
              <div className="text-xs text-gray-500">Schedule</div>
            </div>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === 'vitals' && (
          <>
            {/* Welcome Header */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">Welcome, Sarah 👋</h2>
              <p className="text-gray-600 mb-4">Here's your health overview for today</p>
              
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600">Blood Pressure</span>
                    <span className="text-red-500">📈</span>
                  </div>
                  <div className="font-bold text-xl">120/80</div>
                  <div className="text-sm text-gray-500">mmHg</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600">Heart Rate</span>
                    <span className="text-green-500">🌿</span>
                  </div>
                  <div className="font-bold text-xl">72</div>
                  <div className="text-sm text-gray-500">bpm</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600">Blood Glucose</span>
                    <span className="text-red-500">🔺</span>
                  </div>
                  <div className="font-bold text-xl">95</div>
                  <div className="text-sm text-gray-500">mg/dL</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600">Temperature</span>
                    <span className="text-green-500">🌿</span>
                  </div>
                  <div className="font-bold text-xl">37°C</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Record New Vital */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold mb-2">Record New Vital</h3>
                <p className="text-gray-600 text-sm mb-4">Track your health by recording vital signs</p>
                <button 
                  onClick={() => setShowAddReadingModal(true)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Reading
                </button>
              </div>

              {/* Medication Reminder */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold mb-2">Medication Reminder</h3>
                <p className="text-gray-600 text-sm mb-2">Next dose: Aspirin</p>
                <p className="text-3xl font-bold mb-3">2:00 PM</p>
                <button className="text-red-500 hover:text-red-600 font-semibold">
                  View Schedule
                </button>
              </div>
            </div>

            {/* Emergency Assistance */}
            <div className="bg-red-50 rounded-lg shadow p-6 mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold mb-1">Emergency Assistance</h3>
                <p className="text-gray-600 text-sm">Alert caregivers immediately</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Emergency Alert
              </button>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-bold mb-4">Recent Alerts</h3>
              <p className="text-gray-500 text-center py-8">No recent alerts</p>
            </div>

            {/* Vital Signs Trends */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-2">Vital Signs Trends</h3>
              <p className="text-gray-600 text-sm mb-6">Your recent health measurement</p>
              
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={vitalTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="bloodGlucose" stroke="#EF4444" name="Blood Glucose" />
                  <Line type="monotone" dataKey="bloodPressure" stroke="#3B82F6" name="Blood Pressure" />
                  <Line type="monotone" dataKey="heartRate" stroke="#10B981" name="Heart Rate" />
                  <Line type="monotone" dataKey="temperature" stroke="#F59E0B" name="Temperature" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* Medications Screen */}
        {activeTab === 'medications' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Medications</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Metformin</h3>
                    <p className="text-sm text-gray-600">500mg</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Twice daily - Morning & Evening</p>
                <p className="text-xs text-gray-500">Prescribed by Dr. Smith</p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Lisinopril</h3>
                    <p className="text-sm text-gray-600">10mg</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Once daily - Morning</p>
                <p className="text-xs text-gray-500">Prescribed by Dr. Smith</p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Aspirin</h3>
                    <p className="text-sm text-gray-600">81mg</p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Once daily - Morning</p>
                <p className="text-xs text-gray-500">Prescribed by Dr. Smith</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Add Reading Modal */}
      {showAddReadingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Add Reading</h3>
              <button 
                onClick={() => setShowAddReadingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transition-colors">
                Manual Input
              </button>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors">
                Connect Bluetooth Device
              </button>
              
              <button 
                onClick={() => setShowAddReadingModal(false)}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-4 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}