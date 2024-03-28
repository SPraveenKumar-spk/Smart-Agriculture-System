import styles from "../Styles/Fertilizer.module.css";
import { NavLink } from "react-router-dom";
import Image1 from "../assets/fertilizer2.png";
function Fertilizer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Fertilizer Recommendation</h3>
          <p>
            A fertilizer recommendation system for websites leverages agronomic
            data and machine learning algorithms to provide personalized
            suggestions on optimal fertilizer types, quantities, and application
            schedules tailored to specific crops and soil conditions, empowering
            farmers to enhance crop yields and minimize environmental impact
            through efficient nutrient management.
          </p>
          <div className={styles.btn}>
            <div>
              <NavLink to="/fertipredict">
                <button>Predict Now</button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/fertimore">
                {" "}
                <button>Know More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={Image1} />
        </div>
      </div>
    </>
  );
}

export default Fertilizer;
