import React from 'react'

const Syllabus = ({textColor, from, to, borderColor}) => {
    return (
        <div className='w-full h-auto p-5'>
            <div className='w-full h-auto flex flex-col gap-4 border-2 rounded-xl'style={{borderColor:borderColor}}>
                <div className='w-fit h-auto pl-8 md:pl-12'>
                    <h1 className='Alatsi text-[2.5rem]  md:text-[4rem] font-normal tracking-[5px] text-[#96170E] ' style={{color:textColor}}>Syllabus</h1>
                </div>
                <div className='w-full h-auto flex flex-col gap-8 bg-radial-[at_50%_800%] from-[#96170E] to-[#100903] rounded-3xl px-8 md:px-12 py-8' style={{backgroundImage: `radial-gradient(circle at 50% 200%, ${from}, ${to})`}}>
                    <div className='flex flex-col gap-2'>
                        <h2 className='Alatsi text-[1.5rem] md:text-[2rem] text-white'>Stock Market - Equity</h2>
                        <p className='Chivo font-light text-[.85rem] md:text-[1rem] w-full md:w-[70%] text-white/60'>Equity?,Trader vs investor vs gambler,
                            Different types of traders,IPO and its process,Demat account creation, Types of stock exchanges and their functioning
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='Alatsi text-[1.5rem] md:text-[2rem] text-white'>Stock Market - Equity</h2>
                        <p className='Chivo font-light text-[.85rem] md:text-[1rem] w-full md:w-[83%] text-white/60'>Index vs stocks,Index balancing,Stock selection,
                            entry and exit planning,Demat account interface training,How to buy?,How to sell?,
                            Stop loss and various types of orders,Intraday and swing trading,SGX Nifty and its importance,
                            Various in-depth analysis including global,Preparation for intraday trading.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Syllabus