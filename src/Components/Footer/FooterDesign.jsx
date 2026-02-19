import React from 'react'
import footerimg from '../../assets/footer-design.png'

function FooterDesign() {
  return (
    <div className='relative h-40 w-full'>
        <div className='absolute h-60 w-full flex items-end object-contain -z-1'>
                <img src={footerimg} className='h-full w-full'/>
                 <div className='absolute bottom-0 h-35 w-full backdrop-blur-[5px] shadow-[0_0_50px_50px_rgba(255,255,255,0.3)]'></div>
        </div>
    </div>
  )
}

export default FooterDesign
