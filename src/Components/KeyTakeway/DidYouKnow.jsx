import React from 'react'
import dyk from '../../assets/didyouknow.png'
import rightArrow from '../../assets/Icons/right_long_Arrow.png'

const DidYouKnow = () => {
    return (
        <div className='w-full h-auto'>
            <div className='w-full h-auto'>
                <div className='w-full h-full relative flex flex-col  '>
                    <div className='w-full h-atuo  ' >
                        <div className='w-full h-atuo flex flex-col items-center relative mt-[6%] z-999' >
                            <div className='w-fit h-fit relative flex flex-col '>
                                <div className='h-full relative top-0 left-0 w-[30%] flex justify-center pb-2!'>
                                    <h2 className='w-fit h-fit px-2 py-.5 sm:px-8 sm:py-1 rounded-full Chivo text-[.3rem] ml-[3%] lg:ml-[10%] xl:ml-0  sm:text-xs xl:text-lg font-semibold text-nowrap bg-white border-2 lg:border-3 '>Did you know,</h2>
                                </div>
                                <div className='w-fit h-fit flex flex-col justify-center items-center'>
                                    <div className='w-fit h-auto Chivo font-semibold text-[.45rem] sm:text-[1rem] xl:text-2xl flex justify-center items-center gap-0.5 sm:gap-2 text-white/60 '>
                                        <span className='text-[#B656FF]'>After pandemic,</span>
                                        <img src={rightArrow} alt="" className='w-[5%] sm:w-[5%] sm:h-[3%] lg:w-[8%] h-auto' />
                                        <h1 >2Crs demat account has increased to 14.5 crs accounts.</h1>
                                    </div>
                                    <h1 className='Chivo font-semibold text-[.45rem] md:text-[0.8rem] xl:text-2xl text-white'> However only 20% of people make money in the stock market. WHY?</h1>
                                </div>
                            </div>
                        </div>
                        <div className='absolute z-10 top-0 left-0 w-full h-auto'>
                            <img src={dyk} alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className='relative w-full h-fit flex flex-col border border-t-0 border-[#994CD4] max-sm:mt-[2%] lg:mt-[3%] xl:mt-[4%] rounded-br-3xl rounded-bl-3xl'>
                        <div className='absolute xl:-top-[15%] w-full h-auto flex  z-99 gap-2 sm:gap-6 lg:gap-12 justify-center text-white'>
                            <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-[#994CD4]  '>Title 1</h1>
                            <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
                            <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
                            <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
                            <h1 className='w-fit h-fit Chivo text-[.5rem] md:text-[0.8rem] text-nowrap lg:text-xl rounded-full px-4 py-0.5 sm:px-10 sm:py-1 xl:px-14 xl:py-2 bg-radial-[at_50%_90%] from-[#A27BFF]/30 to-[#080B12]/40 backdrop-blur-md '>Title 1</h1>
                        </div>
                        <div className='w-full h-auto  z-99 flex justify-center items-center py-3 sm:py-10  '>
                            <div className='sm:w-[90%] h-auto flex px-2 '>
                                <h2 className='Chivo text-[.4rem] sm:text-xs lg:text-lg font-light leading-2 sm:leading-4 lg:leading-7'>1  Mentorship program is not just a training program where you learn techniques to invest or trader, but it is program which will help you to change the way you approach the market with focused personal and professional habits.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default DidYouKnow