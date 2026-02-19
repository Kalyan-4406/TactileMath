import React from 'react';
import { BRAND } from '../../data/constants';

type ActionButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ children, onClick, className = "" }) => (
    <button
        onClick={onClick}
        className={`${BRAND.teal} text-white w-full py-4 rounded-xl font-bold text-lg hover:brightness-105 transition-all active:scale-[0.98] shadow-md ${className}`}
    >
        {children}
    </button>
);

export default ActionButton;
