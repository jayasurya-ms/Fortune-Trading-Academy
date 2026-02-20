import React, { useContext, useEffect } from 'react'
import InrtaWFYicon1 from '../assets/Icons/stockSelectionTechnique_icon.png'
import InrtaWFYicon2 from '../assets/Icons/Analysing_key_ratio_icon.png'
import InrtaWFYicon3 from '../assets/Icons/PsychologyofTrading.png'
import InrtaWFYicon4 from '../assets/Icons/TradingIndicator_icon.png'
import InrtaWFYicon5 from '../assets/Icons/MasteringValueInvesting_icon.png'
import InrtaWFYicon6 from '../assets/Icons/ChartPattern_icon.png'
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
import { DataCollections } from '../Store/GlobalDataSets'
import MentorIntro from '../Components/Mentor_Intro/MentorIntro'
import Content from '../Components/Banner/Content'
import { Helmet } from 'react-helmet-async'

const contentData =[
    {
        id: 1,
        title: 'Stock Selection Techniques',
        description: 'Learn how to identify strong stocks with high potential using market trends, volume analysis, and fundamental & technical filters.',
        icon: InrtaWFYicon1,
    },
    {
        id: 2,
        title: 'Identifying Entry & Exit Using Price Action',
        description: 'Master price action concepts to find accurate entry and exit points.',
        icon: InrtaWFYicon2,
    },
    {
        id: 3,
        title: 'Preparing You for Trading Psychology',
        description: 'Build habits to stay calm, stick to your plan, and make rational decisions under pressure.',
        icon: InrtaWFYicon3,
    },
    {
        id: 4,
        title: 'Trading Indicators (RSI, Moving Averages, Pivot Points)',
        description: 'Learn how and when to use indicators, and how to combine them without confusion.',
        icon: InrtaWFYicon4,
    },
    {
        id: 5,
        title: 'Trading Strategies (Intraday, Swing & More)',
        description: 'Learn when to use which strategy based on market conditions and your risk profile',
        icon: InrtaWFYicon5,
    },
    {
        id: 6,
        title: 'Technical Analysis & Chart Patterns',
        description: 'Move from beginner to pro-level chart analysis with real examples.',
        icon: InrtaWFYicon6,
    }
]


const ProTraderAndIntraDay = () => {

    let storeObj = useContext(DataCollections)

    const handleShow = () => {
        console.log('inside show');

    }

    useEffect(() => {
        storeObj.setCurrentPage('IntraDay')
    }, [])

    const proTraderSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Pro Trader and Intra Day Course",
      "description": "Advanced intraday trading strategies and professional price action analysis.",
      "provider": {
        "@type": "Organization",
        "name": "Fortune Trading Academy",
        "url": "https://www.fortunetradingacademy.com"
      }
    };

    return (
        <div className='w-full h-auto flex flex-col'>

            <Helmet>
              <title>Pro Trader & Intra Day Mentorship | Fortune Trading Academy</title>
              <script type="application/ld+json">{JSON.stringify(proTraderSchema)}</script>
            </Helmet>

            <div className='w-full h-auto'>
                <Banner MainTitle={'Pro Trader Swing And Intra Day'} Subtitle={'Stock trading offers many advantages, including the potential for high returns, liquidity, diversification and accessibility. Stocks have historically offered attractive long-term returns compared to other asset classes, making stock trading a popular choice for growth investors.'}
                    textFrom={'#FFF8DD'} textTo={'#FFF2BB'} radialFrom={'#D5B42D'} radialTo={'#121108'} borderColor={'#D5B42D'} btnFrom={'#FFFBEB'} btnTo={'#FFF8DD'} btnColr={'#AC790D'} contactFrom={'#AC790D'} contactTo={'#D5B42D'} />
            </div>
            <div className=' w-full h-auto bg-slate-50 py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 flex flex-col gap-5 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for </h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#D5B42D]  text-shadow-md text-shadow-slate-500/10'>You ?</h1>
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
                            <button className=' w-fit h-fit cursor-pointer Alatsi text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-white py-2 px-8 md:px-14 md:py-3.5  lg:py-5 lg:px-20 rounded-full bg-radial-[at_50%_150%] from-[#D5B42D] to-[#121108] '
                                onClick={() => storeObj.handleShow()}
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 15px 2px #D5B42D`} onMouseOut={(e) => e.currentTarget.style.boxShadow = `0 0 0 0`}
                                >Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto'>
                    <WhySwingAndIntraDay />
                </div>
                <div className='w-full h-auto md:p-8'>
                    <WhyFTA title={'Equity Course ?'} titleColor={'#D5B42D'} />
                </div>
                <div className='w-full h-auto flex justify-center items-center md:-12'>
                    <MentorIntro from={'#988020'} to={'#988020'} textColor={'#D5B42D'} />
                </div>
                <div className='w-full h-auto'>
                    <Syllabus textColor={'#D5B42D'} from={'#D5B42D'} to={'#121108'} borderColor={'#D5B42D'} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={'#D5B42D'} from={'#121108'} to={'#D5B42D'} />
                </div>
                <div className='w-full h-auto'>
                    <Blogs bgColor={'#D5B42D'} />
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview color={'#D5B42D'} bgColor={'#FFF8DD'} borderColor={'#D5B42D '} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={'#D5B42D'} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={'#D5B42D'} formTextColor={'#D5B42D'} FbuttonFrom={'#D5B42D'} FbuttonTo={'#AC790D'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={'#D5B42D'} bgColor={'#121108'} />
            </div>

        </div>
    )
}

export default ProTraderAndIntraDay