import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = async (searchParams) => {
  const { text, year, type, page } = searchParams;
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${text}&y=${year}&type=${type}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu:", error);
    throw error;
  }
};

export const getMovie = async (imdbId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&i=${imdbId}`
    );
    return response.data;
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu:", error);
    throw error;
  }
};
