import './App.css'
import Banner from './components/banner/Banner'
import BestAuthor from './components/bestAuthor/BestAuthor'
import NewBooks from './components/newBooks/newBooks'
import Offer from './components/offer/Offer'
import Navbar from './sharedComponents/navbar/Navbar'
import Slider from './sharedComponents/slider/Slider'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Slider></Slider>
      <NewBooks></NewBooks>
      <Offer></Offer>
      <BestAuthor></BestAuthor>
    </>

  )
}

export default App
