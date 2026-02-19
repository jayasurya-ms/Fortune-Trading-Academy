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
          <Route path='/ArtOfInvestment' element={<ArtOfInvestment />} />   
          <Route path='/FutureTrading' element={<ExpertFutureTrading />} />
          <Route path='/OptionTrading' element={<ExpertOptionTrading />} />
          <Route path='/StockMarket_Beginners' element={<FTA_StockMarket_Beginner />} />
          <Route path='/OnlineCourse' element={<OnlineTradingCourse />} />
          <Route path='/IntraDayTrading' element={<ProTraderAndIntraDay />} />
          <Route path='/AboutUs' element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
