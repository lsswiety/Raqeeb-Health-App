interface RoleSelectionPageProps {
  onNavigate: (page: string) => void;
}

export function RoleSelectionPage({ onNavigate }: RoleSelectionPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-md">
        <h2 className="text-2xl font-bold text-red-500 text-center mb-8">
          Select Your Role
        </h2>
        
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('patient-dashboard')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transition-colors"
          >
            Patient Dashboard
          </button>
          
          <button
            onClick={() => onNavigate('caregiver-dashboard')}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors"
          >
            Caregiver Dashboard
          </button>
          
          <button
            onClick={() => onNavigate('doctor-dashboard')}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-semibold transition-colors"
          >
            Doctor Dashboard
          </button>
          
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-4 rounded-lg font-semibold transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
