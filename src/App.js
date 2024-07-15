import "./styles.css";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";

import Header from "./Components/Header/Header";
import HomeMen from "./Pages/Home/HomeMen/HomeMen";
import HomeWomen from "./Pages/Home/HomeWomen/HomeWomen";
import HomeKids from "./Pages/Home/HomeKids/HomeKids";
import HomeBeauty from "./Pages/Home/HomeBeauty/HomeBeauty";
import HomeLifestyle from "./Pages/Home/HomeLifestyle/HomeLifestyle";
import HomeAccessories from "./Pages/Home/HomeAccessories/HomeAccessories";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/product/Products";
import PP from "./Pages/ProductsPage/pp";
import { RequiresAuth } from "./Components/RequiresAuth";
import { AuthContext } from "./index";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import User from "./Pages/User/User";
import { useContext } from "react";

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomeMen />} />
        <Route path="/women" element={<HomeWomen />} />
        <Route path="/kids" element={<HomeKids />} />
        <Route path="/beauty" element={<HomeBeauty />} />
        <Route path="/lifestyle" element={<HomeLifestyle />} />
        <Route path="/accessories" element={<HomeAccessories />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products" element={<PP />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequiresAuth>
              <User />
            </RequiresAuth>
          }
        />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}
