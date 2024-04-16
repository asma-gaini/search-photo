import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";

const BASE_URL = "https://api.pexels.com/v1";
const PhotosContext = createContext();

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    // Authorization: "Asu7Y1i5vrIK02pWx5v8oWqo0BfNWnC9pqbqk2kZ3s9WztSfCUmemxWU",
  },
});
const searchForPhoto = ({ query, page, per_page }) => {
  return instance.get("/search", { params: { query, page, per_page } });
};

function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState("");
  useEffect(() => {
    const getPhoto = async () => {
      const data = await searchForPhoto({
        page: 1,
        per_page: 10,
        query: "animal",
      });
      setPhotos(data.data.photos);
    };

    getPhoto();
  }, []);
  return (
    <PhotosContext.Provider value={{ photos }}>
      {children}
    </PhotosContext.Provider>
  );
}
function usePhotos() {
  const context = useContext(PhotosContext);
  if (context === undefined)
    throw new Error("PhotosContext was used outside of the photoProvider");
  return context;
}
export { PhotoProvider, usePhotos };
