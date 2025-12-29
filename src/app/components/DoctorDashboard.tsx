import { useState } from 'react';
import { Home, Users, Bell, MessageSquare, Search } from 'lucide-react';

interface DoctorDashboardProps {
  onNavigate: (page: string) => void;
}

type TabType = 'vital-signs' | 'medications' | 'message';

const patients = [
  {
    id: '1',
    name: 'John Smith',
    age: 68,
    status: 'critical',
    lastReading: '10 min ago',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    age: 45,
    status: 'improving',
    lastReading: '1 hour ago',
  },
  {
    id: '3',
    name: 'Emma Davis',
    age: 55,
    status: 'warning',
    lastReading: '30 min ago',
  },
];

export function DoctorDashboard({ onNavigate }: DoctorDashboardProps) {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [activeTab, setActiveTab] = useState<TabType>('vital-signs');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-500';
      case 'improving':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
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
            <span className="font-semibold">Dr. Walter</span>
          </div>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <Home className="w-4 h-4 text-red-500" />
              <span className="font-semibold">Overview</span>
            </div>
            <div className="text-xs text-gray-500 ml-6">Dashboard</div>
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4" />
              <span className="font-semibold">Patients</span>
            </div>
            <div className="text-xs text-gray-500 ml-6">All patients</div>
          </button>

          <button 
            onClick={() => onNavigate('doctor-alerts')}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <Bell className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">Alerts</span>
            </div>
            <div className="text-xs text-gray-500 ml-6">Critical</div>
          </button>

          <button 
            onClick={() => onNavigate('doctor-messages')}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="w-4 h-4" />
              <span className="font-semibold">Messages</span>
            </div>
            <div className="text-xs text-gray-500 ml-6">Inbox</div>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, Dr. Walter 👋</h1>
          <p className="text-gray-600">Monitor and manage your patients' health</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Total Patients</h3>
            <p className="text-4xl font-bold">25</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Active Alert</h3>
            <p className="text-4xl font-bold">3</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Improving</h3>
            <p className="text-4xl font-bold">15</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Need Attention</h3>
            <p className="text-4xl font-bold">4</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Patients List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-2">Patients</h2>
            <p className="text-gray-600 mb-6">Monitor and manage patient health</p>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Patient List */}
            <div className="space-y-3">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedPatient.id === patient.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold">{patient.name}</h3>
                      <p className="text-sm text-gray-600">{patient.age} years old</p>
                    </div>
                    <span
                      className={`${getStatusColor(
                        patient.status
                      )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {patient.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Last reading: {patient.lastReading}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Patient Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">{selectedPatient.name}</h2>
              <p className="text-gray-600">{selectedPatient.age} years old</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setActiveTab('vital-signs')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === 'vital-signs'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Vital Signs
              </button>
              <button
                onClick={() => setActiveTab('medications')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === 'medications'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Medications
              </button>
              <button
                onClick={() => setActiveTab('message')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === 'message'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Message
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'vital-signs' && (
              <div className="space-y-4">
                {/* Reading 1 */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-3">2025-01-08 10:30</p>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Blood Pressure Heart Rate</p>
                      <p className="text-gray-700">45/92 mmHg 78 bpm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Blood Glucose Temperature</p>
                      <p className="text-gray-700">05 mg/dL 98.4 °F</p>
                    </div>
                  </div>
                </div>

                {/* Reading 2 */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-3">2025-01-07 10:15</p>
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold">Blood Pressure Heart Rate</p>
                      <p className="text-gray-700">138/88 mmHg 75 bpm</p>
                    </div>
                    <div>
                      <p className="font-semibold">Blood Glucose Temperature</p>
                      <p className="text-gray-700">98 mg/dL 98.6 °F</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'medications' && (
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold">Metformin</h3>
                      <p className="text-sm text-gray-600">500mg</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Twice daily - Morning & Evening</p>
                  <p className="text-xs text-gray-500">Compliance: 95%</p>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold">Lisinopril</h3>
                      <p className="text-sm text-gray-600">10mg</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Once daily - Morning</p>
                  <p className="text-xs text-gray-500">Compliance: 100%</p>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold">Aspirin</h3>
                      <p className="text-sm text-gray-600">81mg</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Missed doses</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Once daily - Morning</p>
                  <p className="text-xs text-gray-500">Compliance: 75%</p>
                </div>
              </div>
            )}

            {activeTab === 'message' && (
              <div className="text-center py-8 text-gray-500">
                <p>Messages with {selectedPatient.name} will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}