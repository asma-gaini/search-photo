// Your API key: Asu7Y1i5vrIK02pWx5v8oWqo0BfNWnC9pqbqk2kZ3s9WztSfCUmemxWU

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import CreateAcount from "./components/CreateAcount";
import LoginForm from "./components/LoginForm";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Photos from "./components/Photos";
import { PhotoProvider, usePhotos } from "./context/PhotoContext";
// `${BASE_URL}/search`
const BASE_URL = "https://api.pexels.com/v1";

function App() {
  return (
    <div>
      <PhotoProvider>
        <Photos />
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
      </PhotoProvider>
    </div>
  );
}

export default App;
