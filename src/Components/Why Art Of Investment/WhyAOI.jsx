import React from 'react'
import WhyAOIImage from '../../assets/WhyAOI_image.png'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const WhyAOI = ({title,titleColor,from,to}) => {
    return (
        <div className='w-full h-auto '>
            <div className='w-full h-auto rounded-3xl bg-radial-[at_50%_200%] flex flex-col gap-12 py-12 px-12 '  style={{ background: `radial-gradient(at 50% 30%, ${from} 0%, ${to} 100%)` }}>
                <div className='lg:w-[52%] h-auto flex flex-col gap-4 '>
                    <h2 className='Alatsi text-2xl md:text-3xl' style={{color:titleColor}}>WHY ART OF INVESTMENT COURSE?</h2>
                    <p className='Chivo text-[.75rem] md:text-[1rem] text-white font-extralight'>Equity investments can be broadly classified into
                        several types based on factors such as investment objectives,
                        time horizon and risk tolerance.
                    </p>
                </div>
                <div className='w-full h-auto flex m-auto '>
                    <div className='w-fit h-auto flex lg:flex-row flex-col lg:gap-0 gap-8 justify-around  '>
                        <div className='w-full lg:w-[45%] flex justify-center  h-auto'>
                            <div className='w-full flex justify-center h-auto'>
                                <img src={WhyAOIImage} alt="" className='w-[90%] h-auto' />
                            </div>
                        </div>
                        <div className='w-full lg:w-[70%] h-auto flex flex-col justify-between lg:pl-24'>
                            <div className='w-full lg:w-[80%]  h-auto flex flex-col '>
                                <div className='w-full h-auto pb-4'>
                                    <h2 className='Chivo font-bold text-[1.25rem] md:text-[1.75rem] text-white'>Blue Stocks</h2>
                                </div>
                                <div className='w-full h-auto py-4 border-b border-t border-white/30'>
                                    <div className='w-full  h-auto'>
                                        <p className='Chivo text-[.75rem] md:text-[1rem] font-light text-white/60 '>Blue stocks are stocks of large, established companies with stable earnings,
                                            strong market positions and sound financial principles. These companies are
                                            often industry leaders and have consistent dividend payments. Blue stocks are
                                            considered relatively safer investments suitable for long-term investors looking
                                            for stability and steady growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-between pt-5 lg:pt-0 lg:pr-24'>
                                <div className='w-fit h-fit flex gap-1 px-2 py-1 rounded bg-black/30 text-white Chivo text-xs lg:text-lg'>
                                    <h1>1</h1>
                                    <h1>/</h1>
                                    <h1> 10</h1>
                                </div>
                                <div className='w-fit h-auto flex gap-4'>
                                    <button className='text-white nav-arrow-btn px-1 py-1 md:px-0 md:py-0 md:w-10 md:h-10'>
                                        <FiArrowLeft />
                                    </button>
                                    <button className='text-white nav-arrow-btn px-1 py-1 md:px-0 md:py-0 md:w-10 md:h-10'>
                                        <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAOI