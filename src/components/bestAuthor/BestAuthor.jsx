import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Card from "../../sharedComponents/card/Card";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import "swiper/css/pagination";
const BestAuthor = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./newBooks.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data, 111);
      });
  }, []);
  return (
    <>
      <SectionTitle
        titleText={"সেরা লেখক"}
        style={"text-center "}
      ></SectionTitle>
      <div className="lg:h-[550px] max-w-7xl mx-auto lg:flex gap-2">
        <div className="w-full lg:w-[35%]">
          {/* books */}
          <Swiper
            rewind={true}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
            }}
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
            spaceBetween={10}
            className="mySwiper max-w-7xl mx-auto  text-center"
          >
            {products?.map((product) => (
              <SwiperSlide
                key={product?.id}
                className="flex items-center gap-2"
              >
                <Card
                  product={product}
                  styles={"h-[250px]"}
                  cardPadding={"pb-6  lg:pb-8"}
                ></Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:flex-grow lg:flex gap-4">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full"
              src="https://en.banglapedia.org/images/0/05/IslamKaziNazrul.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pt-10">
            <h1>
              <span className="text-xl font-semibold">কাজী নজরুল ইসলাম</span> -
              লেখক
            </h1>
            <div className=" mt-3">
              <p>"বল বীর-</p>
              <p>বল উন্নত মম শির!</p>
              <p>শির নেহারী’ আমারি নতশির ওই শিখর হিমাদ্রীর!"</p>
            </div>
            <div className="lg:mt-10">
              <h1 className="text-xl font-semibold">পুরষ্কার সমূহ</h1>
              <p>
                জগত্তারিণী পদক (১৯৪৫) পদ্মভূষণ (১৯৬০) ডি.লিট ডিগ্রি, ঢাকা
                বিশ্ববিদ্যালয়। একুশে পদক (১৯৭৬) স্বাধীনতা পদক (১৯৭৭)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAuthor;
