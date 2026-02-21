import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion';
import Header from '../Header/Header';

const data = {
    id: 1,
    title: 'Mastering Price Action: The Secret to Consistent Trading',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1000',
    contents: [
        {
            content_heading: 'What is Price Action Trading?',
            content_body: 'Price action trading is a methodology that relies on the analysis of historical price movements to make trading decisions, rather than relying solely on technical indicators. At Fortune Trading Academy, we teach students how to read "naked" charts by observing candlestick patterns, support and resistance levels, and market structure. This approach allows traders to understand the psychology of buyers and sellers in real-time.',
        },
        {
            content_heading: 'The Core Pillars: Support and Resistance',
            content_body: 'The foundation of price action lies in identifying key zones where the price has historically reversed or stalled. Support represents a floor where buying interest is strong, while resistance acts as a ceiling where selling pressure increases. By mastering these zones, traders in the Bangalore market can identify high-probability entry and exit points, reducing the noise created by lagging indicators like moving averages.',
        },
        {
            content_heading: 'Why Price Action is Superior for Beginners',
            content_body: 'Most beginners clutter their charts with too many indicators, leading to "analysis paralysis." Price action simplifies the process by focusing on the most important data point: the price itself. Whether you are day trading Nifty or investing for the long term, understanding price behavior helps you stay ahead of the curve. Our mentorship program emphasizes building this "chart eye" to develop a sustainable trading career.',
        },
    ]
}

const BlogDetails = () => {

//   const { slug } = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await API.get(`/blog/${slug}/`)
//         setData(response.data)
//       } catch (err) {
//         setError("Error in fetching data")
//         console.log("fetch error:",err)
//       }finally{
//         setLoading(false)
//       }
//     };
//     fetchData();
//   },[]);

//   console.log(data);

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   if (loading) return <div className='text-light p-5 text-center'>Loading...</div>
//   if (error) return <div className='text-light p-5 text-center'>{error}</div>

  return (
    <div id="blogdetail-section" className="h-auto w-full flex flex-col overflow-hidden">
      <div className="h-full w-full flex flex-col md:flex-row">

        {/* main */}
        <motion.div
          className=" h-screen w-full flex flex-col items-center relative overflow-hidden"
          initial={{opacity:0, x: '-50%'}}
          animate={{opacity:1, x: 0}}
          transition={{ duration: 0.5, delay : 0.2}}
          >

          {/* Bg img */}
          <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0" style={{backgroundImage: `url(${data.image})`}}></div>

          {/* top */}
          <motion.div
            className="relative w-full"
            initial={{opacity: 0 , y: -100}}
            animate={{ opacity: 1 , y: 0}}
            transition={{duration: 0.4, delay: 0.6}}
            >
            <div className='w-full h-auto relative z-1000'>
                <Header />
            </div>
          </motion.div>

          <motion.div
            className="relative w-full max-sm:w-[70%] flex justify-center items-center mt-[45%] md:mt-[22%] xl:mt-[13%]"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, delay: 0.6}}
            >
              <span className='readex text-white bg-black/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6! md:text-[20px] xl:text-[22px]'>{data.title}</span>
          </motion.div>

        </motion.div>
      </div>

        {/* contents from database */}
        <div className=' h-auto w-full flex p-3! md:p-10!'>
          <div className='size-full  flex flex-col justify-center p-2 gap-7'>
            {data.contents.map((content, index) => {
                return(
                  <div key={index} className=' Alatsi h-full w-full flex flex-col items-center'>
                    <div className='font-semibold text-[18px] md:text-[30px] w-[98%]'>
                      <span>{index + 1}. </span>
                      <span>{content.content_heading}</span>
                    </div>
                    <div className=' mt-2 w-[95%] flex justify-center h-auto text-[16px] md:text-[18px]'>
                        <span>{content.content_body}</span>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>

    </div>
  )
}

export default BlogDetails;
