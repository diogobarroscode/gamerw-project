import { useState, useEffect } from 'react';
import { getPopularGames } from '../../services/rawgService';

import styles from './Home.module.css';
import GameSlider from '../../components/gameSlider/GameSlider';


const popularGames = await getPopularGames();
console.log(popularGames);

const Home = () => {

  const [popularGames, setPopularGames] = useState([]);

  useEffect(() =>{
    async function fetchPopularGames() {
      try {
        const games = await getPopularGames();
        setPopularGames(games);
      } catch (error) {
        console.error('Error fetching popular games:', error);
      }
    }

    fetchPopularGames();
  }, [])

  return (
    <main className={styles.main}>
      <h2>Mais Populares em 2023</h2>
      <GameSlider games={popularGames} />
    </main>
  )
}

export default Home;