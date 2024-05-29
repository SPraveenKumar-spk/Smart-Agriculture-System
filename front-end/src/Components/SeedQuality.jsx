import Image from "../assets/seedQuality.jpg";
import { NavLink } from "react-router-dom";
export default function SeedQuality() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="content">
          <h3>Seed Quality Detection</h3>
          <p>
            Seed quality detection involves assessing the viability, purity, and
            health of seeds using techniques like genetic analysis, imaging, and
            machine learning. This ensures that only the best seeds are used for
            planting, leading to higher germination rates, better crop yields,
            and reduced risk of disease.
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
        <div className="image">
          <img src={Image} />
        </div>
      </div>
    </>
  );
}
