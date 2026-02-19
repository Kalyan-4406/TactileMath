import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProjectDescriptionPage from './pages/ProjectDescriptionPage';
import MemberDetail from './pages/MemberDetail';
import ProgressPage from './pages/ProgressPage';
import MathGame from './components/MathGame';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [score, setScore] = useState(0);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onStart={() => setActivePage('game')} />;
      case 'desc': return <ProjectDescriptionPage />;
      case 'member': return <MemberDetail />;
      case 'game': return <MathGame score={score} setScore={setScore} />;
      case 'progress': return <ProgressPage score={score} />;
      default: return <HomePage onStart={() => setActivePage('game')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F7] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}
