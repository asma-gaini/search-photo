import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAcount from "./components/createForm";
import LoginForm from "./components/LoginForm";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />}>
            {/* <Route path="login" element={<LoginForm />} /> */}
            {/* <Route path="create" element={<CreateAcount />} /> */}
          </Route>
          <Route path="category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
