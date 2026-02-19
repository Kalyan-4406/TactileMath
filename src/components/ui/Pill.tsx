import React from 'react';

type PillProps = {
    children: React.ReactNode;
    color?: "indigo" | "emerald" | "rose" | "slate";
};

const Pill: React.FC<PillProps> = ({ children, color = "indigo" }) => {
    const styles = {
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
        rose: "bg-rose-50 text-rose-700 border-rose-100",
        slate: "bg-slate-900 text-white border-slate-800"
    };
    return <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${styles[color]}`}>{children}</span>;
};

export default Pill;
