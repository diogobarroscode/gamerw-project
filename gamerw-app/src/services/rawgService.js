import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_KEY;
const BASE_URL = import.meta.env.VITE_RAWG_BASE_URL;

const rawgService = axios.create({
  baseURL: BASE_URL,
});

export const getPopularGames = async () => {
  try {
    const currentYear = new Date().getFullYear();
    const startDate = `${currentYear}-01-01`;
    const endDate = `${currentYear}-12-31`;

    const response = await rawgService.get('/games', {
      params: {
        key: API_KEY,
        ordering: '-added',
        dates: `${startDate},${endDate}`,
        page_size: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular games:', error);
    throw error;
  }
};

export const getGameCategories = async () => {
  try {
    const response = await rawgService.get('/genres', {
      params:{
        key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games categories:', error);
    throw error;
  }
};