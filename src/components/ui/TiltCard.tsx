import React, { useState, useRef } from 'react';
import { BRAND } from '../../data/constants';

type TiltCardProps = {
    children: React.ReactNode;
    className?: string;
    padding?: string;
    dark?: boolean;
    onClick?: () => void;
};

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", padding = "p-10", dark = false, onClick }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotation({ x: ((y - centerY) / centerY) * -5, y: ((x - centerX) / centerX) * 5 });
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => setRotation({ x: 0, y: 0 })} onClick={onClick}
            className={`transition-transform duration-300 ${className} ${onClick ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''}`}
            style={{ transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
            <div className={`${dark ? 'bg-slate-900 border-slate-800 shadow-2xl' : BRAND.card} border-2 border-slate-100 rounded-[3rem] ${padding} h-full overflow-hidden`}>
                {children}
            </div>
        </div>
    );
};

export default TiltCard;
