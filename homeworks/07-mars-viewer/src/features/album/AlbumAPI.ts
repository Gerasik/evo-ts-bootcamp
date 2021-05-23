import { Image } from "./album.type";

export const fetchSolData = (sol: number): Promise<Image[]> => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&api_key=${process.env.REACT_APP_API_KEY}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.photos);
};
