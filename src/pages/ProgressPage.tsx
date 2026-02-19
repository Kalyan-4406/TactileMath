import React from 'react';
import { Activity, Trophy } from 'lucide-react';
import { BRAND } from '../data/constants';
import Pill from '../components/ui/Pill';

type ProgressPageProps = {
    score: number;
};

const ProgressPage: React.FC<ProgressPageProps> = ({ score }) => {
    const stats = [
        { label: 'Arithmetic Accuracy', val: '94%', color: 'bg-indigo-500' },
        { label: 'Spatial Recognition', val: '88%', color: 'bg-emerald-500' },
        { label: 'Pattern Latency', val: '1.2s', color: 'bg-rose-500' },
        { label: 'Focus Stability', val: 'High', color: 'bg-amber-500' }
    ];

    return (
        <div className={`min-h-screen ${BRAND.bg} pt-32 pb-44 px-8`}>
            <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className={`${BRAND.card} p-10 rounded-[3rem] md:col-span-2`}>
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Session Analytics</h2>
                            <Pill color="indigo">Live Data</Pill>
                        </div>
                        <div className="space-y-8">
                            {stats.map((s, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">{s.label}</span>
                                        <span className="text-xl font-black text-slate-900">{s.val}</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color} rounded-full`} style={{ width: s.val.includes('%') ? s.val : '75%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col items-center text-center">
                            <Trophy size={48} className="text-amber-400 mb-4" />
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Score</p>
                            <h3 className="text-7xl font-black italic tracking-tighter">{score}</h3>
                        </div>
                        <div className={`${BRAND.card} p-10 rounded-[3rem] flex flex-col items-center text-center`}>
                            <Activity size={40} className="text-indigo-600 mb-4" />
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Cognitive Load</p>
                            <p className="text-3xl font-black text-slate-800 mt-2">Optimal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressPage;
