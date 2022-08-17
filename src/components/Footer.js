import * as classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes["footer-container"]} mt-3 text-center`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-3">
            <p className={`${classes["copyright-author"]} text-secondary mb-0`}>
              Copyright &copy;
              <span id="year"> {new Date().getFullYear()} </span>
              <span>
                Designed & Developed by
                <span className="text-warning"> Sujay</span>
              </span>
            </p>
            <p className={`${classes.credits} text-secondary mb-0`}>
              Icons & Images Credits -
              <a
                href="https://www.flaticon.com/icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Flaticon
              </a>
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
