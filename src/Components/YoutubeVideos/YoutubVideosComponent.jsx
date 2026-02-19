import React from 'react'
import ytvideoCardImage from '../../assets/ytVideo_Card_Background.jpg'
import ytFloating_red from '../../assets/Icons/youtube_floting_red.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const YoutubVideosComponent = ({titleColor}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <div className='w-full h-auto'>
            <div className='w-full h-auto bg-black flex flex-col gap-10 py-10'>
                <div className='w-full h-auto flex flex-col justify-center items-center gap-1 md:gap-4  '>
                    <h1 className='Alatsi text-[2.5rem] md:text-[3.5rem] lg:text-[4.1rem] text-white text-center leading-13 md:leading-15' style={{color:titleColor}}>YouTube Videos </h1>
                    <p className='Chivo text-[.85rem] md:text-[1.1rem] lg:text-[1.35rem] w-full md:px-4 lg:w-[58%] text-center font-normal leading-6 text-white'>Provide basic information about your content needs,
                        such as topic, tone, and target audience persuasive
                        and engaging copy tailored to your specifications.
                    </p>
                </div>
                <div className='w-full h-auto flex m-auto '>
                    <div className='w-full h-auto px-12 py-4'>

                        {/* laptop screen */}
                        <div className='w-full  slider-container hidden xl:block'>
                            <Slider {...settings} >
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2'>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        {/* tab screen */}
                        <div className='w-full  slider-container hidden xl:hidden md:block '>
                            <Slider {...settings1} >
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2'>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        {/* mobile screen */}
                        <div className='w-full  slider-container max-sm:block hidden'>
                            <Slider {...settings2} >
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2'>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto px-2 '>
                                        <YoutubeVideoCard />
                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubVideosComponent


export const YoutubeVideoCard = () => {
    return (
        <div className='h-48 lg:h-64 w-fit  max-w-110 xl:h-80 relative  rounded-3xl border border-white/40 '>
            <div className='w-full h-full  '>
                <img src={ytvideoCardImage} alt="" className='w-full h-full object-cover rounded-3xl' />
            </div>
            <div className='w-full h-full absolute top-0 left-0  rounded-3xl bg-linear-to-b from-transparent to-black/90'></div>
            <img src={ytFloating_red} alt="" className='w-8 h-auto absolute top-3 left-3' />
            <h2 className='Chivo text-[1rem] xl:text-[1.25rem] absolute bottom-2 left-5 text-white font-extralight  '>Based on budget how to select a stock for investment and trading...?</h2>
        </div>
    )
}