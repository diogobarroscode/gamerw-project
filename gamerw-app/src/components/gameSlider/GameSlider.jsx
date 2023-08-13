import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './GameSlider.module.css';

import { Autoplay, Pagination, Navigation  } from 'swiper/modules';

export default function GameSlider({ games }) {
  return (
    <div className={styles.containerSlider}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          // type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {games.map((game) => (
         <SwiperSlide key={game.id} className={styles.swiperSlide}>
           <img src={game.background_image} alt={game.name} className={styles.slideImage} />
         </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
}

GameSlider.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};