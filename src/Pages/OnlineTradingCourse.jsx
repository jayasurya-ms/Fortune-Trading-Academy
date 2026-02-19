import React, { useContext, useEffect } from 'react'
import InrtaWFYicon1 from '../assets/Icons/WhatAreStockMarket_icon.png'
import InrtaWFYicon2 from '../assets/Icons/MasteringValueInvesting_icon.png'
import InrtaWFYicon3 from '../assets/Icons/UnderstandingBalance_icon.png'
import InrtaWFYicon4 from '../assets/Icons/HowtoManageRisk_icon.png'
import InrtaWFYicon5 from '../assets/Icons/SurveysForBetter_icon.png'
import InrtaWFYicon6 from '../assets/Icons/stockSelectionTechnique_icon.png'
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
import { DataCollections } from '../Store/GlobalDataSets'
import MentorIntro from '../Components/Mentor_Intro/MentorIntro'
import Content from '../Components/Banner/Content'

const contentData =[
    {
        id: 1,
        title: 'What Are Stock Market “Sanskar”',
        description: 'Understand the right mindset, habits, and rules that help you trade responsibly and avoid common beginner mistakes.',
        icon: InrtaWFYicon1,
    },
    {
        id: 2,
        title: 'Analysis of Stocks Using Candlestick Patterns',
        description: 'Identify patterns like Doji, Hammer, Engulfing, and learn how to use them for better entry and exit decisions.',
        icon: InrtaWFYicon2,
    },
    {
        id: 3,
        title: 'Understanding the Market’s Driving Forces',
        description: 'Understand what actually moves the market news, fundamentals, institutional activity, and global cues.',
        icon: InrtaWFYicon3,
    },
    {
        id: 4,
        title: 'How to Manage Risks & Ensure Profits',
        description: 'Understand how to protect your capital first, so profits can grow consistently.',
        icon: InrtaWFYicon4,
    },
    {
        id: 5,
        title: 'Surveys for Better Grasping of Concepts',
        description: 'Apply what you learn through surveys, quizzes, and practical exercises.',
        icon: InrtaWFYicon5,
    },
    {
        id: 6,
        title: 'Identifying Market Trends',
        description: 'Understand how to adjust your strategy based on the current market trend.',
        icon: InrtaWFYicon6,
    }
]


const OnlineTradingCourse = () => {
        let textColor ='#2737A2'
        let storeObj = useContext(DataCollections)
        useEffect(()=>{
           storeObj.setCurrentPage('OnlineCourse')
        },[])
    
    return (
        <div className='w-full h-auto flex flex-col'>
            <div className='w-full h-auto'>
                <Banner MainTitle={'Online Trading Course'} Subtitle={'Online Stock Market Training provides individuals with comprehensive training and resources to develop their skills and knowledge of trading stocks in the financial markets.'} 
                textFrom={'#EDF2FF'} textTo={'#C1DCFF'} radialFrom={'#212750'} radialTo={'#040612'} borderColor={'#215E86'} btnFrom={'#F5FBFF'} btnTo={'#E2F3FF'} btnColr={'#2737A2'} contactFrom={'#141F77'} contactTo={'#2737A2'}  />
            </div>
            <div className=' w-full h-auto bg-white py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 flex flex-col gap-5 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for </h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#2737A2]  text-shadow-md text-shadow-slate-500/10'>You ?</h1>
                        <div className='w-full md:w-[70%] px-2 md:px-0 py-4 '>
                            <p className='Chivo text-[.85rem] md:text-[1rem] text-justify md:text-center leading-6 md:leading-7'>Understanding the Stock Market introduces beginners to key financial concepts such as investing,
                                risk management, and accumulating assets. This knowledge allows people to make informed decisions
                                about their finances and plan their long-term financial goals.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Content  datas={contentData}/>
                    </div>
                    <div className='w-full h-auto'>
                        <div className='w-full h-auto py-8  flex justify-center items-center'>
                            <button className='w-fit h-fit Alatsi text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-white py-2 px-8 md:px-14 md:py-3.5  lg:py-6 lg:px-15 rounded-full bg-radial-[at_50%_150%] from-[#141F77] to-[#040612] '>Book a Campus Tour</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto -mb-12 md:-mb-20 z-10 relative'>
                    <WhyOnlineTrading />
                </div>
                <div className='w-full h-auto px-2 md:px-8 z-20 relative'>
                    <WhyFTA title={'Equity Course ?'} titleColor={'#2737A2'} />
                </div>
                <div className='w-full h-auto flex justify-center items-center md:py-12'>
                    <MentorIntro from={'#5F7FD659'} to={'#5F7FD640'} textColor={textColor} />
                </div>
                <div className='w-full h-auto -mt-120 sm:-mt-85 lg:-mt-40 '>
                    <Syllabus textColor={'#2737A2'} from={'#141F77'} to={'#040612'} borderColor={'#2737A2'} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={'#2737A2'} from={'#040612'} to={'#141F77'} />
                </div>
                <div className='w-full h-auto'>
                    <Blogs bgColor={'#2737A2'} />
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview color={'#2737A2'} bgColor={'#D6E8FF'} borderColor={'#2737A2 '} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={'#2737A2'} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={'#2737A2'} formTextColor={'#2737A2'} FbuttonFrom={'#141F77'} FbuttonTo={'#2737A2'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={'#2737A2'} bgColor={'#040612'} />
            </div>

        </div>
    )
}

export default OnlineTradingCourse