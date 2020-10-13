import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Autoplay, A11y,Scrollbar} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([EffectFade, Autoplay,A11y,Scrollbar ]);

const Carousel = () => {
  const images = [
    {
      url: '/images/c1.jpg'
    },
    {
      url: '/images/c2.jpg'
    }, 
    {
      url: '/images/c3.jpg'
    }
  ]
  return (
    <>
      <div className="relative">
      <Swiper
        key={images.length}
        effect="fade"
        autoplay={true}
        loop={true}
        slidesPerView={3}
        scrollbar={{ draggable: true }}

      >
        {images.map((el, index) =>
          (<SwiperSlide 
            key={index}>
            <img src={el.url} alt="" className="w-full slide-image"/>
          </SwiperSlide>)
        )}
      </Swiper>
      </div>
    </>
  )
}
export default Carousel;