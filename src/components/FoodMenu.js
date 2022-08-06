import Pizza from "../icons/pizza.png";
import Burger from "../icons/burger.png";
import Biryani from "../icons/biryani.png";
import Wrap from "../icons/wrap.png";
import Deserts from "../icons/deserts.png";

import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
  return (
    <div className={`row ${classes["menu-container"]}`}>
      <div className="col-lg-12 p-3">
        <div className="d-flex justify-content-around align-items-center">
          <img src={Pizza} className={classes.pizza}></img>
          <img src={Burger} className={classes.burger}></img>
          <img src={Biryani} className={classes.biryani}></img>
          <img src={Wrap} className={classes.wrap}></img>
          <img src={Deserts} className={classes.deserts}></img>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
