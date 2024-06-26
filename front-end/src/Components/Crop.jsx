import Image from "../assets/cropimage.jpeg";
import { NavLink } from "react-router-dom";
function Crop() {
  return (
    <>
      <div className="container">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="content">
          <h3>Crop Recommendation</h3>
          <p>
            A crop recommendation system for websites utilizes data analytics
            and machine learning algorithms to suggest optimal crop choices
            based on factors such as soil quality, climate conditions, and
            historical yield data, enabling farmers to make informed decisions
            for maximizing agricultural productivity and sustainability.
          </p>
          <div className="custombtn">
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
      </div>
    </>
  );
}

export default Crop;
