import React, { useContext, useEffect, useMemo } from 'react'
import Header from '../Header/Header'

// Banner Image Assets
import StockMarketBeginnerBannerImage from '../../assets/BannerImages/Stock_Market_Course_For_Beginners_Banner_Background.png'
import IntradayBanner from '../../assets/BannerImages/Pro_Trader_SwingAndIntra_Day_Banner_Background.png'
import OnlineCourseBanner from '../../assets/BannerImages/Online_Trading_Course_Banner_Background.png'
import ArtOfInvestmentBanner from '../../assets/BannerImages/Art_OF_Investment_Banner_Background.png'
import ExpertFutureTradingBanner from '../../assets/BannerImages/Expert_Future_Trading_Banner_Background.png'
import ExpertOptionTradingBanner from '../../assets/BannerImages/Expert_Option_Trading.png'
import FTAMainBanner from '../../assets/BannerImages/FTA_MainPage_Banner_Background.png'
import AboutUsBanner from '../../assets/BannerImages/About_Us_Banner.png'
import studentDemoPic from '../../assets/professionalMan.jpg'

// Context & Icons
import { DataCollections } from '../../Store/GlobalDataSets'
import Cirtification from '../../assets/Icons/CirtifiedTrader_icon.png'
import GraphBar from '../../assets/Icons/ProfitGrowthGraphBar_icon.png'
import TechnicalAnalysis from '../../assets/Icons/TechnicalAnalysis_icon.png'

