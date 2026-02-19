import React from 'react'

const WhyFTA = ({title,titleColor}) => {
    return (
        <div className='w-full h-auto '>
            <div className='w-full h-auto flex flex-col px-8 lg:px-16 py-8 gap-8 '>
                <div className='w-full h-auto flex flex-col gap-4 '>
                    <h2 className='Alatsi text-[1.5rem] lg:text-[2.785rem] m-0 leading-7 lg:leading-10 '>Why Fortune Trading Academy for</h2>
                    <h1 className='Alatsi text-[2.5rem] lg:text-[3.7rem] m-0 leading-10 lg:leading-17' style={{color:titleColor}}> {title} </h1>
                </div>
                <div>
                    <p className='Chivo font-light text-[.75rem] text-justify  md:text-[1rem] w-full lg:w-[92%]'>Fortune Trading Academy (FTA) uses a multifaceted approach
                        to guide students through different types of investment stocks.
                        Our curriculum includes in-depth modules on growth stocks,
                        value stocks, dividend stocks and more. Through interactive lectures,
                        real case studies and practical exercises, FTA guides students to understand
                        the nuances of all types of investments. Expert mentors provide personal
                        assistance by providing insights into market analysis, financial metrics
                        and industry trends. FTA emphasizes hands-on learning that allows students
                        to practice stock and construction strategies. By fostering a dynamic
                        learning environment, FTA equips students with the knowledge and skills
                        to confidently succeed in various investment stocks.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyFTA