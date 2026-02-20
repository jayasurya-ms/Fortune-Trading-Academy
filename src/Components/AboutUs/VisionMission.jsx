import React from 'react'
import { motion } from 'framer-motion';

function VisionMission() {
  return (
    <div className='h-full w-full pb-20 overflow-hidden'>
      <div className=' flex flex-col size-full justify-center items-center gap-6'>
        <div className=' flex w-[90%] flex-col md:flex-row border-2 p-4 rounded-4xl border-[#98248b]'>
          <div className=' w-full md:w-[40%] h-auto flex justify-center items-center'>
            <motion.div 
            initial={{opacity: 0, x:'-100%'}}
            whileInView={{opacity: 1, x:0}}
            viewport={{ once: false, amount: 0.4 }}
            transition={{duration: 0.5, delay:0.2}}
            className='text-[#711a67] Alatsi flex flex-col font-bold leading-12 max-sm:py-8 md:leading-20 text-[40px] md:text-[50px] xl:text-[80px] justify-center items-center'>
              <span>Our</span>
              <span>Vision</span>
            </motion.div>
          </div>
          <div className=' w-full md:w-[60%] h-auto flex justify-center items-center'>
            <div className='flex flex-col text-center justify-center items-center size-full w-[90%]'>
              <span
              className='text-[#610556] text-[18px] md:text-[20px] xl:text-[22px] font-semibold'
              >Empowering traders for consistent success through comprehensive training</span>
              <span>At Traders Training Academy, we envision ourselves as the best stock market academy in Bangalore, dedicated to providing high-quality stock market education in India. We are committed to fostering a generation of confident and informed investors, equipped to make sound financial decisions and achieve consistent trading success.</span>
            </div>
          </div>
        </div>
        <div className='flex w-[90%] flex-col-reverse md:flex-row border-2 p-4 rounded-4xl border-[#98248b]'>
          <div className='w-full md:w-[60%] h-full flex justify-center items-center'>
            <div className='flex flex-col text-center justify-center items-center size-full w-[90%]'>
              <span
              className='text-[#610556] text-[18px] md:text-[20px] xl:text-[22px] font-semibold'
              >Empowering traders for consistent success through comprehensive training</span>
              <span>India currently experiences a low stock market participation rate of 3% compared to the US's impressive 55%. TTA aims to bridge this gap by providing comprehensive education and resources, making stock market knowledge accessible to all. India’s stock market participation stands at a mere 3%, a stark contrast to the US’s 55%, highlighting the enormous untapped potential within the Indian economy. As the best stock market training in Bangalore,</span>
            </div>
          </div>
          <div className='w-full md:w-[40%] h-auto flex justify-center items-center'>
            <motion.div 
            initial={{opacity: 0, x:'100%'}}
            whileInView={{opacity: 1, x:0}}
            viewport={{ once: false, amount: 0.4 }}
            transition={{duration: 0.5, delay:0.2}}
            className='text-[#711a67] Alatsi flex flex-col font-bold max-sm:py-8 leading-12 md:leading-20 text-[40px] md:text-[50px] xl:text-[80px] justify-center items-center'>
              <span>Our</span>
              <span>Mission</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionMission
