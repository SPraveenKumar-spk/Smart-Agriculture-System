import styles from "../Styles/yieldpredict.module.css";
import Image from "../assets/yieldimage1.png";
import Image2 from "../assets/yieldimage2.png";
import { useState } from "react";
function YieldPredict() {
  const [inputValue, setInputValues] = useState({
    area: "",
    crop: "",
    rainfall: "",
    pesticides: "",
    temperature: "",
  });
  const [prediction, setPrediction] = useState("");
  const handleInputChange = (e) => {
    setInputValues({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/yield`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.yield);
      }
    } catch (error) {}
  };
  return (
    <>
      <h1 className={styles.heading}>Yield Prediction System</h1>
      <div className={styles.main}>
        <div className={styles.container}>
          <form className={styles.attributes} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="area">Area : </label>
              <select className={styles.choice} id="area" name="area">
                <option value="">Select a country</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Croatia">Croatia</option>
                <option value="Denmark">Denmark</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Libya">Libya</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mali">Mali</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Norway">Norway</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Peru">Peru</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Slovenia">Slovenia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Thailand">Thailand</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label htmlFor="crop">Crop : </label>
              <select className={styles.choice} id="crop" name="crop">
                <option value="">Select a crop</option>
                <option value="Maize">Maize</option>
                <option value="Potatoes">Potatoes</option>
                <option value="Rice, paddy">Rice, paddy</option>
                <option value="Sorghum">Sorghum</option>
                <option value="Soybeans">Soybeans</option>
                <option value="Wheat">Wheat</option>
                <option value="Cassava">Cassava</option>
                <option value="Sweet potatoes">Sweet potatoes</option>
                <option value="Plantains and others">
                  Plantains and others
                </option>
                <option value="Yams">Yams</option>
              </select>
            </div>
            <div>
              <label htmlFor="rainfall">Rainfall : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.humidity || ""}
                onChange={handleInputChange}
                name="rainfall"
                id="rainfall"
                placeholder="Enter rainfall value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="pesticides">Pesticides Tonnes : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.potassium || ""}
                onChange={handleInputChange}
                name="pesticides"
                id="pesticides"
                placeholder="Enter pesticides value"
                required
              ></input>
            </div>

            <div className={styles.btn}>
              <button>Predict</button>
            </div>
          </form>
          <div className={styles.result}>
            <div>
              <img className={styles.flower} src={Image2} />
            </div>
            <div>
              {prediction && (
                <div>
                  <h2>
                    <span className={styles.span1}>Prediction</span> :{" "}
                    <span className={styles.span2}>{prediction}</span>
                  </h2>
                </div>
              )}
            </div>
            <div>
              <img className={styles.tree} src={Image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YieldPredict;
