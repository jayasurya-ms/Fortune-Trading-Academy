import React from 'react'
import mentorPicture from '../../assets/mentorImage-CFpe_pRk 1.png'

const MentorIntro = ({ from, to, textColor }) => {
  return (
    <div className='w-screen h-screen flex justify-center  '>
      <div className='w-[94%] h-fit  relative'>
        <div className='w-full h-full flex justify-between ml-[3%] lg:mt-[6%]'>
          <div className='w-fit h-fit flex flex-col   '>
            <h3 className='Alatsi text-[.7rem] sm:text-lg lg:text-2xl xl:text-3xl leading-1 sm:leading-3 lg:leading-10 '>Meet Our Mentor</h3>
            <h1 className='Alatsi text-[.8rem] sm:text-2xl lg:text-3xl xl:text-5xl text-[#0BB759] ' style={{ color: textColor }}>Mr. Athirupan K. K.</h1>
          </div>
          <div className='w-fit h-fit flex items-center gap-0.5 px-1 py-0.5 sm:gap-1 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full bg-white/50  z-30 mr-[37%] sm:mr-[35%] mt-4! sm:-mt-[2%] md:mr-[34%] lg:mr-[35%] xs:mr-[38.5%]  '>
            <h1 className='Chivo font-extrabold text-[.5rem] sm:text-xl lg:text-2xl xl:text-4xl text-[#0BB759]  ' style={{ color: textColor }}>20+</h1>
            <h3 className='Chivo font-bold sm:font-extrabold text-[.4rem] sm:text-[1rem] lg:text-xl xl:text-2xl text-[#080B12]/70 leading-2 sm:leading-4.5 lg:leading-8'>Years of <br /> Experience</h3>
          </div>
        </div>
        <div className='w-full h-full flex justify-between pl-[3%] cardstyle relative -mt-[10%]    ' style={{ background: `radial-gradient(at 50% 30%, ${from} 0%, ${to} 100%)` }} >
          <p className='Chivo text-[.3rem] sm:text-[.65rem] lg:text-[.8rem] xl:text-[1rem] relative w-[60%] lg:w-[54%] md:font-light lg:font-normal mt-[13%] xl:mt-[14%] leading-1.5 sm:leading-4 lg:leading-5 xl:leading-8 '>Athirupan K. K., our award-winning mentor, is a visionary leader with over 20 years
            of experience in entrepreneurship, stock trading, and investment strategies. His exceptional
            track record in founding successful companies and guiding traders has earned him multiple
            accolades in the financial industry. Known for his innovative teaching methods, Athirupan
            combines practical insights with personalized mentoring to help students navigate the
            complexities of the stock market. His unique ability to simplify trading concepts and instill
            confidence in learners makes him an invaluable guide for anyone aspiring to succeed in the
            world of trading and investments.
          </p>
          <div className='w-[40%] h-full flex justify-center relative bottom-0 right-0 mt-[3%] '>
            <img src={mentorPicture} alt="" className='w-[70%] lg:w-[70%]  h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorIntro