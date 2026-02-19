import React, { useContext, useEffect, useState } from 'react'
import FTAlogoWhite from '../../assets/Logo/fortuneTradingLogo_white.png'
import FTAMainPageLogo from '../../assets/Icons/FTALOGO_MainPage.png'
import { FiPhone } from 'react-icons/fi';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { DataCollections } from '../../Store/GlobalDataSets';
import { useNavigate } from 'react-router';

const Header = ({ contactBtnFrom, contactBtnTo }) => {
    let store = useContext(DataCollections)
    let navigate = useNavigate()


    // let [change, setChange] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <header className='bg-linear-to-b from-[black] to-transparent w-full h-auto px-8 py-8 headerColor'>
            <nav className="w-full h-auto flex  justify-between items-center relative">
                {/* LOGO */}
                <div className="w-fit h-auto logoImage">
                    <img src={FTAMainPageLogo} alt="" className="w-auto md:h-12 h-8 cursor-pointer"
                        onClick={() => navigate('/')} />
                </div>
                {/* HAMBURGER ICON — OUTSIDE */}
                <div className="MenuIcon cursor-pointer z-990" onClick={() => setMenuOpen(prev => !prev)} >
                    <div className={`menu-icon-wrapper ${menuOpen ? "open" : ""}`} >
                        {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </div>
                </div>
                {/* SLIDE-IN MENU */}
                <div className={`navContainer ${menuOpen ? "navOpen" : ""}`}>
                    <div className="navLinks flex gap-5 text-[16px] font-bold">
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/StockMarket_Beginners')}>Stock Market Course</h2></a>
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/IntraDayTrading')}>Pro Trader And Intra Day</h2></a>
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/ArtOfInvestment')}>Investment</h2></a>
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/OnlineCourse')}>Online Trading</h2></a>
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/FutureTrading')}>Future Trading</h2></a>
                        <a><h2 className="cursor-pointer text-white/80" onClick={() => navigate('/OptionTrading')}>Option Trading</h2></a>
                    </div>
                    <button className="text-white contactBtn flex gap-1 w-fit items-center px-8 py-[.65rem] rounded-full cursor-pointer "
                        style={menuOpen  ? {color:contactBtnFrom} : {background: `linear-gradient(to right, ${contactBtnFrom}, ${contactBtnTo})`}}

                    >
                        {menuOpen ? '' : <FiPhone className="text-xl" /> }
                        Contact Us
                    </button>
                </div>
            </nav>

        </header>
    )
}

export default Header

// bg-radial-[at_50%_300%] lg:bg-radial-[at_50%_100%]  from-[#0c2212]  to-[#123f25] lg:to-[black]