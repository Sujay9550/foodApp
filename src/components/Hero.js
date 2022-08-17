import heroImage from "../img/hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import * as classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`container ${classes["hero-container"]} mt-3`}>
      <div className="row">
        <div className="col-lg-8 p-3">
          <div className={`${classes["hero-image-container"]} text-center`}>
            <LazyLoadImage
              src={heroImage}
              effect="blur"
              height="350px"
              width="100%"
            ></LazyLoadImage>
          </div>
        </div>
        <div className="col-lg-4 p-3">
          <div className={classes["tagline-container"]}>
            <h1>Hungry????</h1>
            <h1>Order your</h1>
            <h1>favourite food</h1>
            <h1 className="fw-bold">Online!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
