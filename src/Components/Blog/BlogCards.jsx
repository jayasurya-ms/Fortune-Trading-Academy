import React from 'react'

const blogData = [
    {
        id: 1,
        title: 'Mastering Price Action: The Secret to Consistent Trading',
        meta_description: 'Learn why price action is the most reliable tool for traders. Fortune Trading Academy in Jayanagar teaches you how to read the market without complex indicators.',
        image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1000',
        slug: 'mastering-price-action-trading',
    },
    {
        id: 2,
        title: '5 Common Mistakes Beginner Traders Make and How to Avoid Them',
        meta_description: 'Don’t lose your capital to rookie errors. We break down the top 5 mistakes new traders make in the Indian stock market and how professional mentorship helps.',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000',
        slug: 'beginner-trading-mistakes-to-avoid',
    },
    {
        id: 3,
        title: 'The Psychological Edge: Why Mindset Matters More Than Strategy',
        meta_description: 'Trading is 80% psychology. Explore how to build the emotional discipline required for long-term success with our Bangalore-based expert mentors.',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1000',
        slug: 'importance-of-trading-psychology',
    },
    {
        id: 4,
        title: 'Options Trading for Beginners: A Step-by-Step Guide',
        meta_description: 'Demystifying the world of Options. Learn the basics of calls, puts, and risk management from the best stock market academy in Bangalore.',
        image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1000',
        slug: 'options-trading-beginners-guide',
    },
    {
        id: 5,
        title: 'Financial Literacy in India: Bridging the 3% Gap',
        meta_description: 'With only 3% of Indians investing in the stock market, the opportunity for growth is massive. Learn how Fortune Trading Academy is driving financial literacy.',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000',
        slug: 'financial-literacy-gap-india',
    },
    {
        id: 6,
        title: 'Swing Trading vs. Day Trading: Which Style Suits You?',
        meta_description: 'Find your trading personality. We compare swing and day trading to help you decide which mentorship path fits your lifestyle and goals.',
        image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=1000',
        slug: 'swing-vs-day-trading-comparison',
    },
    {
        id: 7,
        title: 'How to Build a Diversified Long-Term Investment Portfolio',
        meta_description: 'Wealth isn’t made overnight. Discover the principles of portfolio diversification and long-term wealth creation taught at our Jayanagar campus.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        slug: 'building-long-term-investment-portfolio',
    }
];

const BlogCards = () => {
  return (
     <div id='bloglist-section' className=''>
      <div className='size-full flex justify-center items-center p-4'>
        <div className='size-full grid grid-flow-row grid-cols-12 overflow-hidden '>
          {blogData.map((data) => {
            return(
              <div
              key={data.id}
              className='h-120 xl:col-span-4 md:col-span-6 col-span-full flex justify-center items-center'
              >
                <div className='size-[85%] rounded-3xl md:p-4! flex flex-col justify-center items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 p-4! shadow-2xl'>
                  <div className='w-full h-[60%]'>
                    <div className='size-full rounded-3xl bg-cover bg-no-repeat flex items-end' style={{backgroundImage: `url(${data.image})`}}>
                      <span className=' p-2 w-full readex font-semibold text-white text-[15px] md:text-[18px] text-center bg-black/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl'>{data.title}</span>
                    </div>
                  </div>
                  <div className=' w-full h-[20%]'>
                    <div className=' flex justify-center items-center w-full'>
                      <span className='w-full p-2 readex line-clamp-3 text-black text-[14px] md:text-[16px] text-center'>{data.meta_description}</span>
                    </div>
                  </div>
                  <div className='w-full h-[10%]'>
                    <a href={`/blog/${data.slug}`} className='size-full flex justify-center items-center text-white no-underline! readex rounded-full bg-[#190900]'>View Blog</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogCards
