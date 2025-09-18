// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import './swiperthings.css';

import news from './announcementsList';

export function SlideShow() {
  const slideData = news;

  return (
    <section className='Swiper-Section'>
      <Swiper
        className="Swiper"
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        loop
      >
        {slideData?.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="Slides">
              <img src={s.img} alt={s.alt ?? ''} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SlideShow;
