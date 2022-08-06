import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import Pizza from "../icons/pizza.png";
import Burger from "../icons/burger.png";
import Biryani from "../icons/biryani.png";
import Wrap from "../icons/wrap.png";
import Deserts from "../icons/deserts.png";

import classes from "./FoodListItem.module.css";

const FoodListItem = (props) => {
  let foodIcon;
  const dispatch = useDispatch();

  const { id, title, description, price } = props;

  const foodTitle = title;

  switch (foodTitle) {
    case "Pizza":
      foodIcon = Pizza;
      break;

    case "Burger":
      foodIcon = Burger;
      break;

    case "Biryani":
      foodIcon = Biryani;
      break;

    case "Wraps":
      foodIcon = Wrap;
      break;

    case "Deserts":
      foodIcon = Deserts;
      break;
  }

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <img src={foodIcon} className={classes["food-icon"]}></img>
        <h4 className={classes["food-title"]}>{title}</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <span className={`${classes["food-price"]} success-badge`}>
          {`Rs.${price.toFixed(2)}/-`}
        </span>
        <button
          type="button"
          className={classes["add-to-cart-button"]}
          onClick={addToCartHandler}
        >
          Add
        </button>
      </div>
    </li>
  );
};

export default FoodListItem;
