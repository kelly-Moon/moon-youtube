// import axios from "axios";

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 48,
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   console.log(data);
//   return data;
// };

//구글에서 키받기
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // 구글 콘솔에서 발급받은 키

export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const options = {
  params: {
    maxResults: 48,
    key: API_KEY, // RapidAPI 헤더 대신 key 추가
  },
};

export const fetchFromAPI = async (url, extraParams = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      ...options,
      params: { ...options.params, ...extraParams },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
  }
};
