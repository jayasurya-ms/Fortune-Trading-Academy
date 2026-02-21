import React, { useState } from 'react'
import dyk from '../../assets/didyouknow.png'
import rightArrow from '../../assets/Icons/right_long_Arrow.png'

const DidYouKnow = () => {
    const accordionData = [
        { id: 0, title: 'Mentorship', content: 'Our mentorship program is not just a training program where you learn techniques to invest or trade, the market with focused personal and professional habits.' },
        { id: 1, title: 'Market Logic', content: 'Understand the core mechanics of price action. We focus on why the market moves, not just how to follow indicators blindly.' },
        { id: 2, title: 'Psychology', content: 'Trading is 80% psychology. We help you build the emotional discipline required to handle both wins and losses without bias.' },
        { id: 3, title: 'Risk Control', content: 'Learn professional risk management strategies used by institutions to protect capital and ensure long-term sustainability.' },
        { id: 4, title: 'Live Support', content: 'Get real-time market analysis and support. Our community helps you stay updated with changing market conditions daily.' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='w-full h-auto '>
            <div className='w-full h-auto'>
                <div className='w-full h-full relative flex flex-col'>
                    
                    {/* Top Section with Background Image */}
                    <div className=' w-full relative min-h-55 md:min-h-60 lg:min-h-75 flex flex-col items-center justify-center overflow-hidden'>
                        <div className='relative z-20 mt-10 md:mt-8 w-[95%] md:w-[90%] xl:w-[75%]'>
                            <div className=''>
                                <h2 className='Chivo text-[0.6rem] sm:text-xs lg:text-lg font-bold text-black bg-white w-fit px-5 py-1 border-3 rounded-full'>
                                    <span>Did you know,</span>
                                </h2>
                            </div>
                            
                            <div className=' flex items-center flex-col text-[14px] md:text-[14px] lg:text-2xl'>
                                <div className=' flex flex-col md:flex-row w-[90%] md:w-[80%] justify-center md:gap-2'>
                                    <span className='text-[#B656FF] Chivo font-semibold '>After pandemic,</span>
                                    <img src={rightArrow} alt="arrow" className='md:w-20! w-12! hidden md:block' />
                                    <h1 className='text-white/80 Chivo font-semibold '>2Crs demat account has increased to 14.5 crs.</h1>
                                </div>
                                <div className=' w-[90%] md:w-[80%] flex justify-center'>
                                    <div className='text-white Chivo font-semibold'>
                                        <span>However only 20% of people make money in the stock market. <span className='text-[#B656FF]'>WHY?</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute inset-0 z-10 '>
                            <img src={dyk} alt="background" className='w-full h-full object-cover' />
                        </div>
                    </div>

                    {/* Accordion Content Section */}
                    <div className=' relative w-full h-30 xl:h-55 flex flex-col items-center border border-t-0 border-[#994CD4] rounded-b-3xl backdrop-blur-sm z-10'>
                        
                        {/* Horizontal Scrollable Tabs */}
                        <div className='absolute -top-6 md:-top-7.5 xl:-top-8 w-full px-5 xl:px-0 xl:w-[90%] h-auto flex flex-nowrap overflow-x-auto no-scrollbar! gap-5 md:gap-6 xl:gap-10 justify-start xl:justify-center py-2'>
                            {accordionData.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`
                                        shrink-0 w-fit h-fit Chivo text-[14px] md:text-[16px] xl:text-lg rounded-full 
                                        px-5 py-1.5 md:px-8 md:py-2 lg:px-12 transition-all duration-300 border
                                        hover:scale-103 hover:shadow-lg ease-in-out
                                        ${activeIndex === index 
                                            ? 'bg-[#994CD4] text-white shadow-lg scale-105 border-[#994CD4]' 
                                            : 'text-[#994CD4] backdrop-blur-xl bg-white border border-black/50'}
                                    `}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        {/* Description Content */}
                        <div className=' w-full h-35 md:h-45 flex justify-center items-center pt-7 md:pt-6 xl:mt-7 px-5 md:px-20 xl:px-30'>
                            <div className='w-full text-center'>
                                <h2 className='Chivo text-[12px] md:text-[14px] xl:text-[20px]'>
                                    <span className='text-[#B656FF] font-bold mr-2'>{activeIndex + 1}.</span>
                                    {accordionData[activeIndex].content}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DidYouKnow






// import React from 'react'
// import dyk from '../../assets/didyouknow.png'
// import rightArrow from '../../assets/Icons/right_long_Arrow.png'

// const DidYouKnow = () => {
//     return (
//         <div className='w-full h-auto'>
//             <div className='w-full h-auto'>
//                 <div className='w-full h-full relative flex flex-col  '>
//                     <div className='w-full h-atuo  ' >
//                         <div className='w-full h-atuo flex flex-col items-center relative mt-[6%] z-999' >
//                             <div className='w-fit h-fit relative flex flex-col '>
//                                 <div className='h-full relative top-0 left-0 w-[30%] flex justify-center pb-2!'>
//                                     <h2 className='w-fit h-fit px-2 py-.5 sm:px-8 sm:py-1 rounded-full Chivo text-[.3rem] ml-[3%] lg:ml-[10%] xl:ml-0  sm:text-xs xl:text-lg font-semibold text-nowrap bg-white border-2 lg:border-3 '>Did you know,</h2>
//                                 </div>
//                                 <div className='w-fit h-fit flex flex-col justify-center items-center'>
//                                     <div className='w-fit h-auto Chivo font-semibold text-[.45rem] sm:text-[1rem] xl:text-2xl flex justify-center items-center gap-0.5 sm:gap-2 text-white/60 '>
//                                         <span className='text-[#B656FF]'>After pandemic,</span>
//                                         <img src={rightArrow} alt="" className='w-[5%] sm:w-[5%] sm:h-[3%] lg:w-[8%] h-auto' />
//                                         <h1 >2Crs demat account has increased to 14.5 crs accounts.</h1>
//                                     </div>
//                                     <h1 className='Chivo font-semibold text-[.45rem] md:text-[0.8rem] xl:text-2xl text-white'> However only 20% of people make money in the stock market. WHY?</h1>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='absolute z-10 top-0 left-0 w-full h-auto'>
//                             <img src={dyk} alt="" className='w-full h-full' />
//                         </div>
//                     </div>
//                     <div className='relative w-full h-fit flex flex-col border border-t-0 border-[#994CD4] max-sm:mt-[2%] lg:mt-[3%] xl:mt-[4%] rounded-br-3xl rounded-bl-3xl'>
//                         <div className='absolute xl:-top-[15%] w-full h-auto flex  z-99 gap-2 sm:gap-6 lg:gap-12 justify-center text-white'>
//                             <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-[#994CD4]  '>Title 1</h1>
//                             <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
//                             <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
//                             <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
//                             <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
//                         </div>
//                         <div className='w-full h-auto  z-99 flex justify-center items-center py-3 sm:py-10  '>
//                             <div className='sm:w-[90%] h-auto flex px-2 '>
//                                 <h2 className='Chivo text-[.4rem] sm:text-xs lg:text-lg font-light leading-2 sm:leading-4 lg:leading-7'>1  Mentorship program is not just a training program where you learn techniques to invest or trader, but it is program which will help you to change the way you approach the market with focused personal and professional habits.</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
                    
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DidYouKnow