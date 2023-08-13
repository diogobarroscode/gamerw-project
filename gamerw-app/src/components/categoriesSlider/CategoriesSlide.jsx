import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
//import 'swiper/css/pagination';

import styles from './CategoriesSlider.module.css';

 import { Pagination } from 'swiper/modules';

export default function GameCategories( {gameCategories} ) {
  return (
    <div className={styles.containerCategory}>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiperCat}
      >
        {gameCategories.map((category) => (
            <SwiperSlide key={category.id} className={styles.swiperSlideCat}>
              <div className={styles.categoryCardCat}>
                <img src={category.image_background} 
                    alt={category.name} 
                    className={styles.slideImageCat}
                />
                <div className={styles.categoryNameCat}>{category.name}</div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

}

GameCategories.propTypes = {
  gameCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image_background: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};