import React from 'react'
import blogimage1 from '../../assets/blogs_image.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = ({bgColor}) => {
    let Blog = [
        { image: `${blogimage1}`, title: 'Features of Our Trading Courses!', content: 'Our aim is to ensure a proper trading/investing skillset that is required in the cut-throat competitive financial markets. You’ll be able to acquire 360-degree knowledge & trading mindset to become a successful trader/investor' },
        { image: `${blogimage1}`, title: 'Features of Our Trading Courses!', content: 'Our aim is to ensure a proper trading/investing skillset that is required in the cut-throat competitive financial markets. You’ll be able to acquire 360-degree knowledge & trading mindset to become a successful trader/investor' },
        { image: `${blogimage1}`, title: 'Features of Our Trading Courses!', content: 'Our aim is to ensure a proper trading/investing skillset that is required in the cut-throat competitive financial markets. You’ll be able to acquire 360-degree knowledge & trading mindset to become a successful trader/investor' },
    ]

    let color = '#2076AF'
    const settings1 = {
        arrows: true,   // ✅ this alone enables arrows
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const settings2 = {
        arrows: true,   // ✅ this alone enables arrows
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    const settings3 = {
        arrows: true,   // ✅ this alone enables arrows
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='w-full  bg-black  '>
            <div className=' w-full h-auto px-6 md:px-12 pb-12 pt-4 '>
                <div className='w-full h-auto flex flex-col gap-4 '>
                    <div className='w-full h-auto '>
                        <h1 className='Alatsi font-medium text-[2rem] lg:text-[4.5rem] text-white'>Blogs</h1>
                    </div>
                    <div className='w-full  p-2 lg:p-0'>
                        
                        <div className='w-full slider-container hidden xl:block '>
                            <Slider {...settings1} >
                                {Blog.map((values, index) => (
                                    <div key={index}>
                                        <div className='px-3  border '>
                                            <div className='w-full flex flex-col gap-5 text-white  '>
                                                <div className='w-full object-contain  rounded-2xl'>
                                                    <img src={values.image} alt="Blogs Card Image" />
                                                </div>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <h3 className='Alatsi font-medium text-xl md:text-2xl'>{values.title}</h3>
                                                    <p className='Chivo w-full font-extralight md:leading-6 md:tracking-4 text-[14px] md:text-[16px]'>{values.content}</p>
                                                    <button className={`Chivo font-extralight text-base px-8 py-2 w-fit h-fit rounded-full 
                                                         cursor-pointer`} style={{backgroundColor:bgColor}}>
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>

                        <div className='w-full slider-container hidden md:block xl:hidden'>
                            <Slider {...settings2} >
                                {Blog.map((values, index) => (
                                    <div key={index}>
                                        <div className='px-3  border '>
                                            <div className='w-full flex flex-col gap-5 text-white  '>
                                                <div className='w-full object-contain  rounded-2xl'>
                                                    <img src={values.image} alt="Blogs Card Image" />
                                                </div>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <h3 className='Alatsi font-medium text-xl md:text-2xl'>{values.title}</h3>
                                                    <p className='Chivo w-full font-extralight md:leading-6 md:tracking-4 text-[14px] md:text-[16px]'>{values.content}</p>
                                                    <button className={`Chivo font-extralight text-base px-8 py-2 w-fit h-fit rounded-full 
                                                         cursor-pointer`} style={{backgroundColor:bgColor}}>
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>

                        <div className='w-full slider-container max-sm:block hidden'>
                            <Slider {...settings3} >
                                {Blog.map((values, index) => (
                                    <div key={index}>
                                        <div className='px-3  border '>
                                            <div className='w-full flex flex-col gap-5 text-white  '>
                                                <div className='w-full object-contain  rounded-2xl'>
                                                    <img src={values.image} alt="Blogs Card Image" />
                                                </div>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <h3 className='Alatsi font-medium text-xl md:text-2xl'>{values.title}</h3>
                                                    <p className='Chivo w-full font-extralight md:leading-6 md:tracking-4 text-[14px] md:text-[16px]'>{values.content}</p>
                                                    <button className={`Chivo font-extralight text-base px-8 py-2 w-fit h-fit rounded-full 
                                                         cursor-pointer`} style={{backgroundColor:bgColor}}>
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs