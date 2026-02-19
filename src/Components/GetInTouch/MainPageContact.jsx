import React, { useContext, useEffect } from 'react'
import { DataCollections } from '../../Store/GlobalDataSets'
import { HiOutlinePhone } from "react-icons/hi";
import { FaRegClock } from 'react-icons/fa';
import locationIcon from '../../assets/Icons/MainPagelocation_icon.png'
import mailicon from '../../assets/Icons/MainPageMail_icon.png'
import logo from '../../assets/MainPageContactChangeOnLogo.png'
import contactBackgound from '../../assets/MainPageContactUsBackground.png'
import Enquiry_Form from './Enquiry_Form';

const MainPageContact = ({ titleColor, formTextColor, FbuttonFrom, FbuttonTo }) => {

    let store = useContext(DataCollections)

    useEffect(() => {
        console.log(store.currentPage);
    }, [])

    return (
        <div className='w-full h-auto relative'>
            <div className={`w-full h-full absolute  top-0 left-0 z-0  `}>
                <img src={contactBackgound} alt="" className='w-full h-full object-cover z-5 ' />
            </div>
            <div className='w-full h-full  flex flex-col gap-14 lg:gap-0 xl:flex-row text-white  lg:justify-between bg-black/40 backdrop-blur-lg px-4 md:px-16 lg:px-28 py-12 z-20 relative '>
                <div className='w-full lg:w-[50%] flex flex-col gap-4 h-auto '>
                    <div className='w-full h-[60%] flex justify-start items-cente bg-cover'>
                        <img src={logo} alt="" className='size-full' />
                    </div>
                    <div className='w-full h-[50%] flex flex-col gap-8'>
                        <div className=' w-full md:w-fit h-auto flex flex-col  '>
                            {/* <h1 className='Alatsi text-[2rem] md:text-[2.6rem] font-medium text-center sm:text-left ' style={{ color: titleColor }}>Contact Us</h1> */}
                            <h3 className='Chivo text-lg md:text-2xl font-normal text-center md:text-left'>Contact Us Stay In Touch With Us</h3>
                        </div>
                        <div className='w-full h-auto flex flex-col justify-center md:justify-start  md:flex-row gap-8 md:gap-12  '>
                            <div className='w-full md:w-fit h-auto flex flex-col justify-center  gap-8'>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center  w-10 h-10 md:w-12 md:h-12 rounded-full  shadow-lg shadow-black/20 backdrop-blur-2xl   ' >
                                        <img src={locationIcon} alt="" className=' w-5 h-auto ' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Our Location</h3>
                                        <p className='Inter text-xs lg:text-sm'>123 ABCD, Bangalore</p>
                                    </div>
                                </div>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center text-2xl text-[#4BC41A] items-center w-10 h-10 md:w-12 md:h-12 rounded-full  shadow-lg backdrop-blur-2xl   ' >
                                        <HiOutlinePhone />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Phone Number</h3>
                                        <p className='Inter text-xs lg:text-sm'>+91 00000 00000</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-fit h-auto flex flex-col  md:justify-baseline md:items-baseline gap-8'>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center  w-10 h-10 md:w-12 md:h-12 rounded-full  shadow-lg backdrop-blur-2xl   ' >
                                        <img src={mailicon} alt="" className='  w-7 h-auto' />
                                    </div>
                                    <div>
                                        <h3 className='Inter text-sm md:tex-lg font-bold '>Email Address</h3>
                                        <p className='Inter text-xs lg:text-sm'>example@gmail.com</p>
                                    </div>
                                </div>
                                <div className='w-fit h-auto flex gap-3 justify-between'>
                                    <div className='flex justify-center items-center text-2xl bg-white/20  text-[#16A7D8] w-10 h-10 md:w-12 md:h-12 rounded-full  shadow-lg backdrop-blur-2xl   ' >
                                        <FaRegClock />
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
                <div className='w-full lg:w-[30%] xl:w-[35%] h-auto flex items-center justify-center'>
                    <Enquiry_Form from={FbuttonFrom} to={FbuttonTo} headingColor={'#ffffff'} />
                </div>
            </div>
        </div>
    )
}

export default MainPageContact