const Banner = ({ MainTitle, Subtitle, btnFrom, textFrom, textTo, radialFrom, radialTo, btnTo, btnColr, borderColor, contactFrom, contactTo }) => {
    const store = useContext(DataCollections)

    // Mapping Object: Faster than ternary chains and prevents logic errors
    const BANNER_MAP = useMemo(() => ({
        'MainPage': FTAMainBanner,
        'ArtOfInvestment': ArtOfInvestmentBanner,
        'FutureTrading': ExpertFutureTradingBanner,
        'OptionTrading': ExpertOptionTradingBanner,
        'SMBeginners': StockMarketBeginnerBannerImage,
        'OnlineCourse': OnlineCourseBanner,
        'IntraDay': IntradayBanner,
        'AboutUs': AboutUsBanner
    }), []);

    // Smart Eager Loading: Pre-caches images so transitions are instant
    useEffect(() => {
        Object.values(BANNER_MAP).forEach((src) => {
            const img = new Image();
            img.src = src;
        });
        
        // Ensure initial page state
        if (!store.currentPage) {
            store.setCurrentPage('MainPage');
        }
    }, [BANNER_MAP, store]);

    return (
        <div className='w-full h-auto flex flex-col bg-transparent relative overflow-hidden'>
            
            {/* ZERO-FLICKER STACK: 
                We render ALL images at once. The browser GPU handles the 
                opacity transition, meaning zero "white flashes" or "reloads".
            */}
            <div className="absolute inset-0 z-10 w-full h-full bg-[#080B12]">
                {Object.entries(BANNER_MAP).map(([pageName, imgSrc]) => (
                    <img 
                        key={pageName}
                        src={imgSrc} 
                        alt="" 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            store.currentPage === pageName ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className='w-full h-full opacity-10 z-90 absolute' style={{ backgroundImage: `radial-gradient(circle at 50% 300%, ${radialFrom}, ${radialTo})` }}></div>
            
            {/* Header Div */}
            <div className='w-full h-auto relative z-1000'>
                <Header contactBtnFrom={contactFrom} contactBtnTo={contactTo} />
            </div>

            {/* Text & Details div */}
            <div className='w-full h-auto'>
                <div className={`w-full h-auto py-14 relative z-999 flex flex-col ${store.currentPage === 'MainPage' ? 'sm:gap-80 lg:gap-24' : 'gap-12'}`}>
                    <div className='w-full h-auto flex flex-col relative gap-8 items-center pb-20 lg:pb-52'>
                        
                        {/* Text Content */}
                        <div className='w-full h-auto flex items-center justify-center'>
                            <div className='w-fit flex flex-col gap-4 px-4 lg:px-0 items-center justify-center text-[#E7FFF8]'>
                                <h1 className={`leading-7 flex justify-center lg:leading-10 ${store.currentPage === 'MainPage' ? 'w-full md:w-[80%]' : 'w-full'}`}>
                                    <span className='Alatsi font-medium text-[1.7rem] md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text' style={{ backgroundImage: `radial-gradient(circle at 50% 90%, ${textFrom}, ${textTo})` }}>
                                        {MainTitle ? MainTitle : <span>Become a Pro Trader and Investor by joining our Stock Market Mentorship Program.</span>}
                                    </span>
                                </h1>
                                <p className={`Chivo font-light text-[.75rem] lg:text-[1rem] text-center ${store.currentPage === 'MainPage' ? 'w-full' : 'md:w-[90%] lg:w-[75%]'}`}>
                                    {Subtitle ? Subtitle : <span>The place where you get 'COLLECTIVE WISDOM' in Financial Literacy to achieve your financial goals.</span>}
                                </p>
                            </div>
                        </div>

                        {/* Details Pill (Online, Classroom, etc) */}
                        <div className={`w-fit flex ${store.currentPage === 'MainPage' ? 'md:absolute md:mt-[30%] md:mr-[60%] xl:mt-[15%] xl:mr-[60%] flex-col px-8 py-8 md:py-6' : 'relative flex-col md:flex-row px-8 py-8 md:py-2'} bg-black/10 rounded-xl gap-8 text-white border border-white/50 z-999`}>
                            <p className={`Chivo ${store.currentPage === 'MainPage' ? 'font-normal border-b border-white/40 text-center pb-4 text-[.75rem] lg:text-[1rem]' : 'border-0 font-semibold text-[.75rem] lg:text-lg'}`}>Online Mode Training</p>
                            <p className={`Chivo ${store.currentPage === 'MainPage' ? 'font-normal border-b border-white/40 text-center pb-4 text-[.75rem] lg:text-[1rem]' : 'border-0 font-semibold text-[.75rem] lg:text-lg'}`}>Classroom Training</p>
                            <p className={`Chivo ${store.currentPage === 'MainPage' ? 'font-normal border-b border-white/40 text-center pb-4 text-[.75rem] lg:text-[1rem]' : 'border-0 font-semibold text-[.75rem] lg:text-lg'}`}>Multiple Flexible Formats</p>
                            <p className={`Chivo ${store.currentPage === 'MainPage' ? 'font-normal border-b border-white/40 text-center pb-4 text-[.75rem] lg:text-[1rem]' : 'border-0 font-semibold text-[.75rem] lg:text-lg'}`}>Self-Paced Learning</p>
                        </div>

                        {/* MainPage Specific UI (Growth Graph, Analysis, etc) */}
                        {store.currentPage === 'MainPage' && (
                            <div className='w-fit h-fit md:absolute md:mt-[30%] md:ml-[65%] xl:mt-[15%] xl:ml-[65%] flex flex-col max-md:gap-2 max-md:items-center z-1000'>
                                <div className='w-fit h-fit flex items-center gap-4 text-white px-6 py-4 md:-ml-[68%] md:mt-[20%] border border-white/50 rounded-2xl bg-black/30 backdrop-blur-xs z-1020'>
                                    <img src={Cirtification} alt="" className='w-10 lg:w-14 h-auto' />
                                    <p className='Alatsi text-lg lg:text-xl '>Certified Trader</p>
                                </div>
                                <div className='w-fit h-fit px-6 py-8 border text-white border-white/50 md:-mt-[55%] rounded-2xl bg-black/30 backdrop-blur-xs z-1015'>
                                    <div className='Roboto flex justify-between '>
                                        <p className='text-[.75rem] lg:text-[1rem] '>Portfolio Growth</p>
                                        <p className='w-fit h-fit px-3 py-1 text-[.75rem] lg:text-[1rem] text-[#1A9E65] bg-[#0D3433] rounded-2xl'>+26.5%</p>
                                    </div>
                                    <p className='Alatsi text-xl lg:text-3xl'>₹ 12,80,420</p>
                                    <p className='Roboto text-[#1A9E65]'>₹ 152,460 this month</p>
                                    <img src={GraphBar} alt="" className='w-52 lg:w-64 h-auto' />
                                </div>
                                <div className='w-fit h-fit px-6 py-6 pr-12 flex flex-col gap-4 border md:-mt-[5%] md:-ml-[30%] border-white/50 rounded-2xl bg-black/30 backdrop-blur-xs z-1010'>
                                    <div className='w-fit h-fit flex gap-4 items-center pr-4'>
                                        <img src={TechnicalAnalysis} alt="" className='w-10 lg:w-14 h-auto' />
                                        <p className='leading-5 Alatsi text-[1rem] lg:text-[1.25rem] text-white'>Technical Analysis <br /><span className='Roboto text--[.75rem] lg:text-[1rem]'>12 of 20 lessons</span></p>
                                    </div>
                                    <div className='w-full h-2 bg-white rounded-2xl'>
                                        <div className='w-[70%] h-full rounded-2xl bg-[#A27BFF]'></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Buttons and Social Proof Section */}
                    <div className='w-full h-auto flex flex-col gap-12'>
                        {/* Call to Action Button */}
                        <div className='w-full h-auto flex flex-col gap-5 md:gap-8 items-center justify-center'>
                            <div className='w-fit h-auto px-4 py-1 border rounded-full bg-black/30' style={{ borderColor: borderColor }}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div className='w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 rounded-full bg-[#28D21C]' ></div>
                                    <p className='Chivo font-light text-[.75rem] md:text-[1rem] text-white'>Start Your Trading Journey Today</p>
                                </div>
                            </div>
                            <button 
                                className={`Roboto w-fit h-auto px-8 py-1 md:px-18 md:py-3 border-2 rounded-full text-[1rem] md:text-xl lg:text-2xl cursor-pointer font-bold transition-all active:scale-95`} 
                                style={{ background: `linear-gradient(to right, ${btnFrom}, ${btnTo})`, color: btnColr }}
                                onClick={() => store.handleShow()}
                            >
                                Enroll Now
                            </button>
                        </div>

                        {/* Stats / Data Row */}
                        <div className='w-full h-auto px-12 flex flex-col lg:flex-row gap-5 lg:justify-between items-center'>
                            <div className='xl:w-[60%] md:w-[80%] w-full h-auto rounded-2xl backdrop-blur-xl flex flex-wrap p-3 Alatsi justify-between gap-y-5'>
                                <div className='md:w-1/3 w-1/2 flex justify-center'>
                                    <p className='lg:text-[2.7rem] text-[1.7rem] font-medium leading-7 text-white text-shadow-2xs text-shadow-[#8829D0]'>20K+ <br /> <span className='Roboto font-normal text-[1rem] lg:text-[1.4rem] '> Active Students </span></p>
                                </div>
                                <div className='md:w-1/3 w-1/2 flex justify-center'>
                                    <p className='lg:text-[2.7rem] text-[1.7rem] font-medium leading-7 text-white text-shadow-2xs text-shadow-[#8829D0]'>15+ <br /> <span className='Roboto font-normal text-[1rem] lg:text-[1.4rem] '> Expert Courses </span></p>
                                </div>
                                <div className='md:w-1/3 w-1/2 flex justify-center'>
                                    <p className='lg:text-[2.7rem] text-[1.7rem] font-medium leading-7 text-white text-shadow-2xs text-shadow-[#8829D0]'>95% <br /> <span className='Roboto font-normal text-[1rem] lg:text-[1.4rem] '> Success Rate </span></p>
                                </div>
                            </div>

                            {/* Total Student Avatars */}
                            <div className='w-fit h-auto flex items-center gap-3 px-3 py-3 rounded-full bg-white/80 border-4 border-gray-500/30'>
                                <div className='w-fit h-auto flex'>
                                    <img src={studentDemoPic} alt="" className='w-4 h-4 md:w-10 md:h-10 rounded-full object-cover' />
                                    <img src={studentDemoPic} alt="" className='w-4 h-4 md:w-10 md:h-10 rounded-full -ml-1 md:-ml-4 object-cover' />
                                    <img src={studentDemoPic} alt="" className='w-4 h-4 md:w-10 md:h-10 rounded-full -ml-1 md:-ml-4 object-cover' />
                                </div>
                                <p className='Alatsi font-medium text-[.75rem] md:text-[1.1rem] lg:text-[1.3rem]'>Over 500+ Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner