const BASE_URL = "https://youtube-data8.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`, options);
      const result = await response.json();
      return result
    } catch (error) {
      console.log(error);
    }
}