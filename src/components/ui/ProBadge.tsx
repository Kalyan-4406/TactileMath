import React from 'react';
import { BRAND } from '../../data/constants';

const ProBadge: React.FC = () => (
    <div className={`absolute top-6 right-6 ${BRAND.proBlue} text-white px-8 py-4 rounded-3xl font-black text-4xl shadow-lg z-20 transform hover:scale-105 transition-transform cursor-default select-none`}>
        Pro
    </div>
);

export default ProBadge;
