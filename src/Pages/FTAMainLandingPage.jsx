import React, { useContext, useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import CampusTourBookingHookDiv from '../Components/WelcomeToCampus/CampusTourBookingHookDiv'
import Blogs from '../Components/Blog/Blogs'
import StudentsReview from '../Components/StudentsReview/StudentsReview'
import YoutubVideosComponent from '../Components/YoutubeVideos/YoutubVideosComponent'
import Footer from '../Components/Footer/Footer'
import { DataCollections } from '../Store/GlobalDataSets'
import KeyTakeaway from '../Components/KeyTakeway/KeyTakeaway'
import DidYouKnow from '../Components/KeyTakeway/DidYouKnow'
import EnrollNow from '../Components/FTAEnrollDiv/EnrollNow'
import FAQ from '../Components/FAQ/FAQ'
import MainPageContact from '../Components/GetInTouch/MainPageContact'
import FooterDesign from '../Components/Footer/FooterDesign'
import Content from '../Components/Banner/Content'
import InrtaWFYicon1 from '/src/assets/Icons/icon1.png'
import InrtaWFYicon2 from '/src/assets/Icons/icon2.png'
import InrtaWFYicon3 from '/src/assets/Icons/icon3.png'
import InrtaWFYicon4 from '/src/assets/Icons/icon4.png'
import InrtaWFYicon5 from '/src/assets/Icons/icon5.png'
import InrtaWFYicon6 from '/src/assets/Icons/icon6.png'
import MentorIntro from '../Components/Mentor_Intro/MentorIntro'
import { Helmet } from 'react-helmet-async' // Added Helmet

const contentData =[
    {
        id: 1,
        title: 'Beginner Investors',
        description: 'People new to investing / No prior market knowledge',
        icon: InrtaWFYicon1,
    },
    {
        id: 2,
        title: 'Entrepreneurs and Business Owners',
        description: 'Startup founders / Small & medium business owners',
        icon: InrtaWFYicon2,
    },
    {
        id: 3,
        title: 'Financial Advisors and Professionals',
        description: 'Finance professionals / Advisors, analysts, consultants',
        icon: InrtaWFYicon3,
    },
    {
        id: 4,
        title: 'Students and Young Adults',
        description: 'Young professionals starting their careers / Learn wealth-building fundamentals',
        icon: InrtaWFYicon4,
    },
    {
        id: 5,
        title: 'Individuals Seeking Passive Income',
        description: 'Long-term investors / People aiming for secondary income',
        icon: InrtaWFYicon5,
    },
    {
        id: 6,
        title: 'Professionals & Curious Individuals',
        description: 'Working professionals / Learners exploring finance out of curiosity',
        icon: InrtaWFYicon6,
    }
]


const FTAMainLandingPage = () => {
    let textColor ='#994CD4'
    let storeObj = useContext(DataCollections)
    useEffect(() => {
        storeObj.setCurrentPage('MainPage')
    }, [])

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.fortunetradingacademy.com/#organization",
      "name": "Fortune Trading Academy",
      "url": "https://www.fortunetradingacademy.com",
      "logo": "https://www.fortunetradingacademy.com/assets/Icons/Logo_white.png",
      "description": "Premium Stock Market Mentorship and Financial Literacy Academy in Bangalore.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
        "addressLocality": "Bengaluru",
        "postalCode": "560011",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite", // Ensure this line exists!
      "@id": "https://www.fortunetradingacademy.com/#website",
      "url": "https://www.fortunetradingacademy.com",
      "name": "Fortune Trading Academy",
      "publisher": { "@id": "https://www.fortunetradingacademy.com/#organization" }
    }
  ]
};

    return (
        <div className='w-full h-auto flex flex-col'>

            {/* helmet */}
            <Helmet>
                <title>Fortune Trading Academy | Pro Trader & Investor Mentorship Bangalore</title>
                <meta name="description" content="Join Fortune Trading Academy for expert stock market mentorship. Learn financial literacy and professional trading strategies in Jayanagar, Bangalore." />
                <script type="application/ld+json">
                    {JSON.stringify(homeSchema)}
                </script>
            </Helmet>

            <div className='w-full h-auto'>
                <Banner MainTitle={'Become a Pro Trader and Investor by joining our Stock Market Mentorship Program.'} Subtitle={"The place where you get 'COLLECTIVE WISDOM' in Financial Literacy to achieve your financial goals."} 
                textFrom={'#E1E9FF'} textTo={'#8997C1'} radialFrom={'#A27BFF'} radialTo={'#080B12'} borderColor={'#080B12'} btnFrom={'#FBF5FF'} btnTo={'#E4CBF8'} btnColr={'#8829D0'} contactFrom={'#AD24FC'} contactTo={'#CA85FF'}  />
            </div>
            <div className=' w-full h-auto bg-slate-50 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 pt-10!'>
                <div className='w-full h-auto px-2 flex flex-col gap-2 '>
                    <div className='w-fit h-auto leading-14 flex gap-0 sm:gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[1.5rem] sm:text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>Who Can Learn</h2>
                        <h1 className='Alatsi text-[2.5rem] text-center max-sm:leading-9 sm:text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#994CD4]  text-shadow-md text-shadow-slate-500/10'>Stock Market Course ?</h1>
                        <div className='w-full md:w-[80%] px-2 md:px-0 py-4 '>
                            <p className='Chivo text-[.85rem] md:text-[.9rem] text-justify md:text-center leading-6 md:leading-5'>Stock market learning is for everyone from beginner investors
                                seeking to grow their wealth and students aiming to build financial literacy, to entrepreneurs leveraging market insights for business growth. It’s ideal for advisors refining
                                their expertise, professionals exploring new opportunities, and passive income seekers looking to make their money work for them. Whether you're curious or ambitious,
                                the stock market offers endless opportunities to enhance financial knowledge and achieve your goals.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Content datas={contentData}/>
                    </div>
                </div>
                <div className='w-full h-auto flex justify-center items-center pt-8! '>
                    <MentorIntro from={'#bd89e6'} to={textColor} textColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <KeyTakeaway  />
                </div>
                <div className='w-full h-auto px-5'>
                    <DidYouKnow  />
                </div>
                <div className='w-full h-auto'>
                    <EnrollNow  />
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview />
                </div>
                 <div className='w-full h-auto'>
                    <Blogs bgColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={textColor} from={'#121108'} to={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <FAQ />
                </div>
                <div className='w-full h-auto'>
                    <MainPageContact titleColor={textColor} formTextColor={textColor} FbuttonFrom={'#AD24FC'} FbuttonTo={'#CA85FF'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <FooterDesign />
                <Footer textColor={textColor} bgColor={'#0D0E19'} />
            </div>

        </div>
    )
}

export default FTAMainLandingPage