import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import emptyCart from "../icons/cart.png";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  const totalQuantity = useSelector((state) => {
    return state.cart.totalQuantity;
  });

  const totalAmount = useSelector((state) => {
    return state.cart.totalAmount;
  });

  const cartIsEmpty = cartItems.length === 0;

  const closeCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <React.Fragment>
      <Modal onClose={closeCartHandler}>
        <div className="row mt-2">
          <div className="col-lg-12">
            <div className="cart-list">
              <h2 className={classes["cart-heading"]}>Shopping Cart</h2>
              {cartIsEmpty && (
                <div className="text-center">
                  <img src={emptyCart} className={classes.emptycart}></img>
                  <p>Your cart is empty!</p>
                </div>
              )}
              <ul className="list-group">
                {cartItems.map((food) => {
                  return (
                    <CartItem
                      key={food.id}
                      item={{
                        id: food.id,
                        title: food.title,
                        price: food.price,
                        quantity: food.quantity,
                        total: food.totalPrice,
                      }}
                    ></CartItem>
                  );
                })}
              </ul>
              {!cartIsEmpty && (
                <div
                  className={`${classes["cart-summary"]} d-flex justify-content-between align-items-center mt-2`}
                >
                  <span className="badge secondary-badge">{`Total Quantity: ${totalQuantity}`}</span>
                  <span className="badge secondary-badge">{`Total Amount: Rs.${totalAmount.toFixed(
                    2
                  )}/-`}</span>
                </div>
              )}
              <div className="cartaction d-flex justify-content-center align-items-center mt-2">
                <button
                  className={classes.btngradclose}
                  onClick={closeCartHandler}
                >
                  Close
                </button>
                {!cartIsEmpty && (
                  <button className={classes.btngrad}>Order Now</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
