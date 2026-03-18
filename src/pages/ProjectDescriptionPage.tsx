import React from 'react';

import { Github, Building2, Mail, MapPin, BookOpen, User } from 'lucide-react';
import { BRAND, COURSE_INFO, PROJECT_META } from '../data/constants';

const Section: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ icon, label, children }) => (
    <div className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
            {children}
        </div>
    </div>
);

const ProjectDescriptionPage: React.FC = () => (
    <div className={`min-h-screen ${BRAND.bg} pt-32 pb-44 px-6`}>
        <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-10 duration-700 space-y-6">

            {/* Header */}
            <div className={`${BRAND.card} rounded-[2.5rem] p-10`}>
                <span className="inline-block text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 rounded-full px-4 py-1.5 mb-5">
                    Product Description
                </span>
                <h1 className={`${BRAND.textTitle} text-4xl font-black tracking-tighter leading-tight mb-4`}>
                    TactileMath
                </h1>
                <p className="text-slate-500 font-medium leading-relaxed italic text-sm">
                    "An adaptive math learning ecosystem for children on the Autism Spectrum — prioritising visual magnitude
                    and predictive logic over symbolic complexity."
                </p>
            </div>

            {/* Why this portal */}
            <div className={`${BRAND.card} rounded-[2rem] p-8`}>
                <h2 className="text-lg font-black text-slate-800 tracking-tight mb-4">Why TactileMath?</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 leading-relaxed">
                    <div>
                        <h3 className="font-black text-slate-700 mb-2 text-xs uppercase tracking-wider">The Problem</h3>
                        <p>Children with ASD struggle with traditional verbal instruction. Symbolic abstraction, unpredictable feedback and text-heavy interfaces create cognitive barriers that prevent mathematical learning.</p>
                    </div>
                    <div>
                        <h3 className="font-black text-slate-700 mb-2 text-xs uppercase tracking-wider">Our Solution</h3>
                        <ul className="space-y-1.5 list-disc list-inside">
                            <li><strong>Visual-first:</strong> Blocks, shapes &amp; colours over text</li>
                            <li><strong>Game-based:</strong> 3 interactive math modules</li>
                            <li><strong>Instant rewards:</strong> Positive-only reinforcement</li>
                            <li><strong>Progress tracking:</strong> Live analytics dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Course Details */}
            <div className={`${BRAND.card} rounded-[2rem] p-8 space-y-4`}>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">Course &amp; Faculty Details</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                    <Section icon={<BookOpen size={18} />} label="Course Code">
                        <p className="font-black text-slate-800 text-lg">{COURSE_INFO.code}</p>
                    </Section>
                    <Section icon={<BookOpen size={18} />} label="Course Name">
                        <p className="font-bold text-slate-800">{COURSE_INFO.name}</p>
                    </Section>
                </div>

                {/* Teacher Block */}
                <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500">Course Teacher</p>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                            <User size={28} />
                        </div>
                        <div>
                            <p className="font-black text-slate-900 text-lg leading-tight">{COURSE_INFO.teacher.name}</p>
                            <p className="text-indigo-700 font-bold text-sm">{COURSE_INFO.teacher.title}</p>
                        </div>
                    </div>
                    <div className="grid gap-2 pt-2 border-t border-indigo-200">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Building2 size={14} className="text-indigo-400 flex-shrink-0" />
                            <span>{COURSE_INFO.teacher.dept}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Building2 size={14} className="text-indigo-400 flex-shrink-0" />
                            <span>{COURSE_INFO.teacher.univ}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin size={14} className="text-indigo-400 flex-shrink-0" />
                            <span>{COURSE_INFO.teacher.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                            <Mail size={14} className="text-indigo-400 flex-shrink-0" />
                            <span>{COURSE_INFO.teacher.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* GitHub & Collaborators */}
            <div className={`${BRAND.card} rounded-[2rem] p-8 space-y-4`}>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">GitHub &amp; Collaborators</h2>

                <a
                    href={PROJECT_META.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors w-full"
                >
                    <Github size={20} />
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest opacity-60 mb-0.5">GitHub Repository</span>
                        <span className="text-sm truncate">{PROJECT_META.github}</span>
                    </div>
                </a>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                            <Building2 size={18} />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Academic Collaborator</p>
                        <p className="font-black text-slate-800 text-sm text-center">{PROJECT_META.academicCollab}</p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                            <Building2 size={18} />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Industry Collaborator</p>
                        <p className="font-black text-slate-800 text-sm text-center">{PROJECT_META.industryCollab}</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
);

export default ProjectDescriptionPage;
