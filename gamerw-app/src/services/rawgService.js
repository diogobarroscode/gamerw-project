import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_KEY;
const BASE_URL = import.meta.env.VITE_RAWG_BASE_URL;

const rawgService = axios.create({
  baseURL: BASE_URL,
});

export const getPopularGames = async () => {
  try {
    const response = await rawgService.get('/games', {
      params: {
        key: API_KEY,
        ordering: '-added',
        dates: '2023-01-01,2023-12-31',
        page_size: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular games:', error);
    throw error;
  }
};