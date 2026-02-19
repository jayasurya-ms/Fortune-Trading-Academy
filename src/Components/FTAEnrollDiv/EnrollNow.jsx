import React, { useContext, useState } from 'react'
import { DataCollections } from '../../Store/GlobalDataSets'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WEEK_DATA = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Week ${String(i + 1).padStart(2, '0')}`,
    description: "FTA Mentorship program is not just a training program where you learn techniques to invest or trader, but it is program which will help you to change the way you approach the market with focused personal and professional habits."
}));

const EnrollNow = () => {
    let store = useContext(DataCollections)
    const [openWeek, setOpenWeek] = useState(null);

    const toggleWeek = (id) => {
        setOpenWeek(openWeek === id ? null : id);
    };

    return (
        <div className='min-h-screen'>
            <div className='flex justify-center items-center flex-col md:gap-10 gap-5 py-8'>
                <button className="poppins-regular px-8 py-2 rounded-full bg-[#994CD4] text-white border border-black/40 hover:bg-white hover:text-black transition-all"
                    onClick={() => store.handleShow()}>
                    Enroll Now
                </button>
                <div className='flex flex-col xl:w-[60%] md:w-[70%] w-[85%] text-center'>
                    <span className='Alatsi text-[22px] md:text-[38px] xl:text-[45px]'>What You Learn In 18 Weeks?</span>
                    <span className='Chivo text-[16px] md:text-[18px]'>FTA Mentorship program is not just a training program where you learn techniques to invest or trader, but it is program which will help you to change the way you approach the market with focused personal and professional habits.</span>
                </div>
            </div>

            <div className="w-full mx-auto p-6">                
                {/* Horizontal Scroll Container */}
                <div className="flex flex-row items-center overflow-x-auto gap-4 md:gap-6 pb-12 hide-scrollbar h-full">
                    {WEEK_DATA.map((week) => (
                        <div 
                            key={week.id} 
                            className="relative flex flex-row items-center shrink-0 h-72 md:h-80"
                        >
                            {/* Vertical Pill Button */}
                            <button
                                onClick={() => toggleWeek(week.id)}
                                className="relative w-12 h-full md:w-16 flex flex-col items-center justify-between py-8 rounded-full shadow-lg z-20 shrink-0"
                                style={{ backgroundImage: `radial-gradient(circle at 50% 100%,#483162 , #925CBE )` }}
                            >
                                <motion.div
                                    animate={{ rotate: openWeek === week.id ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="z-10 text-white"
                                >
                                    <ChevronDown size={24} className="-rotate-90" />
                                </motion.div>

                                <span className="Alatsi text-2xl font-semibold tracking-widest whitespace-nowrap -rotate-90 origin-center mb-10 text-white">
                                    {week.title}
                                </span>
                            </button>

                            {/* Description Box - Absolute Positioned to prevent layout "struck" feeling */}
                            <AnimatePresence>
                                {openWeek === week.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 60 }} // Slides out slightly without pushing others
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute left-0 h-[95%] overflow-hidden text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl z-10 flex items-center w-55 md:w-70" 
                                        style={{ backgroundImage: `radial-gradient(circle at 50% 100%,#483162 , #925CBE )` }}
                                    >
                                        <div className="min-w-43 md:min-w-53">
                                            <p className="Chivo text-[13px] md:text-[14px] leading-relaxed font-light opacity-90">
                                                {week.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            {/* Spacer to maintain gap even when closed */}
                            <div className={`${openWeek === week.id ? 'w-58 md:w-73' : 'w-0'} transition-all duration-300`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full h-auto bg-radial-[at_50%_90%] text-white from-[#A27BFF] to-[#080B12] flex flex-col justify-center items-center gap-8 py-12 sm:py-20'>
                <div className='w-full h-auto flex flex-col justify-center items-center'>
                    <h1 className='poppins-bold text-lg sm:text-2xl text-center'>Enroll Today to Learn Trading the Right Way</h1>
                    <p className='poppins-regular text-[.75rem] sm:text-[1rem] text-center'>Build Strong Trading and Investing Skills with Our Stock Market Courses</p>
                </div>
                <button className="poppins-regular px-8 py-2 rounded-full bg-[#080B12] text-white border border-white/20 hover:bg-white hover:text-black transition-all"
                    onClick={() => store.handleShow()}>
                    Enroll Now
                </button>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    )
}

export default EnrollNow;