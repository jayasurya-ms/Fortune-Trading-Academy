import React, { useContext, useState, useRef } from 'react'
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
    
    // --- SCROLL & DRAG LOGIC ---
    const scrollRef = useRef(null);
    const itemRefs = useRef([]); // To track each week's position
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragDistance(0);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        setDragDistance(Math.abs(x - startX)); // Track movement distance
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const toggleWeek = (id) => {
        if (dragDistance > 10) return;

        const isOpening = openWeek !== id;
        setOpenWeek(isOpening ? id : null);

        if (isOpening) {
            setTimeout(() => {
                const container = scrollRef.current;
                const element = itemRefs.current[id];

                if (container && element) {
                    // 1. Calculate the right edge of the container
                    const containerRight = container.scrollLeft + container.offsetWidth;
                    
                    // 2. Calculate the right edge of the expanded element 
                    // We add a 'buffer' (e.g., 40px) to ensure the shadow/padding is visible
                    const elementRight = element.offsetLeft + element.offsetWidth + 20;

                    // 3. Only scroll if the element's edge is actually off-screen
                    if (elementRight > containerRight) {
                        container.scrollTo({
                            left: elementRight - container.offsetWidth,
                            behavior: 'smooth'
                        });
                    }
                }
            }, 200); // Increased timeout slightly to ensure width expansion is accounted for
        }
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
                <div 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex flex-row items-center overflow-x-auto gap-4 md:gap-6 pb-12 hide-scrollbar h-full ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                >
                    {WEEK_DATA.map((week) => (
                        <div 
                            key={week.id} 
                            ref={el => itemRefs.current[week.id] = el} // Store reference
                            style={{ backgroundImage: `radial-gradient(circle at 50% 100%,#483162 , #925CBE )` }}
                            className="relative flex flex-row items-center shrink-0 h-72 md:h-80 rounded-[2.5rem] shadow-2xl"
                        >
                            <button
                                onClick={() => toggleWeek(week.id)}
                                className="relative w-12 h-full md:w-16 flex flex-col items-center justify-between py-8 z-20 shrink-0"
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

                            <AnimatePresence>
                                {openWeek === week.id && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 45 }} 
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute left-0 h-[95%] overflow-hidden text-white p-6 z-10 flex items-center w-55 md:w-70" 
                                        // style={{ backgroundImage: `radial-gradient(circle at 50% 100%,#483162 , #925CBE )` }}
                                    >
                                        <div className="min-w-43 md:min-w-53">
                                            <p className="Chivo text-[13px] md:text-[14px] leading-relaxed font-light opacity-90">
                                                {week.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
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

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    )
}

export default EnrollNow;