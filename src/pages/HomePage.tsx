import React from 'react';
import { Brain, Sparkles, Star } from 'lucide-react';
import { BRAND, COURSE_INFO } from '../data/constants';
import ProBadge from '../components/ui/ProBadge';
import ActionButton from '../components/ui/ActionButton';

type HomePageProps = {
    onStart: () => void;
};

const HomePage: React.FC<HomePageProps> = ({ onStart }) => (
    <div className={`min-h-screen ${BRAND.bg} flex items-center justify-center p-8 relative overflow-hidden`}>
        <ProBadge />
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="md:w-1/2 text-center md:text-left text-white space-y-8 animate-in fade-in duration-700">
                <h2 className="text-2xl font-bold opacity-80 tracking-tight">TactileMath</h2>
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-full animate-spin-slow" />
                        <div className="bg-white/10 p-10 rounded-[3rem] backdrop-blur-md border border-white/20">
                            <Brain size={80} className="text-white drop-shadow-lg" />
                        </div>
                        <Sparkles className="absolute top-0 right-0 text-white/40" />
                        <Star className="absolute bottom-4 left-0 text-white/40" />
                    </div>
                </div>
                <p className="text-2xl font-medium leading-relaxed max-w-sm">
                    Discover the power of personalized math logic and visual tracking with TactileMath.
                </p>
            </div>

            <div className={`${BRAND.card} md:w-1/2 max-w-lg w-full rounded-[2.5rem] p-16 animate-in slide-in-from-right-10 duration-700`}>
                <h1 className={`${BRAND.textTitle} text-5xl font-black mb-12 text-center tracking-tighter`}>Initialize Hub</h1>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Laboratory Mode</label>
                        <div className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-400 font-bold">Evaluation Ready: {COURSE_INFO.code}</div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Current Framework</label>
                        <div className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-400 font-bold truncate">{COURSE_INFO.name}</div>
                    </div>
                    <ActionButton onClick={onStart} className="mt-8">
                        Launch Session
                    </ActionButton>
                    <div className="pt-8 text-center border-t border-slate-100 mt-8">
                        <p className="text-slate-400 text-xs font-medium">Collaborating with Amrita School of Computing</p>
                        <p className="text-indigo-600 text-xs font-black mt-2 uppercase tracking-widest">Evaluation 2.0 Active</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
