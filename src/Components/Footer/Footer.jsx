import React, { useContext } from 'react'
import ytLogo from '../../assets/Icons/youtube_icon.png'
import linkedinLogo from '../../assets/Icons/LinkedIn_icon.png'
import instaLogo from '../../assets/Icons/Instagram_icon.png'
import facebookLogo from '../../assets/Icons/facebook_icon.png'
import FTAMainPageLogo from '../../assets/Icons/Logo_white.png'
import { DataCollections } from '../../Store/GlobalDataSets'
import { useNavigate } from 'react-router'

const Footer = ({ textColor, bgColor }) => {
    let store = useContext(DataCollections)
    let navigate = useNavigate()
    return (
        <div className='Chivo w-full h-auto ' style={{ backgroundColor: bgColor }}>
            <div className='w-full h-auto flex flex-col gap-5 px-8 py-8 md:px-26 md:py-12 md:pb-28'>
                <div className='w-full h-auto flex flex-col gap-5 md:gap-0 md:flex-row items-center md:justify-between border-b-2 border-b-[#E4C0FF]/40 pb-5'>
                    <div className='w-full h-auto'>
                        <img src={FTAMainPageLogo} alt="" className='w-auto h-8 md:h-16 cursor-pointer' onClick={() => navigate('/')} />
                    </div>
                    <div className='w-full h-full flex  md:justify-end items-center gap-4'>
                        <h2 className='text-white text-[1rem] md:text-xl font-light '>Follow us:</h2>
                        <div className=' w-fit flex gap-4 '>
                            <a href="https://www.facebook.com/MeridaSkillLearningAcad?mibextid=ZbWKwL"><img src={facebookLogo} alt="" className='md:w-8 md:h-8 h-6 w-6 cursor-pointer' /></a>
                            <a href="https://www.instagram.com/meridaskilllearningacademy/"><img src={instaLogo} alt="" className='md:w-8 md:h-8 h-6 w-6 cursor-pointer' /></a>
                            <a href="https://www.youtube.com/@meridaskilllearningacademy"><img src={ytLogo} alt="" className='md:w-8 md:h-8 h-6 w-6 cursor-pointer' /></a>
                            <a href="https://www.linkedin.com/company/merida-skill-learning-academy/?viewAsMember=true"><img src={linkedinLogo} alt="" className='md:w-8 md:h-8 h-6 w-6 cursor-pointer' /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex lg:flex-row flex-col-reverse lg:gap-20 gap-15 justify-baseline'>
                    <div className='w-full lg:w-[40%] h-auto'>
                        <div className='w-full  md:flex-row lg:flex-col h-auto flex flex-col justify-between gap-10  text-white'>
                            <div className=' md:w-[50%] lg:w-full text-justify lg:text-left'>
                                <p className={`leading-5.5  font-light ${store.currentPage == 'MainPage' ? 'text-white/60 text-[1rem]' : 'text-[1.1rem]'} `}>Become a certified stock trader by enrolling in our specialized courses.
                                    Learn Basic to advanced-level trading skills & strategies with our expert-led
                                    courses in Bangalore. Explore our courses now.
                                </p>
                            </div>
                            <div className='w-fit md:w-[50%] lg:w-full h-auto flex flex-col justify-baseline    gap-2.5'>
                                <h2 className='text-[1.35rem] font-semibold md:text-right lg:text-left '>Our Head Office</h2>
                                <h3 className={`md:text-right  lg:text-left ${store.currentPage == 'MainPage' ? 'text-white/60' : ''} `}>1st Floor, 334/28, 14th Cross Rd,<br /> 2nd Block, Jayanagar,<br /> Bengaluru, Karnataka 560011</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[70%] h-auto  text-nowrap flex flex-col md:flex-row justify-between max-xl:gap-4 gap-8 m-auto text-white  xl:justify-between'>
                        <div className='w-full md:w-3/7 h-auto  flex flex-col leading-10'>
                            <h2 className={`font-semibold text-[1.3rem]`} style={{ color: textColor }}>Courses</h2>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/stock_market')}><h2>Stock Market Course</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/pro_trader')}><h2>Pro Trader And Intra Day</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/art_of_investment')}><h2>Investment</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/online_course')}><h2>Online Trading</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/future_trading')}><h2>Future Trading</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/option_trading')}><h2>Option Trading</h2></a>
                        </div>
                        <div className='w-full flex md:w-4/7'>
                        <div className='w-1/2 md:w-1/2 h-auto leading-10 '>
                            <h2 className={`font-semibold text-[1.3rem]`} style={{ color: textColor }}>Company</h2>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/about_us')}><h2>About Us</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Careers</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Blog</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Press Kit</h2></a>
                        </div>
                        <div className='w-1/2 h-auto md:w-1/2 leading-10'>
                            <h2 className={`font-semibold text-[1.3rem]`} style={{ color: textColor }}>Support</h2>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Help Center</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Contact Us</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Privacy Policy</h2></a>
                            <a href="" className='text-[.9rem] lg:text-[1.1rem] text-white/60 font-light cursor-pointer' onClick={() => navigate('/#')}><h2>Terms of Service</h2></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer