// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.css';
import './swiperthings.css';

import news from './announcementsList';

export function SlideShow() {
  const slideData = news

  return (
    <>
    <section className='Swiper-Section'>
        <Swiper className="Swiper">
          {slideData?.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="Slides">
                <img src={s.img} alt={s.alt ?? ''} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default SlideShow;
