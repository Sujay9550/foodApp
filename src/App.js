import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodMenu from "./components/FoodMenu";
import FoodList from "./components/FoodList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { fetchCartData, sendCartData } from "./store/cart-actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => {
    return state.ui.cartIsVisible;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {showCart && <Cart></Cart>}
      <div className="container app-container mt-4 p-3">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="container food-container mt-3">
          <FoodMenu></FoodMenu>
          <FoodList></FoodList>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default App;
