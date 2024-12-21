import { SwiperSlide, Swiper } from "swiper/react";
import { BsCart2 } from 'react-icons/bs';
import { TbCurrencyTaka } from "react-icons/tb";
import { BsArrowClockwise } from "react-icons/bs";
import 'swiper/css';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg-slate-300 h-fit py-6 md:py-12">
      <Swiper
        rewind={true}
        navigation={false}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        className="mySwiper max-w-7xl mx-auto  text-center"
      >
        <SwiperSlide className="flex items-center gap-5">
          <BsCart2 className="text-6xl"></BsCart2>
          <div>
            <p className="text-xl">ফ্রি শপিং</p>
            <p className="flex items-center">১০,০০০<TbCurrencyTaka></TbCurrencyTaka> কেনাকাটা করলেই</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <BiSolidLockAlt className="text-6xl"></BiSolidLockAlt>
          <div>
            <p className="text-xl">নিরাপদ পেমেন্ট</p>
            <p>১০০% নিরাপদ পেমেন্ট</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <TbCurrencyTaka className="text-6xl"></TbCurrencyTaka>
          <div>
            <p className="text-xl">বেস্ট প্রাইজ</p>
            <p>গ্যারান্টিড প্রাইজ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <BsArrowClockwise className="text-6xl"></BsArrowClockwise>
          <div>
            <p className="text-xl">ফ্রি রিটার্ন</p>
            <p>৩০ দিনের মধ্যে</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-5">
          <BsCart2 className="text-6xl"></BsCart2>
          <div>
            <p className="text-xl">ফ্রি শপিং</p>
            <p className="flex items-center gap-0">১০,০০০<TbCurrencyTaka></TbCurrencyTaka> কেনাকাটা করলেই</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <BiSolidLockAlt className="text-6xl"></BiSolidLockAlt>
          <div>
            <p className="text-xl">নিরাপদ পেমেন্ট</p>
            <p>১০০% নিরাপদ পেমেন্ট</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <TbCurrencyTaka className="text-6xl"></TbCurrencyTaka>
          <div>
            <p className="text-xl">বেস্ট প্রাইজ</p>
            <p>গ্যারান্টিড প্রাইজ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center gap-5">
          <BsArrowClockwise className="text-6xl"></BsArrowClockwise>
          <div>
            <p className="text-xl">ফ্রি রিটার্ন</p>
            <p>৩০ দিনের মধ্যে</p>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Slider;