// import React from 'react';
import PropTypes from 'prop-types';
// import React, { useRef, useState } from 'react';
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

// function GameSlider({ games }) {
//   return (
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={3} // Número de slides visíveis por vez
//       navigation // Adicione os botões de navegação
//     >
//       {games.map((game) => (
//         <SwiperSlide key={game.id}>
//           <img src={game.background_image} alt={game.name} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

 GameSlider.propTypes = {
   games: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.number.isRequired,
       background_image: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       // Adicione outros tipos de propriedades necessárias
     })
   ).isRequired,
 };

//export default GameSlider