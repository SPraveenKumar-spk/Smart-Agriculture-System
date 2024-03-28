import styles from "../Styles/Yield.module.css";
import { NavLink } from "react-router-dom";
import Image from "../assets/yield.jpg";
function Yield() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={Image} />
        </div>
        <div className={styles.content}>
          <h3>Yield Prediction</h3>
          <p>
            A yield prediction system for websites utilizes historical
            agricultural data, weather patterns, and machine learning models to
            forecast crop yields accurately. By analyzing various factors, it
            helps farmers make informed decisions regarding planting strategies,
            resource allocation, and market planning, ultimately optimizing
            agricultural productivity and profitability.
          </p>
          <div className={styles.btn}>
            <div>
              <NavLink to="/yieldpredict">
                <button>Predict Now</button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/yeildmore">
                <button>Know More</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yield;
