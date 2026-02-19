import React from 'react';
import { Home, FileText, User, Gamepad2, TrendingUp } from 'lucide-react';

type NavigationProps = {
    activePage: string;
    setActivePage: (page: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'desc', label: 'Details', icon: FileText },
        { id: 'member', label: 'Team', icon: User },
        { id: 'game', label: 'Play Lab', icon: Gamepad2 },
        { id: 'progress', label: 'Progress', icon: TrendingUp }
    ];

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl z-50">
            {navItems.map((item) => (
                <button key={item.id} onClick={() => setActivePage(item.id)}
                    className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 group relative ${activePage === item.id ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-400 hover:text-white'
                        }`}>
                    <item.icon size={18} strokeWidth={2.5} />
                    {activePage === item.id && <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
