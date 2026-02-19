import React from 'react'
import financialLiteracyIcon from '../../assets/Icons/FinanncialLiteracy_Icon.png'
import wealthBuildingIcon from '../../assets/Icons/WealthBuilding_icon.png'
import DiversificationIcon from '../../assets/Icons/Diversification_icon.png'
import EntrepreneurialSkillIcon from '../../assets/Icons/EntrepreneurialSkill_icon.png'
import financialSecurityIcon from '../../assets/Icons/LongTermFinancialSecurity_iconn.png'
import PersonalGrowthIcon from '../../assets/Icons/PersonalGrowth_icon.png'

const OptionTradingCard = () => {
    return (
        <div className='w-full h-auto'>
            <div className='w-full h-auto px-4 lg:px-16 py-16 bg-linear-to-br from-[#050B17] from-[50%] to-[#067DB3]  flex flex-col items-center gap-16 md:gap-24 lg:gap-16' >
                <div className='w-full h-auto flex '>
                    <div className='w-full  md:px-12 lg:px-0 h-auto flex  flex-wrap items-center justify-center gap-10 '>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={financialLiteracyIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Financial Literacy</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>Understanding the Stock Market
                                        introduces beginners to key financial concepts such as investing, risk management, and accumulating assets. This knowledge allows people
                                        to make informed decisions about their finances and plan their long-term financial goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={wealthBuildingIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Wealth Building</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>Investing in the stock market can create
                                        wealth over time through capital appreciation and dividends. When beginners learn how to invest wisely, they can take advantage of the
                                        compounding effect to steadily grow their wealth over the years.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={DiversificationIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Diversification</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>The stock market offers a wide range of
                                        investment opportunities across sectors, industries and asset classes. Learning how to diversify your portfolio by investing in different stocks
                                        and other financial instruments will help beginners spread risk and minimize potential losses.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={EntrepreneurialSkillIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Entrepreneurial Skills</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>Learning about the stock market promotes
                                        entrepreneurial skills such as critical thinking, problem solving and decision making. Beginners analyze companies, evaluate financial data and
                                        assess market trends, honing skills that are valuable in investing and business management.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={financialSecurityIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Long-term financial security</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>When beginners learn how to invest in the stock market
                                        early, they can lay the foundation for long-term financial security and retirement planning. Starting early gives you more time to take advantage of downturns
                                        and weather market fluctuations
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[30%] h-auto flex gap-3 md:gap-6  border rounded-[4rem] lg:rounded-[5rem] border-white/40 '>
                            <div className='w-full flex flex-col justify-center p-5 lg:px-11 lg:py-12 gap-6'>
                                <div className='w-fit h-fit '>
                                    <img src={PersonalGrowthIcon} alt="" className='w-20 h-20' />
                                </div>
                                <div className='w-full  h-auto   '>
                                    <h3 className='Chivo font-semibold text-[.6rem] text-nowrap md:text-lg lg:text-2xl text-white'>Personal Growth</h3>
                                    <p className='Chivo font-light text-justify md:text-left text-[.6rem] md:text-[1rem] text-white/60'>Learning about the stock market as a beginner
                                        is a journey of personal growth and self-development. It requires discipline, patience and constant learning, which fosters valuable qualities
                                        such as determination and resilience that are useful in all walks of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OptionTradingCard