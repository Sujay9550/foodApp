import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import foodImage from "../img/food.jpg";

import classes from "./FoodList.module.css";

import FoodListItem from "./FoodListItem";

const FoodList = () => {
  const FOOD_DATA = [
    {
      id: "f1",
      title: "Pizza",
      description: "This is a first food",
      price: 200,
    },

    {
      id: "f2",
      title: "Burger",
      description: "This is a second food",
      price: 100,
    },

    {
      id: "f3",
      title: "Biryani",
      description: "This is a third food",
      price: 120,
    },

    {
      id: "f4",
      title: "Wraps",
      description: "This is a fourth food",
      price: 80,
    },

    {
      id: "f5",
      title: "Deserts",
      description: "This is a fifth food",
      price: 60,
    },
  ];
  return (
    <div className={`row mt-2 ${classes["food-list-container"]}`}>
      <div className="col-lg-4 p-3">
        <div className={`${classes["food-image-container"]} text-center`}>
          <LazyLoadImage src={foodImage} effect="blur"></LazyLoadImage>
        </div>
      </div>
      <div className="col-lg-8 p-3">
        <div className="food-list">
          <ul className="list-group">
            {FOOD_DATA.map((food) => {
              return (
                <FoodListItem
                  key={food.id}
                  id={food.id}
                  title={food.title}
                  description={food.description}
                  price={food.price}
                ></FoodListItem>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
