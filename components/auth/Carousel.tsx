import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import Img1 from "../../public/assets/carousel_img_4.webp";
import Img2 from "../../public/assets/carousel_img_5.webp";
import Img3 from "../../public/assets/carousel_img_6.webp";

export default function Carousel() {
  return (
    <div className="w-full h-full">
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Autoplay, Navigation ]}
        className="mySwiper w-full h-full"
        >
            <SwiperSlide className="w-full h-full object-cover">
                <Image src={Img1} alt="frames_ad"/> 
            </SwiperSlide>
            <SwiperSlide className="w-full h-full object-cover">
                <Image src={Img2} alt="frames_ad"/>    
            </SwiperSlide>
            <SwiperSlide className="w-full h-full object-cover">
                <Image src={Img3} alt="frames_ad"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
