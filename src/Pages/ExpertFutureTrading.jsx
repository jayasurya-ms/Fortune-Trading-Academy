import React, { useContext, useEffect } from 'react'
import WhyFTA from '../Components/Art Of Investment/WhyFTA'
import WhyAOI from '../Components/Why Art Of Investment/WhyAOI'
import Syllabus from '../Components/Syllabus/Syllabus'
import CampusTourBookingHookDiv from '../Components/WelcomeToCampus/CampusTourBookingHookDiv'
import Blogs from '../Components/Blog/Blogs'
import StudentsReview from '../Components/StudentsReview/StudentsReview'
import YoutubVideosComponent from '../Components/YoutubeVideos/YoutubVideosComponent'
import ContactUsCombined from '../Components/GetInTouch/ContactUsCombined'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import WhySwingAndIntraDay from '../Components/ProtraderIntraDay/WhySwingAndIntraDay'
import WhyOnlineTrading from '../Components/WhyOnlineTrading/WhyOnlineTrading'
import WhyDerivativeTrading from '../Components/DerivativeFutureTrading/WhyDerivativeTrading'
import { DataCollections } from '../Store/GlobalDataSets'
import MentorIntro from '../Components/Mentor_Intro/MentorIntro'

const ExpertFutureTrading = () => {
    let textColor = '#96170E'

    let storeObj = useContext(DataCollections)
    useEffect(()=>{
        storeObj.setCurrentPage('FutureTrading')
    },[])

    return (
        <div className='w-full h-auto flex flex-col'>
            <div className='w-full h-auto'>
                <Banner MainTitle={'Expert Future Trading'} Subtitle={'Online Stock Market Training provides individuals with comprehensive training and resources to develop their skills and knowledge of trading stocks in the financial markets.'}
                 textFrom={'#FFF5F4'} textTo={'#FFE5E4'} radialFrom={'#96170E'} radialTo={'#100903'} borderColor={'#96170E'} btnFrom={'#FFF3F2'} btnTo={'#FFE5E4'} btnColr={'#96170E'} contactFrom={'#72030E'} contactTo={'#96170E'}  />
            </div>
            <div className=' w-full h-auto bg-white py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for</h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#96170E]  text-shadow-md text-shadow-slate-500/10'>You ?</h1>
                        <div className='w-full md:w-[70%] px-2 md:px-0 py-4 '>
                            <p className='Chivo text-[.85rem] md:text-[1rem] text-justify md:text-center leading-6 md:leading-7'>Understanding the Stock Market introduces beginners to key financial concepts such as investing,
                                risk management, and accumulating assets. This knowledge allows people to make informed decisions
                                about their finances and plan their long-term financial goals.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-4'>
                        <div className='w-full lg:w-[45%] h-auto px-8 py-7 flex flex-col justify-center items-center gap-4 border-2 rounded-2xl border-black/10 '>
                            <div className='w-fit h-auto border-b border-b-[#F9877E] px-2 py-1  bg-white '>
                                <h2 className='Alatsi text-[1.5rem] md:text-[2rem] font-medium text-[#96170E]'>What is Stock Market.</h2>
                            </div>
                            <div className='w-fit h-auto flex flex-col items-center justify-center  gap-3'>
                                <p className='Chivo text-[.85rem] md:text-lg'>Ways to Make Money in Stock Market (Trader & Investor)</p>
                                <p className='Chivo text-[.85rem] md:text-lg'>Understanding Technical Analysis & Fundamental Analysis</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[45%] h-auto px-8 py-7 flex flex-col justify-center items-center gap-4 border-2 rounded-2xl border-black/10 '>
                            <div className='w-fit h-auto border-b border-b-[#F9877E] px-2 py-1  bg-white '>
                                <h2 className='Alatsi text-[1.5rem] md:text-[2rem] font-medium text-[#96170E]'>Supply vs Demand.</h2>
                            </div>
                            <div className='w-fit h-auto flex flex-col items-center justify-center  gap-3'>
                                <p className='Chivo text-[.85rem] md:text-lg'>Factors Influencing Stock Selection for Investment and Trading</p>
                                <p className='Chivo text-[.85rem] md:text-lg'>How to Interpret news related to Economy and Stock Market</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto'>
                        <div className='w-full h-auto py-16  flex justify-center items-center'>
                            <button className='w-fit h-fit Alatsi text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-white py-2 px-8 md:px-14 md:py-3.5  lg:py-6 lg:px-15 rounded-full bg-radial-[at_50%_150%] from-[#96170E] to-[#100903] '>Book a Campus Tour</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto '>
                    <WhyDerivativeTrading/>
                </div>
                <div className='w-full h-auto px-2 md:px-8 md:py-12'>
                    <WhyFTA title={'Art of Investment Course ?'} titleColor={textColor} />
                </div>
                <div className='w-full h-auto flex justify-center items-center md:py-12'>
                    <MentorIntro from={'#C96F6759'} to={'#C96F6733'} textColor={textColor} />
                </div>
                <div className='w-full h-auto -mt-120 sm:-mt-85 lg:-mt-40 '>
                    <Syllabus textColor={textColor} from={textColor} to={'#100903'} borderColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={textColor} from={textColor} to={'#100903'} />
                </div>
                <div className='w-full h-auto'>
                    <Blogs bgColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview color={textColor} bgColor={'#FFE5E4'} borderColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={textColor} formTextColor={textColor} FbuttonFrom={'#72030E'} FbuttonTo={'#96170E'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={textColor} bgColor={'#100903'} />
            </div>

        </div>
    )
}

export default ExpertFutureTrading