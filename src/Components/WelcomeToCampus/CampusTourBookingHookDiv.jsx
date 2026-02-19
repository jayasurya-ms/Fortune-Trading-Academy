import React from 'react'

const CampusTourBookingHookDiv = ({color,from,to}) => {
  // let color = '#0D8E47'

  return (
    <div className='w-full h-auto   lg:flex justify-center'>
      <div className='lg:w-[95%] w-full h-auto flex flex-col lg:flex-row justify-around items-center py-18 lg:py-24 lg:gap-0 gap-12 '>
        <div className='lg:w-[40%] w-full flex flex-col lg:gap-1 lg:items-start items-center-safe   '>
          <h2 className='Chivo lg:text-3xl text-xl font-light'>Welcome to Campus in the</h2>
          <h1 className={`Alatsi lg:text-6xl text-5xl `} style={{color:color}}>Bangalore</h1>
        </div>
        <div className='lg:w-[40%] w-full flex justify-center lg:justify-end items-center'>
          <button className='Alatsi lg:text-xl  rounded-full px-8 py-4 lg:px-12 lg:py-6 text-white bg-linear-to-b from-black to-[#0D8E47] cursor-pointer' style={{backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`}}>Book a Campus Tour</button>
        </div>
      </div>
    </div>
  )
}

export default CampusTourBookingHookDiv