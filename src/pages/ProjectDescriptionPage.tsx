import React from 'react';
import { Github, Building2 } from 'lucide-react';
import { BRAND, COURSE_INFO, PROJECT_META } from '../data/constants';
import Pill from '../components/ui/Pill';

const ProjectDescriptionPage: React.FC = () => (
    <div className={`min-h-screen ${BRAND.bg} pt-32 pb-44 px-8`}>
        <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
            <div className={`${BRAND.card} rounded-[3rem] p-16 space-y-12`}>
                <div className="border-b-2 border-slate-50 pb-10">
                    <Pill color="indigo">Framework details</Pill>
                    <h2 className={`${BRAND.textTitle} text-5xl font-black mt-6 tracking-tighter leading-none`}>Course Evaluation <br /> Dashboard.</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                        <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">Lead Professor</p>
                        <p className="text-xl font-bold text-slate-800">{COURSE_INFO.teacher.name}</p>
                        <p className="text-sm text-slate-500">{COURSE_INFO.teacher.dept}</p>
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">Course Info</p>
                        <p className="text-xl font-bold text-slate-800">{COURSE_INFO.code}</p>
                        <p className="text-sm text-slate-500">{COURSE_INFO.name}</p>
                    </div>
                </div>
                <div className="p-10 rounded-3xl bg-slate-50 border-2 border-slate-100 space-y-8">
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-4">Strategic Purpose</h4>
                        <p className="text-slate-600 leading-relaxed font-medium italic">
                            "Developing an adaptive learning ecosystem for children on the Autism Spectrum (ASD) by prioritizing visual magnitude and predictive logic over symbolic complexity."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Why this portal?</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Children with ASD often struggle with traditional verbal instruction. This portal provides a predictable, visually-driven environment that reduces sensory overload and focuses on concrete logic.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Core Highlights</h4>
                            <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                                <li><strong>Multimodal Learning:</strong> Integrates math, patterns, and shapes.</li>
                                <li><strong>Visual First:</strong> Prioritizes imagery over text.</li>
                                <li><strong>Immediate Feedback:</strong> Uses positive reinforcement animations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <a href={PROJECT_META.github} target="_blank" rel="noreferrer" className={`${BRAND.teal} text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 w-full transition-transform hover:scale-[1.02] active:scale-[0.98]`}>
                        <Github size={20} /> GitHub Details
                    </a>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 text-center">
                            <Building2 size={20} className="mb-1" />
                            <span className="text-xs uppercase tracking-widest opacity-70">Collaborator</span>
                            <span>{PROJECT_META.academicCollab}</span>
                        </div>
                        <div className="bg-slate-800 text-white px-8 py-5 rounded-2xl font-bold flex flex-col items-center justify-center gap-2 text-center">
                            <Building2 size={20} className="mb-1" />
                            <span className="text-xs uppercase tracking-widest opacity-70">Collaborator</span>
                            <span>{PROJECT_META.industryCollab}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectDescriptionPage;
