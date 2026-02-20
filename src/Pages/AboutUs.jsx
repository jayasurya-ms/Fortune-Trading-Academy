import React, { useContext, useEffect } from 'react'
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
import { Helmet } from 'react-helmet-async'
import VisionMission from '../Components/AboutUs/VisionMission'

const AboutUs = ({ btnColor }) => {

    let storeObj = useContext(DataCollections)
    useEffect(()=>{
        storeObj.setCurrentPage('AboutUs')
    },[])

    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "EducationalOrganization",
        "name": "Fortune Trading Academy",
        "description": "Leading Stock Market training institute in Jayanagar, Bangalore, offering professional trading certifications."
      }
    };



    return (
        <div className='w-full h-auto flex flex-col'>

            <Helmet>
              <title>About Us | Fortune Trading Academy</title>
              <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
            </Helmet>

            <div className='w-full h-auto'>
                <Banner MainTitle={'About Us'} Subtitle={'Fortune Trading Company offers many advantages, including the potential for high returns, liquidity, diversification and accessibility. Stocks have historically offered attractive long-term returns compared to other asset classes, making stock trading a popular choice for growth investors.'}
                 textFrom={'#ffedfd'} textTo={'#ffedfd'} radialFrom={'#610556'} radialTo={'#170511'} borderColor={'#ca3cba'} btnFrom={'#ffedfd'} btnTo={'#ffedfd'} btnColr={'#ca3cba'} contactFrom={'#711a67'} contactTo={'#ca3cba'}  />
            </div>
            <div className=' w-full h-auto bg-slate-50 py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 md:p-4 '>
                <div className='w-full h-auto px-2 md:px-8 md:pt-10'>
                    <WhyFTA title={'ART OF INVESTMENT COURSE?'} titleColor={'#98248b'} />
                </div>
                <div className='w-full h-auto flex items-center justify-center py-8'>
                    <MentorIntro from={'#98248b'} to={'#98248b'} textColor={'#98248b'} />
                </div>
                <div className=' w-full h-auto md:p-10'>
                    <VisionMission />
                </div>
                <div className='w-full h-auto px-2 md:px-8'>
                    <WhyAOI titleColor={'#ca3cba'} from={'#98248b'} to={'#170511'}/>
                </div>
                <div className='w-full h-auto'>
                    <Syllabus textColor={'#711a67'} from={'#711a67'} to={'#170511'} borderColor={'#711a67'} />
                </div>
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={'#711a67'} from={'#711a67'} to={'#170511'} />
                </div>
                <div className='w-full h-auto'>
                    <Blogs bgColor={'#711a67'}/>
                </div>
                <div className='w-full h-auto'>
                    <StudentsReview  color={'#711a67'} bgColor={'#D1EDFF'} borderColor={'#711a67'}  />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={'#711a67'} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={'#711a67'} FbuttonFrom={'#711a67'} FbuttonTo={"#170511"} formTextColor={'#711a67'}/>
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={'#711a67'} bgColor={'#170511'} />
            </div>

        </div>
    )
}

export default AboutUs



// const blogSchema = {
//   "@context": "https://schema.org",
//   "@type": "Blog",
//   "name": "Fortune Trading Academy Blog",
//   "description": "Market insights, technical analysis tips, and trading news.",
//   "publisher": {
//     "@type": "Organization",
//     "name": "Fortune Trading Academy"
//   }
// };

// const contactSchema = {
//   "@context": "https://schema.org",
//   "@type": "ContactPage",
//   "mainEntity": {
//     "@type": "LocalBusiness",
//     "name": "Fortune Trading Academy",
//     "image": "https://www.fortunetradingacademy.com/assets/Icons/Logo_white.png",
//     "telephone": "+91-YOUR-NUMBER", // Replace with actual number
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "1st Floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
//       "addressLocality": "Bengaluru",
//       "postalCode": "560011"
//     }
//   }
// };