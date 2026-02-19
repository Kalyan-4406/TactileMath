import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Hash, Circle, ArrowLeft, Sparkles, Zap, Square, Triangle, Camera } from 'lucide-react';
import html2canvas from 'html2canvas';
import { BRAND } from '../data/constants';
import Pill from './ui/Pill';

type MathGameProps = {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

type Problem = {
    mode: 'math' | 'sequence' | 'geometry';
    val1?: number;
    val2?: number;
    op?: string;
    answer: number | string;
    options: (number | string)[];
    sequence?: (number | null)[];
    target?: string;
};

const MathGame: React.FC<MathGameProps> = ({ score, setScore }) => {
    const [view, setView] = useState<'lobby' | 'active'>('lobby');
    const [gameState, setGameState] = useState<'math' | 'sequence' | 'geometry'>('math');
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [shake, setShake] = useState(false);

    const generateProblem = useCallback(() => {
        setFeedback(null);
        setShake(false);
        if (gameState === 'math') {
            const isAdd = Math.random() > 0.5;
            const v1 = Math.floor(Math.random() * 5) + 1;
            const v2 = Math.floor(Math.random() * (isAdd ? 5 : v1)) + 1;
            const ans = isAdd ? v1 + v2 : v1 - v2;
            const opts = Array.from(new Set([ans, ans + 1, ans - 1].filter(v => v >= 0))).sort(() => Math.random() - 0.5).slice(0, 3);
            if (!opts.includes(ans)) opts[0] = ans;
            setCurrentProblem({ mode: 'math', val1: v1, val2: v2, op: isAdd ? '+' : '-', answer: ans, options: opts.sort((a, b) => (a as number) - (b as number)) });
        } else if (gameState === 'sequence') {
            const start = Math.floor(Math.random() * 10) + 1;
            const step = Math.floor(Math.random() * 5) + 1;
            const ans = start + 3 * step;
            const opts = [ans, ans + step, ans - step].sort(() => Math.random() - 0.5).slice(0, 3);
            setCurrentProblem({ mode: 'sequence', sequence: [start, start + step, start + 2 * step, null], answer: ans, options: opts.sort((a, b) => (a as number) - (b as number)) });
        } else if (gameState === 'geometry') {
            const shapes = ['circle', 'square', 'triangle'];
            const target = shapes[Math.floor(Math.random() * shapes.length)];
            setCurrentProblem({ mode: 'geometry', target, options: shapes.sort(() => Math.random() - 0.5), answer: target });
        }
    }, [gameState]);

    // eslint-disable-next-line
    useEffect(() => { generateProblem(); }, [generateProblem]);

    const handleAnswer = useCallback((val: number | string) => {
        if (feedback || !currentProblem) return;
        if (val === currentProblem.answer) {
            setFeedback('correct');
            setScore(s => s + 20);
            setTimeout(generateProblem, 1200);
        } else {
            setFeedback('wrong');
            setShake(true);
            setTimeout(() => { setFeedback(null); setShake(false); }, 800);
        }
    }, [feedback, currentProblem, generateProblem, setScore]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (view === 'active' && ['1', '2', '3'].includes(e.key) && currentProblem?.options && !feedback) {
                handleAnswer(currentProblem.options[parseInt(e.key) - 1]);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [view, currentProblem, feedback, handleAnswer]);

    const handleCapture = useCallback(async () => {
        const element = document.getElementById('math-game-container');
        if (element) {
            const canvas = await html2canvas(element);
            const data = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = data;
            link.download = 'math-game-report.png';
            link.click();
        }
    }, []);

    if (view === 'lobby') {
        return (
            <div className={`min-h-screen ${BRAND.bg} pt-32 pb-44 px-8 flex items-center justify-center`}>
                <div className="max-w-6xl w-full grid md:grid-cols-3 gap-10 animate-in zoom-in-95 duration-500">
                    {[
                        { id: 'math', label: 'Arithmetic', icon: Plus, color: 'bg-indigo-500' },
                        { id: 'sequence', label: 'Patterns', icon: Hash, color: 'bg-emerald-500' },
                        { id: 'geometry', label: 'Shapes', icon: Circle, color: 'bg-rose-500' }
                    ].map(m => (
                        <div key={m.id} onClick={() => { setGameState(m.id as 'math' | 'sequence' | 'geometry'); setView('active'); }}
                            className={`${BRAND.card} rounded-[3rem] p-12 text-center cursor-pointer hover:-translate-y-4 transition-all group`}>
                            <div className={`${m.color} w-24 h-24 rounded-[2rem] mx-auto mb-8 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                                <m.icon size={48} strokeWidth={3} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-800 tracking-tighter mb-4">{m.label}</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest group-hover:text-indigo-600 transition-colors">Start Module</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div id="math-game-container" className={`min-h-screen ${BRAND.bg} pt-32 pb-44 px-8 flex flex-col items-center transition-all duration-300 ${shake ? 'brightness-75' : ''}`}
            onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}>

            <div className={`${BRAND.card} w-full max-w-6xl rounded-[3rem] p-4 flex items-center justify-between mb-8`}>
                <button onClick={() => setView('lobby')} className="flex items-center gap-4 px-6 py-4 rounded-3xl hover:bg-slate-50 transition-all text-slate-900 font-black uppercase text-[10px] tracking-widest">
                    <ArrowLeft /> Back
                </button>
                <div className="flex-1 text-center">
                    <h4 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">{gameState} Laboratory</h4>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={handleCapture} className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors font-bold text-sm">
                        <Camera size={18} /> Capture
                    </button>
                    <div className={`${BRAND.proBlue} text-white px-8 py-3 rounded-2xl font-black text-xl shadow-lg`}>
                        {score}
                    </div>
                </div>
            </div>

            <div className={`${BRAND.card} w-full max-w-6xl rounded-[4rem] h-[600px] relative overflow-hidden flex flex-col items-center justify-center p-20 ${shake ? 'animate-shake' : ''}`}>
                {feedback === 'correct' && (
                    <div className="absolute inset-0 bg-emerald-500 z-50 flex flex-col items-center justify-center text-white animate-in zoom-in duration-300">
                        <Sparkles size={120} className="animate-bounce mb-6" />
                        <h2 className="text-7xl font-black italic tracking-tighter">Excellent!</h2>
                    </div>
                )}

                {gameState === 'math' && currentProblem?.mode === 'math' && (
                    <div className="flex flex-col items-center gap-16">
                        <div className="flex items-center gap-12">
                            <div className="flex flex-wrap gap-4 max-w-[250px] justify-center">
                                {[...Array(currentProblem?.val1 || 0)].map((_, i) => <div key={i} className="w-14 h-14 bg-indigo-500 rounded-3xl shadow-xl border-b-8 border-indigo-700 animate-in zoom-in" style={{ animationDelay: `${i * 100}ms` }} />)}
                            </div>
                            <div className="text-5xl font-black text-slate-200">{currentProblem.op}</div>
                            <div className="flex flex-wrap gap-4 max-w-[250px] justify-center">
                                {[...Array(currentProblem?.val2 || 0)].map((_, i) => <div key={i} className="w-14 h-14 bg-emerald-500 rounded-3xl shadow-xl border-b-8 border-emerald-700 animate-in zoom-in" style={{ animationDelay: `${i * 100}ms` }} />)}
                            </div>
                        </div>
                        <h2 className="text-9xl font-black text-slate-900 tracking-tighter">{currentProblem.val1} {currentProblem.op} {currentProblem.val2} = ?</h2>
                    </div>
                )}

                {gameState === 'sequence' && currentProblem?.mode === 'sequence' && (
                    <div className="flex gap-8">
                        {currentProblem.sequence?.map((n, i) => (
                            <div key={i} className={`w-44 h-64 rounded-[4rem] border-[12px] flex items-center justify-center transition-all duration-500 ${n === null ? 'bg-slate-900 border-indigo-500 animate-pulse' : 'bg-white border-slate-50 shadow-2xl'
                                }`}>
                                {n !== null && <span className="text-8xl font-black text-slate-800 tracking-tighter">{n}</span>}
                                {n === null && <Zap className="text-indigo-400" size={64} />}
                            </div>
                        ))}
                    </div>
                )}

                {gameState === 'geometry' && currentProblem?.mode === 'geometry' && (
                    <div className="flex flex-col items-center gap-12">
                        <div className="w-80 h-80 bg-slate-900 rounded-[5rem] flex items-center justify-center shadow-inner border-8 border-slate-950">
                            {currentProblem.target === 'circle' && <Circle size={160} className="text-indigo-400 drop-shadow-glow" strokeWidth={4} />}
                            {currentProblem.target === 'square' && <Square size={160} className="text-rose-400 drop-shadow-glow" strokeWidth={4} />}
                            {currentProblem.target === 'triangle' && <Triangle size={160} className="text-emerald-400 drop-shadow-glow" strokeWidth={4} />}
                        </div>
                        <Pill color="indigo">Match shape target</Pill>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-3 gap-10 w-full max-w-6xl mt-10">
                {currentProblem?.options?.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt)}
                        className={`${BRAND.card} rounded-[3rem] py-14 font-black text-7xl flex flex-col items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 border-b-[12px] border-slate-100 hover:border-slate-950 active:translate-y-2 active:border-b-0`}>
                        <span className="text-[12px] text-slate-300 uppercase tracking-widest mb-6 block">Option {i + 1}</span>
                        {gameState === 'geometry' ? (
                            <div className="pointer-events-none scale-150">
                                {opt === 'circle' && <Circle size={48} strokeWidth={4} />}
                                {opt === 'square' && <Square size={48} strokeWidth={4} />}
                                {opt === 'triangle' && <Triangle size={48} strokeWidth={4} />}
                            </div>
                        ) : opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MathGame;
