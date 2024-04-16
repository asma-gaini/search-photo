// Your API key: Asu7Y1i5vrIK02pWx5v8oWqo0BfNWnC9pqbqk2kZ3s9WztSfCUmemxWU

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import CreateAcount from "./components/CreateAcount";
import LoginForm from "./components/LoginForm";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
// `${BASE_URL}/search`
const BASE_URL = "https://api.pexels.com/v1";

const instance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "Asu7Y1i5vrIK02pWx5v8oWqo0BfNWnC9pqbqk2kZ3s9WztSfCUmemxWU",
  },
});
const searchForPhoto = ({ query, page, per_page }) => {
  return instance.get("/search", { params: { query, page, per_page } });
};
function App() {
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
    <div>
      <div>
        {photos.length > 0 &&
          photos.map((photo) => <img src={photo.src.small} />)}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />}>
            <Route index="form" element={<LoginForm />} />
            <Route path="create" element={<CreateAcount />} />
          </Route>
          <Route path="category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
