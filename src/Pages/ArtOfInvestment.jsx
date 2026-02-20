import React, { useContext, useEffect } from 'react'
import InrtaWFYicon1 from '../assets/Icons/stockSelectionTechnique_icon.png'
import InrtaWFYicon2 from '../assets/Icons/Analysing_key_ratio_icon.png'
import InrtaWFYicon3 from '../assets/Icons/UnderstandingBalance_icon.png'
import InrtaWFYicon4 from '../assets/Icons/Supply&DemandScenario_icon.png'
import InrtaWFYicon5 from '../assets/Icons/MasteringValueInvesting_icon.png'
import InrtaWFYicon6 from '../assets/Icons/ChartPattern_icon.png'
import Banner from '../Components/Banner/Banner'
import WhyAOI from '../Components/Why Art Of Investment/WhyAOI'
import WhyFTA from '../Components/Art Of Investment/WhyFTA'
import Syllabus from '../Components/Syllabus/Syllabus'
import CampusTourBookingHookDiv from '../Components/WelcomeToCampus/CampusTourBookingHookDiv'
import Blogs from '../Components/Blog/Blogs'
import StudentsReview from '../Components/StudentsReview/StudentsReview'
import YoutubVideosComponent from '../Components/YoutubeVideos/YoutubVideosComponent'
import ContactUsCombined from '../Components/GetInTouch/ContactUsCombined'
import Footer from '../Components/Footer/Footer'
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
        title: 'Analysing Key Ratios of a Stock & Sector',
        description: 'Learn the principles of value investing to find undervalued stocks with long-term potential.',
        icon: InrtaWFYicon2,
    },
    {
        id: 3,
        title: 'Understanding Balance Sheets',
        description: 'Break down balance sheets into simple, easy-to-understand parts.',
        icon: InrtaWFYicon3,
    },
    {
        id: 4,
        title: 'Supply & Demand Scenarios with Business Cycles',
        description: 'Understand how supply and demand impact stock prices.',
        icon: InrtaWFYicon4,
    },
    {
        id: 5,
        title: 'Mastering Value Investing & Other Investment Techniques',
        description: 'Learn the principles of value investing to find undervalued stocks with long-term potential.',
        icon: InrtaWFYicon5,
    },
    {
        id: 6,
        title: 'Chart Patterns with Support & Resistance',
        description: 'Understand common chart patterns and use them to make better entry and exit decisions.',
        icon: InrtaWFYicon6,
    }
]

const ArtOfInvestment = () => {

    const handleShow = () => {
        console.log('inside show');

    }

    let storeObj = useContext(DataCollections)
    useEffect(()=>{
        storeObj.setCurrentPage('ArtOfInvestment')
    },[])

    const investmentSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Art of Investment",
      "description": "Learn the principles of long-term wealth creation and portfolio diversification.",
      "provider": {
        "@type": "Organization",
        "name": "Fortune Trading Academy",
        "url": "https://www.fortunetradingacademy.com"
      }
    };

    return (
        <div className='w-full h-auto flex flex-col'>

            {/* helmet */}
            <Helmet>
              <title>Expert Option Trading | Fortune Trading Academy</title>
              <script type="application/ld+json">{JSON.stringify(investmentSchema)}</script>
            </Helmet> 

            <div className='w-full h-auto'>
                <Banner MainTitle={'Art Of Investment'} Subtitle={'Stock trading offers many advantages, including the potential for high returns, liquidity, diversification and accessibility. Stocks have historically offered attractive long-term returns compared to other asset classes, making stock trading a popular choice for growth investors.'}
                 textFrom={'#EDF8FF'} textTo={'#D1EDFF'} radialFrom={'#215E86'} radialTo={'#0E171C'} borderColor={'#215E86'} btnFrom={'#F5FBFF'} btnTo={'#E2F3FF'} btnColr={'#215E86'} contactFrom={'#0F2C3F'} contactTo={'#215E86'}  />
            </div>
            <div className=' w-full h-auto bg-slate-50 py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 flex flex-col gap-5 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for </h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#2076AF]  text-shadow-md text-shadow-slate-500/10'>You ?</h1>
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
                            <button onClick={() => storeObj.handleShow()} className='cursor-pointer w-fit h-fit Alatsi text-[1.25rem] text-white py-6 px-12 rounded-full bg-radial-[at_50%_150%] from-[#215E86] to-[#0E171C] ease-in-out duration-300' onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 15px 2px #215E86`} onMouseOut={(e) => e.currentTarget.style.boxShadow = `0 0 0 0`}>Book a Campus Tour</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto px-2 md:px-8'>
                    <WhyAOI from={'#215E86'} titleColor={'#2076AF'} to={'#0E171C'}/>
                </div>
                <div className='w-full h-auto px-2 md:p-8'>
                    <WhyFTA title={'ART OF INVESTMENT COURSE?'} titleColor={'#2076AF'} />
                </div>
                <div className='w-full h-auto flex items-center justify-center pb-8'>
                    <MentorIntro from={'#2076AF59'} to={'#2076AF33'} textColor={'#2076AF'} />
                </div>
                <div className='w-full h-auto '>
                    <Syllabus textColor={'#2076AF'} from={'#215E86'} to={'#0E171C'} borderColor={'#2076AF'} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={'#2076AF'} from={'#0E171C'} to={'#215E86'} />
                </div>
                <div className='w-full h-auto'>
                    <Blogs bgColor={'#2076AF'}/>
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview  color={'#2076AF'} bgColor={'#D1EDFF'} borderColor={'#2076AF'}  />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={'#2076AF'} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={'#2076AF'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={'#2076AF'} bgColor={'#0E171C'} />
            </div>

        </div>
    )
}

export default ArtOfInvestment