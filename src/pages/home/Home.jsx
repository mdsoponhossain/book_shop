import Banner from "../../components/banner/Banner";
import BestAuthor from "../../components/bestAuthor/BestAuthor";
import NewBooks from "../../components/newBooks/newBooks";
import Offer from "../../components/offer/Offer";
import Slider from "../../sharedComponents/slider/Slider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <NewBooks></NewBooks>
      <Offer></Offer>
      <BestAuthor></BestAuthor>
    </div>
  );
};

export default Home;
