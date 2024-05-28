import Image from "../assets/cropdisease.png";
import { NavLink } from "react-router-dom";
export default function CropDisease() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="content">
          <h3>Crop Disease Detection</h3>
          <p>
            Crop disease detection involves the use of various technologies,
            such as image processing and machine learning, to identify and
            diagnose diseases in plants at an early stage. This approach helps
            farmers take timely and effective measures to protect their crops,
            leading to improved yield and reduced losses. Advanced techniques
            include the use of drones and smartphones for real-time monitoring
            and analysis.
          </p>
          <div className="btn">
            <div>
              <NavLink to="/croprecommend">
                <button>Predict Now</button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/cropmore">
                {" "}
                <button>Know More</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Image} />
        </div>
      </div>
    </>
  );
}
