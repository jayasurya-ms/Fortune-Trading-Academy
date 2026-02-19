import React from "react";
import Slider from "react-slick";
import StudentReviewCard from "./StudentReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- FIXED CUSTOM ARROW COMPONENTS ---
const NextArrow = ({ onClick }) => (
    <div
        // Changed xl:hidden to flex. Added sm:-right-10 to position it differently on mobile vs desktop.
        className="absolute -right-12.5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#A27BFF] hover:bg-[#7B4BFF] text-white p-2 rounded-full shadow-md transition-all flex items-center justify-center"
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        // Changed xl:hidden to flex.
        className="absolute -left-12.5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#A27BFF] hover:bg-[#7B4BFF] text-white p-2 rounded-full shadow-md transition-all flex items-center justify-center"
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </div>
);

const REVIEWS_DATA = [
    {
        id: 1,
        name: "Abhishek",
        studentDesig: "MernStack Development",
        title: "Hear About Us From Our Student.!",
        rating: "4.8",
        duration: "2:06 min",
        profileImg: "https://t4.ftcdn.net/jpg/12/21/75/67/360_F_1221756751_OgO8hDyotpt5VmezMLpaLoVAjLH6Hu7m.jpg", 
        thumbnailImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGulVYznuO3AIXARkY4ta9Apteso_iDrlWyeOTrcP5cnf2WlmmBz8Pnpytk9HCo82yDdwPUs9DuEn15Z4g9jC9mnGhAeMrFMo9wju_OOjQxf_YRJLSmpnHSjEGKuM5tBOSRq4ccze-8q4/s16000/youtubethumbnaildownloader.png" 
    },
    {
        id: 2,
        name: "Sneha",
        studentDesig: "Trading Specialist",
        title: "Transformative Learning Experience",
        rating: "4.9",
        duration: "1:45 min",
        profileImg: "https://t4.ftcdn.net/jpg/12/21/75/67/360_F_1221756751_OgO8hDyotpt5VmezMLpaLoVAjLH6Hu7m.jpg",
        thumbnailImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGulVYznuO3AIXARkY4ta9Apteso_iDrlWyeOTrcP5cnf2WlmmBz8Pnpytk9HCo82yDdwPUs9DuEn15Z4g9jC9mnGhAeMrFMo9wju_OOjQxf_YRJLSmpnHSjEGKuM5tBOSRq4ccze-8q4/s16000/youtubethumbnaildownloader.png"
    },
    {
        id: 3,
        name: "Rahul",
        studentDesig: "Stock Market Analyst",
        title: "Best Mentorship in the Industry",
        rating: "4.7",
        duration: "3:12 min",
        profileImg: "https://t4.ftcdn.net/jpg/12/21/75/67/360_F_1221756751_OgO8hDyotpt5VmezMLpaLoVAjLH6Hu7m.jpg",
        thumbnailImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGulVYznuO3AIXARkY4ta9Apteso_iDrlWyeOTrcP5cnf2WlmmBz8Pnpytk9HCo82yDdwPUs9DuEn15Z4g9jC9mnGhAeMrFMo9wju_OOjQxf_YRJLSmpnHSjEGKuM5tBOSRq4ccze-8q4/s16000/youtubethumbnaildownloader.png"
    },
    {
        id: 4,
        name: "Priya",
        studentDesig: "Financial Planner",
        title: "Highly Recommended for Beginners",
        rating: "5.0",
        duration: "2:30 min",
        profileImg: "https://t4.ftcdn.net/jpg/12/21/75/67/360_F_1221756751_OgO8hDyotpt5VmezMLpaLoVAjLH6Hu7m.jpg",
        thumbnailImg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGulVYznuO3AIXARkY4ta9Apteso_iDrlWyeOTrcP5cnf2WlmmBz8Pnpytk9HCo82yDdwPUs9DuEn15Z4g9jC9mnGhAeMrFMo9wju_OOjQxf_YRJLSmpnHSjEGKuM5tBOSRq4ccze-8q4/s16000/youtubethumbnaildownloader.png"
    }
];

function StudentsReview({ borderColor, bgColor, color }) {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings1 = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings2 = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-full h-auto p-3 md:py-24 md:p-10">
            <div className="w-full h-auto flex flex-col gap-3">
                <div className="w-full mt-1 flex flex-col items-center justify-items-center gap-4">
                    <div className="w-fit h-fit px-4 py-1 rounded-full border-2" style={{ backgroundColor: bgColor, borderColor: borderColor }}>
                        <h2 className="Chivo text-[10px] md:text-[16px]" style={{ color: color }}>Student Success Stories</h2>
                    </div>
                    <div className="w-full flex flex-col justify-items-center items-center gap-2">
                        <h2 className="Alatsi text-2xl md:text-5xl text-center">What students say about us?</h2>
                        <h2 className="Chivo font-light text-center text-xs md:text-lg px-4">
                            Join thousands of successful traders who have transformed their financial future with our Training
                        </h2>
                    </div>
                </div>
                
                <div className="w-full p-2 h-auto">
                    {/* slider-container must be relative for the arrows to anchor to it */}
                    <div className="slider-container relative px-8 md:px-12 hidden xl:block">
                        <Slider {...settings}>
                            {REVIEWS_DATA.map((review) => (
                                <div key={review.id} className="px-1 my-5 focus:outline-none">
                                    <StudentReviewCard data={review} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* fot tab */}
                    <div className="slider-container relative px-8 md:px-12 hidden md:block xl:hidden">
                        <Slider {...settings1}>
                            {REVIEWS_DATA.map((review) => (
                                <div key={review.id} className="px-1 my-5 focus:outline-none">
                                    <StudentReviewCard data={review} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* for mobile */}
                    <div className="slider-container relative px-8 md:px-12 md:hidden block">
                        <Slider {...settings2}>
                            {REVIEWS_DATA.map((review) => (
                                <div key={review.id} className="px-1 my-5 focus:outline-none">
                                    <StudentReviewCard data={review} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentsReview;