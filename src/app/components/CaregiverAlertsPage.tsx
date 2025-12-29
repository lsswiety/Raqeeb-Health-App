import { Bell, Home } from 'lucide-react';

interface CaregiverAlertsPageProps {
  onNavigate: (page: string) => void;
}

const alerts = [
  {
    id: '1',
    dateTime: '2025-01-20 14:30',
    alertType: 'High Blood Pressure',
    severity: 'critical',
    status: 'active',
  },
  {
    id: '2',
    dateTime: '2025-01-20 10:15',
    alertType: 'Missed Medication',
    severity: 'warning',
    status: 'acknowledged',
  },
  {
    id: '3',
    dateTime: '2025-01-19 22:45',
    alertType: 'Low Heart Rate',
    severity: 'warning',
    status: 'resolved',
  },
  {
    id: '4',
    dateTime: '2025-01-19 16:20',
    alertType: 'High Glucose Level',
    severity: 'critical',
    status: 'resolved',
  },
];

export function CaregiverAlertsPage({ onNavigate }: CaregiverAlertsPageProps) {
  const criticalCount = alerts.filter((a) => a.severity === 'critical' && a.status === 'active').length;
  const warningCount = alerts.filter((a) => a.severity === 'warning' && a.status !== 'resolved').length;
  const resolvedTodayCount = alerts.filter((a) => a.status === 'resolved' && a.dateTime.startsWith('2025-01-20')).length;

  const getSeverityBadge = (severity: string) => {
    if (severity === 'critical') {
      return 'bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold';
    }
    return 'bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return 'bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold';
    } else if (status === 'acknowledged') {
      return 'bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold';
    }
    return 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold';
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

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">Alerts</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Health Alerts</h1>
          <p className="text-gray-600">Monitor and manage your health notifications</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Critical Alerts</h3>
            <p className="text-4xl font-bold text-red-500 mb-2">{criticalCount}</p>
            <p className="text-sm text-gray-500">Requires immediate action</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Warning</h3>
            <p className="text-4xl font-bold text-yellow-500 mb-2">{warningCount}</p>
            <p className="text-sm text-gray-500">Monitor and follow up</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 mb-2">Resolved Today</h3>
            <p className="text-4xl font-bold text-green-500 mb-2">{resolvedTodayCount}</p>
            <p className="text-sm text-gray-500">Successfully handled</p>
          </div>
        </div>

        {/* Alerts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Date & Time</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Alert Type</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Severity</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert) => (
                  <tr
                    key={alert.id}
                    className={`border-b border-gray-200 ${
                      alert.severity === 'critical' && alert.status === 'active' ? 'bg-red-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">{alert.dateTime}</td>
                    <td className="px-6 py-4 font-semibold">{alert.alertType}</td>
                    <td className="px-6 py-4">
                      <span className={getSeverityBadge(alert.severity)}>{alert.severity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getStatusBadge(alert.status)}>{alert.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      {alert.status === 'active' && (
                        <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Acknowledge
                        </button>
                      )}
                      {alert.status === 'acknowledged' && (
                        <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Resolve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}