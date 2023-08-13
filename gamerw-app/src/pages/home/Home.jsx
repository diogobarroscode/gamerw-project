import { useState, useEffect } from 'react';
import { getPopularGames } from '../../services/rawgService';
import Loading from '../../components/loading/Loading';
import styles from './Home.module.css';
import GameSlider from '../../components/gameSlider/GameSlider';


// const popularGames = await getPopularGames();
// console.log(popularGames);

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [popularGames, setPopularGames] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);

  useEffect(() =>{
    async function fetchPopularGames() {
      try {
        const games = await getPopularGames();
        setPopularGames(games);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching popular games:', error);
        setLoading(false);
      }
    }

    fetchPopularGames();
  }, [])

  return (

    <>
      {loading ? (
        <Loading />
      ) : (
       <main className={styles.main}>
         <h2>Mais Populares em 2023</h2>
         <GameSlider games={popularGames} />
       </main>
      )}
    </>
    
  )
}

export default Home;