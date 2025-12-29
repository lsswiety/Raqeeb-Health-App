import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SignInPage } from './components/SignInPage';
import { SignUpPage } from './components/SignUpPage';
import { RoleSelectionPage } from './components/RoleSelectionPage';
import { PatientDashboard } from './components/PatientDashboard';
import { CaregiverDashboard } from './components/CaregiverDashboard';
import { DoctorDashboard } from './components/DoctorDashboard';
import { MessagesPage } from './components/MessagesPage';
import { DoctorMessagesPage } from './components/DoctorMessagesPage';
import { PatientAlertsPage } from './components/PatientAlertsPage';
import { CaregiverAlertsPage } from './components/CaregiverAlertsPage';
import { DoctorAlertsPage } from './components/DoctorAlertsPage';

type PageType = 'home' | 'signin' | 'signup' | 'role-selection' | 'patient-dashboard' | 'caregiver-dashboard' | 'doctor-dashboard' | 'messages' | 'doctor-messages' | 'patient-alerts' | 'caregiver-alerts' | 'doctor-alerts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  return (
    <div className="size-full">
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'signin' && <SignInPage onNavigate={handleNavigate} />}
      {currentPage === 'signup' && <SignUpPage onNavigate={handleNavigate} />}
      {currentPage === 'role-selection' && <RoleSelectionPage onNavigate={handleNavigate} />}
      {currentPage === 'patient-dashboard' && <PatientDashboard onNavigate={handleNavigate} />}
      {currentPage === 'caregiver-dashboard' && <CaregiverDashboard onNavigate={handleNavigate} />}
      {currentPage === 'doctor-dashboard' && <DoctorDashboard onNavigate={handleNavigate} />}
      {currentPage === 'messages' && <MessagesPage onNavigate={handleNavigate} />}
      {currentPage === 'doctor-messages' && <DoctorMessagesPage onNavigate={handleNavigate} />}
      {currentPage === 'patient-alerts' && <PatientAlertsPage onNavigate={handleNavigate} />}
      {currentPage === 'caregiver-alerts' && <CaregiverAlertsPage onNavigate={handleNavigate} />}
      {currentPage === 'doctor-alerts' && <DoctorAlertsPage onNavigate={handleNavigate} />}
    </div>
  );
}