import React, { useContext, useEffect } from 'react'
import Slider from 'react-slick'
import SyllabusFlow from '../assets/Syllabus_Flow_image.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../Components/Header/Header';
import Blogs from '../Components/Blog/Blogs';
import Banner from '../Components/Banner/Banner';
import StudentsReview from '../Components/StudentsReview/StudentsReview';
import CampusTourBookingHookDiv from '../Components/WelcomeToCampus/CampusTourBookingHookDiv';
import YoutubVideosComponent from '../Components/YoutubeVideos/YoutubVideosComponent';
import ContactUsCombined from '../Components/GetInTouch/ContactUsCombined';
import Footer from '../Components/Footer/Footer';
import redVector from '../assets/Lines/contact_Vector_red.png'
import WhyFTA from '../Components/Art Of Investment/WhyFTA';
import { DataCollections } from '../Store/GlobalDataSets';
import MentorIntro from '../Components/Mentor_Intro/MentorIntro';


const FTA_StockMarket_Beginner = () => {
    let textColor = '#96170E'

    let storeObj = useContext(DataCollections)
    useEffect(() => {
        storeObj.setCurrentPage('SMBeginners')
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
            <div className='w-full h-auto z-10'>
                <Banner MainTitle={'Stock Market Course For Beginners'} Subtitle={'By Learning Stock Marketing Professionally - you have a chance to generate extra income, whether you are a homemaker. Job seeker, or a Businessman.'}
                    textFrom={'#E1FFF1'} textTo={'#89C1B0'} radialFrom={'#0FCD65'} radialTo={'#08120B'} borderColor={'#0FCD65'} btnFrom={'#FBF5FF'} btnTo={'#D5FFE2'} btnColr={'#0BB759'} contactFrom={'#06A44D'} contactTo={'#18CC69'} />
            </div>
            <div className=' w-full h-auto bg-slate-50 py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 '>
                <div className='w-full h-auto px-2 '>
                    <div className='w-fit h-auto leading-14 flex gap-1 flex-col items-center'>
                        <h2 className='Alatsi text-center text-[2.7rem] md:text-[3.1rem] m-0 leading-8 py-4 md:leading-14'>What is in it for you</h2>
                        <h1 className='Alatsi text-[3.5rem]  md:text-[4.1rem] font-medium m-0 text-[#18CC69]  text-shadow-md text-shadow-slate-500/10'>Beginners ?</h1>
                        <div className='w-full md:w-[70%] px-2 md:px-0 py-4 '>
                            <p className='Chivo text-[.85rem] md:text-[1rem] text-justify md:text-center leading-6 md:leading-7'>Understanding the Stock Market introduces beginners to key financial concepts such as investing,
                                risk management, and accumulating assets. This knowledge allows people to make informed decisions
                                about their finances and plan their long-term financial goals.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-4'>
                        <div className='w-full lg:w-[45%] h-auto px-8 py-7 flex flex-col justify-center items-center gap-4 border-2 rounded-2xl border-black/10 '>
                            <div className='w-fit h-auto border-b border-b-green-400 px-2 py-1  bg-white '>
                                <h2 className='Alatsi text-[1.5rem] md:text-[2rem] font-medium text-[#0BB759]'>What is Stock Market.</h2>
                            </div>
                            <div className='w-fit h-auto flex flex-col items-center justify-center  gap-3'>
                                <p className='Chivo text-[.85rem] md:text-lg'>Ways to Make Money in Stock Market (Trader & Investor)</p>
                                <p className='Chivo text-[.85rem] md:text-lg'>Understanding Technical Analysis & Fundamental Analysis</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-[45%] h-auto px-8 py-7 flex flex-col justify-center items-center gap-4 border-2 rounded-2xl border-black/10 '>
                            <div className='w-fit h-auto border-b border-b-green-400 px-2 py-1  bg-white '>
                                <h2 className='Alatsi text-[1.5rem] md:text-[2rem] font-medium text-[#0BB759]'>Supply vs Demand.</h2>
                            </div>
                            <div className='w-fit h-auto flex flex-col items-center justify-center  gap-3'>
                                <p className='Chivo text-[.85rem] md:text-lg'>Factors Influencing Stock Selection for Investment and Trading</p>
                                <p className='Chivo text-[.85rem] md:text-lg'>How to Interpret news related to Economy and Stock Market</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto'>
                        <div className='w-full md:w-[90%]  h-auto flex m-auto'>
                            <div className='w-full h-auto px-8 py-4 '>
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-105 md:min-h-88 border border-[#18CC69] bg-linear-to-br from-[#D6FFE2] to-[#ECFFF4] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Stock trading means buying and selling shares of a company on a stock exchange or stock market.
                                                        Stocks represent participation in publicly traded companies, and trading them allows investors to
                                                        participate in the company's growth and profit from price fluctuations.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center '>
                                                <div className='w-fit h-105 md:min-h-88 border border-[#18CC69] bg-linear-to-br from-[#D6FFE2] to-[#ECFFF4] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Investors engage in stock trading for a variety of purposes, including capital appreciation,
                                                        dividend income and portfolio diversification. Investors use various strategies such as
                                                        fundamental analysis, technical analysis and sentiment analysis to identify investment opportunities
                                                        and make informed decisions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-105 md:min-h-88 border border-[#18CC69] bg-linear-to-br from-[#D6FFE2] to-[#ECFFF4] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Stock trading offers many advantages, including the potential for high returns, liquidity, diversification
                                                        and accessibility. Stocks have historically offered attractive long-term returns compared to
                                                        other asset classes, making stock trading a popular choice for growth investors.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' w-full h-auto '>
                                            <div className='w-full h-auto flex justify-center p-1 items-center'>
                                                <div className='w-fit h-105 md:min-h-88 border border-[#18CC69] bg-linear-to-br from-[#D6FFE2] to-[#ECFFF4] rounded-3xl p-5 md:p-7 pb-10'>
                                                    <p className='Chivo font-light w-full md:w-60'>Advances in technology have made stock trading easier for individual investors through online
                                                        brokerage platforms and mobile trading apps. These platforms offer a wide range of tools and resources
                                                        that allow investors to research stocks, execute trades and monitor their portfolios in real time.
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
                            <button className='w-fit h-fit cursor-pointer Alatsi text-[1.25rem] text-white py-4 px-14 rounded-full bg-radial-[at_50%_150%] from-[#0FCD65] to-[#08120B] '
                                onClick={() => storeObj.handleShow()}>Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto px-2'>
                    <div className='w-full h-auto py-8 px-0 md:px-4'>
                        <img src={SyllabusFlow} alt="" className='w-full h-auto' />
                    </div>
                </div>
                <div className='w-full h-auto flex justify-center items-center md:py-12'>
                    <MentorIntro from={'#4CC46A59'} to={'#4CC46A40'} textColor={'#23D975'} />
                </div>
                <div className='w-full h-auto -mt-120 sm:-mt-85 lg:-mt-40 '>
                    <Blogs bgColor={'#0D8E47'} />
                </div>
                {/* <div className='w-full h-auto'>
                    <StudentsReview bgColor={'#BEFAD9'} color={'#23D975'} borderColor={'#23D975'} />
                </div> */}
                <div className='w-full h-auto'>
                    <CampusTourBookingHookDiv color={'#0D8E47'} />
                </div>
                <div className='w-full h-auto'>
                    <YoutubVideosComponent titleColor={'#0D8E47'} />
                </div>
                <div className='w-full h-auto'>
                    <ContactUsCombined titleColor={'#0BB759'} formTextColor={'#0BB759'} FbuttonFrom={'#23D975'} FbuttonTo={'#0BB759'} />
                </div>
            </div>
            <div className='w-full h-auto'>
                <Footer bgColor={'#08120B'} textColor={'#0BB759'} />
            </div>
        </div>
    )
}

export default FTA_StockMarket_Beginner