import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import Notification from "./UI/Notification";
import appIcon from "../icons/app-icon.png";
import menuBurgerIcon from "../icons/menu-burger.png";
import shoppingCartIcon from "../icons/shopping-cart.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const cartTotalQuantity = useSelector((state) => {
    return state.cart.totalQuantity;
  });

  const notification = useSelector((state) => {
    return state.ui.notification;
  });

  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  };
  return (
    <nav className={`navbar ${classes["main-navbar"]} navbar-expand-lg`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img src={appIcon} className={classes["app-icon"]}></img>
          Food<span className="text-danger">App</span>
        </a>
        <button
          className={`navbar-toggler ${classes["menu-burger-button"]}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            className={classes["menu-burger-icon"]}
            src={menuBurgerIcon}
          ></img>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {notification && (
              <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
              ></Notification>
            )}
            <li className="nav-item px-2">
              <button
                type="button"
                className={`btn ${classes["shopping-cart-button"]} position-relative`}
                onClick={showCartHandler}
              >
                <img
                  className={classes["shopping-cart-icon"]}
                  src={shoppingCartIcon}
                ></img>
                Your Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartTotalQuantity}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
