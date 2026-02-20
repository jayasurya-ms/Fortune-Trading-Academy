import React from 'react'
import clockImage from '../../assets/Icons/clock.png'
import ytReviewIcon from '../../assets/Icons/youtube_floting_.png'
import star from '../../assets/Icons/star.png'

const StudentReviewCard = ({ data }) => {
    // Destructure data for cleaner code
    const { name, studentDesig, title, rating, duration, profileImg, thumbnailImg } = data;

    return (
        <div className='w-full max-w-84 h-auto shadow-xs shadow-slate-700/30 rounded-3xl bg-white hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] ease-in-out duration-400'>
            <div className='w-full flex flex-col gap-4 px-3 py-4'>
                {/* Header: Profile Info */}
                <div className='w-full flex items-center'>
                    <div className='w-[20%] flex justify-center items-center'>
                        <img 
                            src={profileImg} 
                            alt={name} 
                            className='rounded-full w-8 h-8 md:w-10 md:h-10 object-cover'
                        />
                    </div>
                    <div className='w-[75%] flex flex-col gap-1 md:pl-2 md:gap-0 items-start'>
                        <h3 className='Alatsi font-medium md:text-xl'>{name}</h3>
                        <p className='Chivo font-light text-xs text-slate-500'>{studentDesig}</p>
                    </div>
                </div>

                {/* Video Thumbnail Section */}
                <div className='w-full rounded-3xl overflow-hidden relative'>
                    <img src={thumbnailImg} alt="Review Thumbnail" className='object-cover w-full h-full' />
                    <img src={ytReviewIcon} alt="YouTube" className='w-8 absolute top-3 left-5' />
                    
                    <div className='w-fit h-fit flex items-center gap-[.35rem] px-2 py-[.35rem] bg-slate-800/60 rounded absolute bottom-5 right-5'>
                        <img src={clockImage} alt="duration" className='w-4 h-4' />
                        <p className='Chivo text-white text-[12px] font-light'>{duration}</p>
                    </div>
                </div>

                {/* Bottom Info: Title and Rating */}
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-[90%]'>
                        <h2 className='Chivo w-full font-semibold text-base md:text-lg leading-tight'>
                            {title}
                        </h2>
                    </div>
                    <div>
                        <div className='Chivo font-medium md:text-xl flex items-center gap-1'>
                            <img src={star} alt="rating" className='w-5 h-5' />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentReviewCard;