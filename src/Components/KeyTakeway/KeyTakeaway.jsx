import React from 'react'
import bgLine from '../../assets/Lines/KeyTakeways_Line.png'
import diversification from '../../assets/Icons/keytakewayDiversification_icon.png'
import financialLiteracy from '../../assets/Icons/keytakewayFinancialLiteracy_icon.png'
import financialSecurity from '../../assets/Icons/keytakewayFinancialSEcurity_icon.png'
import WealthBuilding from '../../assets/Icons/keytakewayWealthBuilding_icon.png'
import { motion } from 'framer-motion';


// laptop screen positions
const STEPS = [
    {
        id: 0,
        description: "Technical Analysis",
        side: "left",
        pos: { x: -230, y: -150 },
        delay: 0.2,
    },
    {
        id: 1,
        description: "Pro Trader Swing",
        side: "left",
        pos: { x: -300, y: 0 },
        delay: 0.4,
    },
    {
        id: 2,
        description: "Fundamental Analysis",
        side: "left",
        pos: { x: -240, y: 150 },
        delay: 0.6,
    },
    {
        id: 3,
        description: "Pro Trader Intra Day",
        side: "right",
        pos: { x: 240, y: -150 },
        delay: 0.2,
    },
    {
        id: 4,
        description: "Art Of Investment",
        side: "right",
        pos: { x: 300, y: 0 },
        delay: 0.4,
    },
    {
        id: 5,
        description: "Expert Feature and Option Tradee",
        side: "right",
        pos: { x: 290, y: 150 },
        delay: 0.6,
    },
];

// tab screen positions
const STEPS1 = [
    {
        id: 0,
        description: "Technical Analysis",
        side: "left",
        pos: { x: -200, y: -150 },
        delay: 0.2,
    },
    {
        id: 1,
        description: "Pro Trader Swing",
        side: "left",
        pos: { x: -250, y: 0 },
        delay: 0.4,
    },
    {
        id: 2,
        description: "Fundamental Analysis",
        side: "left",
        pos: { x: -200, y: 150 },
        delay: 0.6,
    },
    {
        id: 3,
        description: "Pro Trader Intra Day",
        side: "right",
        pos: { x: 200, y: -150 },
        delay: 0.2,
    },
    {
        id: 4,
        description: "Art Of Investment",
        side: "right",
        pos: { x: 250, y: 0 },
        delay: 0.4,
    },
    {
        id: 5,
        description: "Expert Feature and Option Tradee",
        side: "right",
        pos: { x: 200, y: 150 },
        delay: 0.6,
    },
];

// mobile screen positions
const STEPS2 = [
    {
        id: 0,
        description: "Technical Analysis",
        side: "left",
        pos: { x: -80, y: -250 },
        delay: 0.2,
    },
    {
        id: 1,
        description: "Pro Trader Swing",
        side: "left",
        pos: { x: -80, y: -150 },
        delay: 0.4,
    },
    {
        id: 2,
        description: "Fundamental Analysis",
        side: "left",
        pos: { x: -80, y: 200 },
        delay: 0.6,
    },
    {
        id: 3,
        description: "Pro Trader Intra Day",
        side: "right",
        pos: { x: 80, y: -200 },
        delay: 0.2,
    },
    {
        id: 4,
        description: "Art Of Investment",
        side: "right",
        pos: { x: 80, y: 150 },
        delay: 0.4,
    },
    {
        id: 5,
        description: "Expert Feature and Option Tradee",
        side: "right",
        pos: { x: 50, y: 250 },
        delay: 0.6,
    },
];

const StepNodeDesktop = ({step}) => {
    const isLeft = step.side === "left";

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
                x: step.pos.x,
                y: step.pos.y,
                scale: 1,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
                delay: step.delay,
                duration: 1.2,
                type: "spring",
                stiffness: 60,
            }}
            className="absolute z-20"
        >
            <div className={`flex items-center ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                <div className="px-7 py-2 rounded-full bg-linear-to-br shadow-xl flex flex-col items-center justify-center Alatsi text-white z-10 bg-[#994CD4]">
                    <span className="text-sm tracking-widest text-[10px] md:text-[12px]">{step.description}</span>
                </div>
            </div>
        </motion.div>
    );
};

const KeyTakeaway = () => {
    return (
        <div className='h-auto w-full'>
        <div className='w-full h-auto relative'>
            <div className='absolute size-full -z-10'>
                <img src={bgLine} className='size-full' alt="bg-line"/>
            </div>
            <div className='w-full h-auto pt-16 flex flex-col items-center md:gap-24 lg:gap-0 overflow-hidden'>
                <div className='w-full h-auto flex flex-col gap-1 md:gap-2 justify-center items-center px-2'>
                    <h2 className='Alatsi text-2xl text-center md:text-[3.2rem] text-black'>⁠Key Takeway</h2>
                    <p className='Chivo text-[.75rem] md:text-[.85rem] text-black font-light w-full lg:w-[70%] text-center'>
                        FTA Mentorship program is not just a training program where you learn techniques to invest or trader, but it is program which will help you to change the way you approach the market with focused personal and professional habits.
                    </p>
                </div>

                <div className='w-full h-full flex flex-col justify-center items-center max-lg:mb-[10%] gap-12 lg:gap-36 pt-14 md:pt-0'>
                    <div className='w-full h-auto flex flex-col relative justify-center items-center gap-12 px-6 lg:px-0'>
                        
                        {/* - Changed max-sm:justify-start: Ensures scroll starts from the left.
                           - Changed max-sm:px-6: Aligns the first card with your header padding.
                           - Using snap-x snap-mandatory for the scroll feel.
                        */}
                        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row relative justify-start lg:justify-center items-center gap-6 md:gap-8 lg:gap-12 z-99 max-sm:flex max-sm:flex-row max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:px-6 hide-scrollbar'>
                            
                            {/* Card 1 - Changed to snap-start to prevent clipping */}
                            <div className='h-fit md:h-full lg:h-[60%] flex flex-col justify-center lg:w-[22%] gap-1 lg:gap-4 px-[5%] py-[8%] lg:px-[3%] lg:py-12 lg:-mt-[5%] backdrop-blur-xl bg-radial-[at_50%-90%] from-[#A27BFF]/20 to-[#080B12]/30 rounded-[15%] max-sm:min-w-[75vw] max-sm:snap-start'>
                                <div className='w-fit h-fit '>
                                    <img src={financialLiteracy} alt="" className='w-8 md:w-12 lg:w-20 h-auto' />
                                </div>
                                <div className='w-full h-auto flex flex-col gap-1 lg:gap-4 '>
                                    <h3 className='Alatsi font-light md:font-normal text-[.8rem] md:text-[1rem] lg:text-xl text-white'>Financial Literacy</h3>
                                    <p className='Chivo font-extralight text-justify md:text-left text-[.65rem] md:text-[.55rem] lg:text-[.9rem] text-white/60 '>
                                        Understanding the Stock Market introduces beginners to key financial concepts such as investing, risk management, and accumulating assets.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className='h-fit md:h-full lg:h-[60%] flex flex-col justify-center lg:w-[22%] gap-1 lg:gap-4 px-[5%] py-[8%] lg:px-[3%] lg:py-12 lg:-mt-[2%] backdrop-blur-xl bg-radial-[at_50%-90%] from-[#A27BFF]/20 to-[#080B12]/30 rounded-[15%] max-sm:min-w-[75vw] max-sm:snap-start'>
                                <div className='w-fit h-fit '>
                                    <img src={WealthBuilding} alt="" className='w-8 md:w-12 lg:w-20 h-auto' />
                                </div>
                                <div className='w-full h-auto flex flex-col gap-1 lg:gap-4 '>
                                    <h3 className='Alatsi font-light md:font-normal text-[.8rem] md:text-[1rem] lg:text-xl text-white'>Wealth Building</h3>
                                    <p className='Chivo font-extralight text-justify md:text-left text-[.65rem] md:text-[.55rem] lg:text-[.9rem] text-white/60'>
                                        Investing in the stock market can create wealth over time through capital appreciation and dividends.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className='h-fit md:h-full lg:h-[60%] flex flex-col justify-center lg:w-[22%] gap-1 lg:gap-4 px-[5%] py-[8%] lg:px-[3%] lg:py-12 lg:mt-[8%] backdrop-blur-xl bg-radial-[at_50%-90%] from-[#A27BFF]/20 to-[#080B12]/30 rounded-[15%] max-sm:min-w-[75vw] max-sm:snap-start'>
                                <div className='w-fit h-fit '>
                                    <img src={financialSecurity} alt="" className='w-8 md:w-12 lg:w-20 h-auto' />
                                </div>
                                <div className='w-full h-auto flex flex-col gap-1 lg:gap-4 '>
                                    <h3 className='Alatsi font-light md:font-normal text-[.8rem] md:text-[1rem] lg:text-xl text-white'>Long-term financial security</h3>
                                    <p className='Chivo font-extralight text-justify md:text-left text-[.65rem] md:text-[.55rem] lg:text-[.9rem] text-white/60'>
                                        When beginners learn how to invest in the stock market early, they can lay the foundation for long-term financial security.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className='h-fit md:h-full lg:h-[60%] flex flex-col justify-center lg:w-[22%] gap-1 lg:gap-4 px-[5%] py-[8%] lg:px-[3%] lg:py-12 backdrop-blur-xl xl:-mt-[5%] bg-radial-[at_50%-90%] from-[#A27BFF]/20 to-[#080B12]/30 rounded-[15%] max-sm:min-w-[75vw] max-sm:snap-start'>
                                <div className='w-fit h-fit '>
                                    <img src={diversification} alt="" className='w-8 md:w-12 lg:w-20 h-auto' />
                                </div>
                                <div className='w-full h-auto flex flex-col gap-1 lg:gap-4 '>
                                    <h3 className='Alatsi font-light md:font-normal text-[.8rem] md:text-[1rem] lg:text-xl text-white'>Diversification</h3>
                                    <p className='Chivo font-extralight text-justify md:text-left text-[.65rem] md:text-[.55rem] lg:text-[.9rem] text-white/60'>
                                        The stock market offers a wide range of investment opportunities across sectors, industries and asset classes.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
            <div className='h-screen w-full bg-[url(src/assets/BubblesMainPage.png)] bg-contain bg-center bg-no-repeat'>
                
                {/* BENEFITS SECTION laptop*/}
            <section className="relative w-full overflow-hidden hidden xl:flex flex-col items-center font-montserrat">
                <div className="relative min-h-screen w-full flex items-center justify-center">
                    <div className="absolute w-117 h-117 border-dashed border-3 border-gray-300 rounded-full pointer-events-none" />
                    <div className='absolute w-143 h-143 border-dashed border-3 border-gray-200 rounded-full pointer-events-none flex justify-center items-center'>
                    
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-91 h-91 rounded-full bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border-3 border-dashed border-gray-400 flex items-center justify-center z-30"
                    >
                        <div className=" w-65 h-65 rounded-full border-3 border-dashed border-gray-400 flex items-center justify-center">
                            <h2 className="text-black text-2xl Alatsi tracking-tighter text-center w-[80%]">Why Fortune Trading Academy ?</h2>
                        </div>
                    </motion.div>

                    {STEPS.map((step, index) => (
                        <StepNodeDesktop key={step.id} step={step} index={index} />
                    ))}
                    </div>
                </div>
            </section>

                {/* BENEFITS SECTION tab*/}
            <section className="relative w-full overflow-hidden hidden md:flex xl:hidden flex-col items-center font-montserrat">
                <div className="relative min-h-screen w-full flex items-center justify-center">
                    <div className="absolute w-97 h-97 border-dashed border-3 border-gray-300 rounded-full pointer-events-none" />
                    <div className='absolute w-123 h-123 border-dashed border-3 border-gray-200 rounded-full pointer-events-none flex justify-center items-center'>
                    
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-71 h-71 rounded-full bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border-3 border-dashed border-gray-400 flex items-center justify-center z-30"
                    >
                        <div className=" w-45 h-45 rounded-full border-3 border-dashed border-gray-400 flex items-center justify-center">
                            <h2 className="text-black text-2xl Alatsi tracking-tighter text-center w-[80%]">Why Fortune Trading Academy ?</h2>
                        </div>
                    </motion.div>

                    {STEPS1.map((step, index) => (
                        <StepNodeDesktop key={step.id} step={step} index={index} />
                    ))}
                    </div>
                </div>

            </section>

                    {/* BENEFITS SECTION mobile*/}
            <section className="relative w-full overflow-hidden max-sm:flex hidden flex-col items-center font-montserrat">
                <div className="relative min-h-screen w-full flex items-center justify-center">
                    <div className="absolute w-81 h-81 border-dashed border-3 border-gray-300 rounded-full pointer-events-none" />
                    <div className='absolute w-104 h-104 border-dashed border-3 border-gray-200 rounded-full pointer-events-none flex justify-center items-center'>
                    
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-58 h-58 rounded-full bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border-3 border-dashed border-gray-400 flex items-center justify-center z-30"
                    >
                        <div className=" w-35 h-35 rounded-full border-3 border-dashed border-gray-400 flex items-center justify-center">
                            <h2 className="text-black text-xl Alatsi tracking-tighter text-center w-[80%]">Why Fortune Trading Academy ?</h2>
                        </div>
                    </motion.div>

                    {STEPS2.map((step, index) => (
                        <StepNodeDesktop key={step.id} step={step} index={index} />
                    ))}
                    </div>
                </div>

            </section>


            </div>
        </div>
    )
}

export default KeyTakeaway;