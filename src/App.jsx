import './CSS/AdditionalFonts.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import './CSS/Styling.css'
import FTA_StockMarket_Beginner from './Pages/FTA_StockMarket_Beginner'
import ArtOfInvestment from './Pages/ArtOfInvestment'
import ProTraderAndIntraDay from './Pages/ProTraderAndIntraDay'
import OnlineTradingCourse from './Pages/OnlineTradingCourse'
import ExpertFutureTrading from './Pages/ExpertFutureTrading'
import ExpertOptionTrading from './Pages/ExpertOptionTrading'
import FTAMainLandingPage from './Pages/FTAMainLandingPage'
import EnrolFormModel from './Components/BootstrapModels/EnrolFormModel'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <EnrolFormModel/>
        <Routes>
          <Route path='/' element={<FTAMainLandingPage />} />
          <Route path='/art_of_investment' element={<ArtOfInvestment />} />   
          <Route path='/future_trading' element={<ExpertFutureTrading />} />
          <Route path='/option_trading' element={<ExpertOptionTrading />} />
          <Route path='/stock_market' element={<FTA_StockMarket_Beginner />} />
          <Route path='/online_course' element={<OnlineTradingCourse />} />
          <Route path='/pro_trader' element={<ProTraderAndIntraDay />} />
          <Route path='/about_us' element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
