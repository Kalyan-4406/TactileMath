import React from 'react';
import { BRAND, TEAM_MEMBER, COURSE_INFO, PROJECT_META } from '../data/constants';
import Pill from '../components/ui/Pill';

const MemberDetail: React.FC = () => (
    <div className={`min-h-screen ${BRAND.bg} flex items-center justify-center p-8`}>
        <div className="relative animate-in zoom-in-95 duration-700">
            <div className={`${BRAND.card} max-w-lg w-full text-center py-24 px-20 rounded-[4rem] relative overflow-hidden`}>
                
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 to-emerald-500" />
                
                <div className="relative w-72 h-72 mx-auto mb-14">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-5" />
                </div> {/* ✅ FIXED: Properly closed this div */}

                <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">
                    {TEAM_MEMBER.name}
                </h2>

                <Pill color="indigo">{TEAM_MEMBER.rollNo}</Pill>

                <div className="mt-12 space-y-8 w-full">
                    
                    <div className="p-8 rounded-[3rem] bg-slate-50 border-2 border-slate-100 flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                            Member Role
                        </span>
                        <span className="text-xl font-black text-slate-800">
                            Lead Full Stack Developer
                        </span>
                    </div>

                    <div className="text-left space-y-6">
                        
                        <div className="bg-indigo-50/50 p-8 rounded-[2rem] border border-indigo-100">
                            <h3 className="text-indigo-900 font-black text-lg mb-4 uppercase tracking-wider border-b border-indigo-200 pb-2">
                                Course Details
                            </h3>
                            <div className="grid gap-2">
                                <p>
                                    <span className="font-bold text-slate-500 text-xs uppercase tracking-wider">
                                        Course Code:
                                    </span>{' '}
                                    <span className="font-bold text-slate-800">
                                        {COURSE_INFO.code}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-bold text-slate-500 text-xs uppercase tracking-wider">
                                        Course Name:
                                    </span>{' '}
                                    <span className="font-bold text-slate-800">
                                        {COURSE_INFO.name}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-100">
                            <h3 className="text-emerald-900 font-black text-lg mb-4 uppercase tracking-wider border-b border-emerald-200 pb-2">
                                Course Teacher
                            </h3>
                            <div className="flex flex-col gap-1 text-sm">
                                <span className="font-black text-slate-800 text-lg">
                                    {COURSE_INFO.teacher.name}
                                </span>
                                <span className="font-medium text-slate-600">
                                    {COURSE_INFO.teacher.title}
                                </span>
                                <span className="text-slate-500">
                                    {COURSE_INFO.teacher.dept}
                                </span>
                                <span className="text-slate-500">
                                    {COURSE_INFO.teacher.univ}
                                </span>
                                <span className="text-slate-500">
                                    {COURSE_INFO.teacher.location}
                                </span>
                                <span className="text-indigo-600 font-medium mt-2">
                                    {COURSE_INFO.teacher.email}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center">
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                                    Collaborator
                                </p>
                                <p className="font-bold text-slate-800">
                                    {PROJECT_META.academicCollab}
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center">
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                                    Collaborator
                                </p>
                                <p className="font-bold text-slate-800">
                                    {PROJECT_META.industryCollab}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default MemberDetail;
