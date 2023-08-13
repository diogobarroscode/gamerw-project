import { useState, useEffect } from 'react';
import { getPopularGames } from '../../services/rawgService';
import { getGameCategories } from '../../services/rawgService';
import Loading from '../../components/loading/Loading';
import styles from './Home.module.css';
import GameSlider from '../../components/gameSlider/GameSlider';
import GameCategories from '../../components/categoriesSlider/categoriesSlide';


// const popularGames = await getPopularGames();
// console.log(popularGames);

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [popularGames, setPopularGames] = useState([]);
  const [gameCategories, setGameCategories] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);

  useEffect(() =>{
    async function fetchPopularGames() {
      try {
        const games = await getPopularGames();
        const categories = await getGameCategories();


        setPopularGames(games);
        setGameCategories(categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching popular games:', error);
        setLoading(false);
      }
    }

    fetchPopularGames();
  }, [])

  const currentYear = new Date().getFullYear();

  return (

    <>
      {loading ? (
        <Loading />
      ) : (
       <main className={styles.main}>
         <h2 className={styles.titleGameSlider}>Mais Populares em {currentYear}</h2>
         <GameSlider games={popularGames} />

         <h2 className={styles.titleCategories}>Explorar categorias</h2>
          <GameCategories gameCategories={gameCategories} />
       </main>
      )}
    </>
    
  )
}

export default Home;