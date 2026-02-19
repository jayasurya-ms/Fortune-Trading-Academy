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
import Slider from 'react-slick'
import OptionTradingCard from '../Components/ExpertOptionTrading/OptionTradingCard'
import { DataCollections } from '../Store/GlobalDataSets'
import MentorIntro from '../Components/Mentor_Intro/MentorIntro'

const ExpertOptionTrading = () => {
    let textColor = '#067DB3'

    let storeObj = useContext(DataCollections)
    useEffect(() => {
        storeObj.setCurrentPage('OptionTrading')
    }, [])


    const settings = {
        arrows: true,   // ✅ this alone enables arrows
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1300, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            // { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 510, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <div className='w-full h-auto flex flex-col'>
            <div className='w-full h-auto'>
                <Banner MainTitle={'Expert Option Trading'} Subtitle={'Online Stock Market Training provides individuals with comprehensive training and resources to develop their skills and knowledge of trading stocks in the financial markets.'}
                    textFrom={'#EFFAFF'} textTo={'#D5F2FF'} radialFrom={'#067DB3'} radialTo={'#050B17'} borderColor={'#067DB3'} btnFrom={'#EFFAFF'} btnTo={'#D7F2FF'} btnColr={'#067DB3'} contactFrom={'#071E44'} contactTo={'#067DB3'} />
            </div>
            <div className=' w-full h-auto bg-white py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for you</h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#067DB3]  text-shadow-md text-shadow-slate-500/10'>Trading Course ?</h1>
                        <div className='w-full md:w-[70%] px-2 md:px-0 py-4 '>
                            <p className='Chivo text-[.85rem] md:text-[1rem] text-justify md:text-center leading-6 md:leading-7'>Understanding the Stock Market introduces beginners to key financial concepts such as investing,
                                risk management, and accumulating assets. This knowledge allows people to make informed decisions
                                about their finances and plan their long-term financial goals.
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-auto'>
                        <div className='w-full   h-auto flex m-auto'>
                            <div className='w-full h-auto px-8 py-4 '>
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-fit border border-[#067DB3] bg-linear-to-br from-[#DCF4FF] to-[#EFFAFF] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Options trading involves purchase and sale contracts that
                                                        give the holder the right, but not the obligation, to buy (put option) or sell (put option)
                                                        an underlying asset at a predetermined price (strike price) on or before a certain date.
                                                        End date These contracts offer flexibility and versatility, allowing investors to profit
                                                        from changes in the price of the underlying asset, hedge risk or earn income by collecting premiums.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center '>
                                                <div className='w-fit h-fit  border border-[#067DB3] bg-linear-to-br from-[#DCF4FF] to-[#EFFAFF] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Call options give the holder the right to buy the underlying asset at the strike price,
                                                        while put options give the holder the right to sell the underlying asset at the strike price. Options contracts have standard information,
                                                        including the underlying asset, strike price, expiration date, and contract size.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-fit  border border-[#067DB3] bg-linear-to-br from-[#DCF4FF] to-[#EFFAFF] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Options trading offers several advantages such as limited risk, leverage, flexibility and income.
                                                        Buyers of option contracts have a limited risk of losing the premium paid for the option. This makes options an attractive tool for
                                                        risk management in investment portfolios. Additionally, options trading allows investors to control a larger position with less capital,
                                                        potentially increasing returns through leverage.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-fit  border border-[#067DB3] bg-linear-to-br from-[#DCF4FF] to-[#EFFAFF] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Option contracts can be used to implement a variety of trading strategies, including bullish,
                                                        bearish and neutral. These strategies can be adapted to different market conditions and investment objectives, providing flexibility and
                                                        versatility for trading.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto'>
                        <div className='w-full h-auto py-8  flex justify-center items-center'>
                            <button className='w-fit h-fit Alatsi text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] text-white py-2 px-8 md:px-14 md:py-3.5  lg:py-6 lg:px-15 rounded-full bg-radial-[at_50%_350%] from-[#067DB3] to-[#050B17] '>Book a Campus Tour</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto '>
                    <OptionTradingCard />
                </div>
                <div className='w-full h-auto px-2 md:px-8 md:py-12'>
                    <WhyFTA title={'Art of Investment Course ?'} titleColor={textColor} />
                </div>
                <div className='w-full h-auto flex justify-center items-center md:py-12'>
                    <MentorIntro from={'#2076AF59'} to={'#2076AF40'} textColor={textColor} />
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
                    <StudentsReview color={textColor} bgColor={'#D6F2FF'} borderColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={textColor} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={textColor} formTextColor={textColor} FbuttonFrom={'#071E44'} FbuttonTo={'#067DB3'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer textColor={textColor} bgColor={'#050B17'} />
            </div>

        </div>
    )
}

export default ExpertOptionTrading