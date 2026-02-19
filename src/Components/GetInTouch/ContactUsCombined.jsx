import React, { useContext } from 'react'
import FTALogo from '../../assets/Icons/Logo_black.png'
import Enquiry_Form from './Enquiry_Form'
import locationIcon from '../../assets/Icons/location-icon.png'
import clockIcon from '../../assets/Icons/clock-color-icon.png'
import mailIcon from '../../assets/Icons/mail-icon.png'
import phoneIcon from '../../assets/Icons/phone-icon.png'
import redVectorLIne from '../../assets/Lines/contact_Vector_red.png'
import yellowVectorLIne from '../../assets/Lines/contact_Vector_yellow.png'
import blueVectorLIne from '../../assets/Lines/contact_Vector_blue.png'
import skyblueVectorLIne from '../../assets/Lines/contact_Vector_skyblue.png'
import greenVectorLIne from '../../assets/Lines/contact_Vector_green.png'
import violetVectorLIne from '../../assets/Lines/contact_Vector_violet.png'
import { DataCollections } from '../../Store/GlobalDataSets'


const ContactUsCombined = ({ titleColor, formTextColor, FbuttonFrom, FbuttonTo }) => {

    let store = useContext(DataCollections)

    let contactUs = [
        { icon: `${locationIcon}`, field: 'Our Location', data: '123 ABCD, Bangalore' },
        { icon: `${mailIcon}`, field: 'Email Address', data: 'example@gmail.com' },
        { icon: `${phoneIcon}`, field: 'Phone Number', data: '+91 00000 00000' },
        {
            icon: `${clockIcon}`, field: 'Operating Hours', data: {
                weekDays: 'Monday - Friday: 7:00 AM - 6:00 PM',
                weekends: 'Saturday: 8:00 AM - 1:00 PM'
            }
        },
    ]

    return (
        <div className='w-full h-auto relative'>
            <div className='w-full h-full absolute rotate-180 lg:rotate-none lg:top-5 bottom-0 z-0   '>
                <img src={store.currentPage == 'ArtOfInvestment' ? blueVectorLIne
                    : store.currentPage == 'FutureTrading' ? redVectorLIne
                        : store.currentPage == 'OptionTrading' ? skyblueVectorLIne
                            : store.currentPage == 'SMBeginners' ? greenVectorLIne
                                : store.currentPage == 'OnlineCourse' ? violetVectorLIne
                                    : store.currentPage == 'IntraDay' ? yellowVectorLIne
                                        : blueVectorLIne} alt="" className='w-full h-[90%] object-contain' />
            </div>
            <div className='w-full h-auto flex flex-col gap-14 lg:gap-0 lg:flex-row  lg:justify-between bg-transparent px-4 md:px-16 lg:px-28 py-12 z-10 relative '>
                <div className='w-full lg:w-[50%] flex flex-col gap-4 h-auto '>
                    <div className='w-full h-[50%] flex justify-start items-center'>
                        <img src={FTALogo} alt="" className='w-auto h-12 md:h-18 lg:h-[40%] ' />
                    </div>
                    <div className='w-full h-[50%] flex flex-col gap-8'>
                        <div className=' w-full md:w-fit h-auto flex flex-col  '>
                            <h1 className='Alatsi text-[2rem] md:text-[2.6rem] font-medium text-center sm:text-left ' style={{ color: titleColor }}>Contact Us</h1>
                            <h3 className='Chivo text-lg md:text-2xl font-normal text-center md:text-left'>Stay In Touch With US</h3>
                        </div>
                        <div className='w-full h-auto flex flex-col justify-center md:justify-start  md:flex-row gap-8 md:gap-12  '>
                            <div className='w-full md:w-fit h-auto flex flex-col justify-center  gap-8'>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center' >
                                        <img src={locationIcon} alt="" className=' w-10 h-10 md:w-12 md:h-12  ' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Our Location</h3>
                                        <p className='Inter text-xs lg:text-sm'>123 ABCD, Bangalore</p>
                                    </div>
                                </div>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center' >
                                        <img src={phoneIcon} alt="" className=' w-10 h-10 md:w-12 md:h-12 ' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Phone Number</h3>
                                        <p className='Inter text-xs lg:text-sm'>+91 00000 00000</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-fit h-auto flex flex-col  md:justify-baseline md:items-baseline gap-8'>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center' >
                                        <img src={mailIcon} alt="" className=' w-10 h-10 md:w-12 md:h-12  ' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Email Address</h3>
                                        <p className='Inter text-xs lg:text-sm'>example@gmail.com</p>
                                    </div>
                                </div>                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-start' >
                                        <img src={clockIcon} alt="" className=' w-10 h-10 md:w-12 md:h-12  ' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Operating Hours</h3>
                                        <div>
                                            <p className='Inter text-xs lg:text-sm'>Monday - Friday: 7:00 AM - 6:00 PM </p>
                                            <p className='Inter text-xs lg:text-sm'>Saturday: 8:00 AM - 1:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] h-auto flex items-center justify-center'>
                    <Enquiry_Form from={FbuttonFrom} to={FbuttonTo} headingColor={formTextColor} />
                </div>
            </div>
        </div>
    )
}

export default ContactUsCombined


