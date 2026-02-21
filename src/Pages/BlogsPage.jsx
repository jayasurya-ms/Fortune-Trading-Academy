import React, { useContext, useEffect } from 'react'
import Banner from "/src/assets/BannerImages/Blogs_banner.png"
import Footer from '../Components/Footer/Footer'
import { DataCollections } from '../Store/GlobalDataSets'
import { Helmet } from 'react-helmet-async'
import Header from '../Components/Header/Header'
import BlogCards from '../Components/Blog/BlogCards'

const BlogsPage = () => {

    const from = '#a03909'
    const to = '#AF490D'

    const store = useContext(DataCollections)

    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Fortune Trading Academy Blog",
      "description": "Market insights, technical analysis tips, and trading news.",
      "publisher": {
        "@type": "Organization",
        "name": "Fortune Trading Academy"
      }
    };

    return (
        <div className='w-full h-auto flex flex-col'>

            <Helmet>
              <title>Blogs | Fortune Trading Academy</title>
              <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
            </Helmet>

            {/* banner */}
            <div className='w-full h-auto flex flex-col bg-transparent relative overflow-hidden'>
            <div className="absolute inset-0 z-10 w-full h-full bg-[#080B12]">
                <img src={Banner} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out `}/>
            </div>

            {/* Radial Gradient Overlay */}
            <div className='w-full h-full opacity-10 z-90 absolute' style={{ backgroundImage: `radial-gradient(circle at 50% 300%, ${from} , ${to})` }}></div>
            
            {/* Header Div */}
            <div className='w-full h-auto relative z-1000'>
                <Header contactBtnFrom={from} contactBtnTo={to} />
            </div>

            {/* Text & Details div */}
            <div className='w-full h-auto'>
                <div className={`w-full h-auto py-14 relative z-999 flex flex-col`}>
                    <div className='w-full h-auto flex flex-col relative gap-8 items-center pb-20 lg:pb-52'>
                        
                        {/* Text Content */}
                        <div className='w-full h-auto flex items-center justify-center'>
                            <div className='w-fit flex flex-col gap-4 px-4 mt-10 md:mt-20 lg:px-0 items-center justify-center text-[#E7FFF8]'>
                                <p className={`Chivo font-light text-[.75rem] lg:text-[1rem] text-center `}>
                                    <span className=' Alatsi text-[40px] md:text-[50px] xl:text-[80px]'>Blogs</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Buttons and Social Proof Section */}
                    <div className='w-full h-auto flex flex-col gap-12'>
                        {/* Call to Action Button */}
                        <div className='w-full h-auto flex flex-col gap-5 md:gap-8 items-center justify-center pb-10'>
                            <div className='w-fit h-auto px-4 py-1 border rounded-full bg-black/30' style={{ borderColor: to }}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div className='w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 rounded-full bg-[#28D21C]' ></div>
                                    <p className='Chivo font-light text-[.75rem] md:text-[1rem] text-white'>Start Your Trading Journey Today</p>
                                </div>
                            </div>
                            <button 
                                className={`Roboto w-fit h-auto px-8 py-1 md:px-18 md:py-3 border-2 rounded-full text-[1rem] md:text-xl lg:text-2xl cursor-pointer font-bold transition-all active:scale-95 shadow-white/40 hover:shadow-lg`} 
                                style={{ background: `linear-gradient(to right, white, white`, color: from }}
                                onClick={() => store.handleShow()}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=' w-full h-auto bg-slate-50 py-6 rounded-tl-4xl rounded-tr-4xl -mt-10 z-99 md:p-4 '>
            <BlogCards />
        </div>

        <div className='w-full h-auto'>
            <Footer textColor={to} bgColor={'#190900'} />
        </div>

        </div>
    )
}

export default BlogsPage

// const contactSchema = {
//   "@context": "https://schema.org",
//   "@type": "ContactPage",
//   "mainEntity": {
//     "@type": "LocalBusiness",
//     "name": "Fortune Trading Academy",
//     "image": "https://www.fortunetradingacademy.com/assets/Icons/Logo_white.png",
//     "telephone": "+91-YOUR-NUMBER", // Replace with actual number
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "1st Floor, 334/28, 14th Cross Rd, 2nd Block, Jayanagar",
//       "addressLocality": "Bengaluru",
//       "postalCode": "560011"
//     }
//   }
// };