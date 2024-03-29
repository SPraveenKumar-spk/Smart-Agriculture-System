import styles from "../Styles/Fertipredic.module.css";
import Image from "../assets/fertimage2.png";
import Image2 from "../assets/fertiimage2.png";
import { useState } from "react";
function Fertipredict() {
  const [inputValue, setInputValues] = useState({
    temperature: "",
    humidity: "",
    moisture: "",
    soil: "",
    crop: "",
    nitrogen: "",
    potassium: "",
    phosphorous: "",
  });
  const [prediction, setPrediction] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(inputValue);
      const response = await fetch(`http://localhost:5000/api/fertilizer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.fertilizer);
      }
    } catch (error) {}
  };

  return (
    <>
      <div>
        <h1 className={styles.heading}>Fertilizer Recommendation System</h1>
        <div className={styles.container}>
          <form className={styles.attributes} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="temperature">Temperature : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.temperature || ""}
                onChange={handleInputChange}
                name="temperature"
                id="temperature"
                placeholder="Enter temperature value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="humidity">Humidity : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.humidity || ""}
                onChange={handleInputChange}
                name="humidity"
                id="humidity"
                placeholder="Enter humidity value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="moisture">Moisture : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.moisture || ""}
                onChange={handleInputChange}
                name="moisture"
                id="moisture"
                placeholder="Enter moisture value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="soil">Soil Type</label>
              <select
                className={styles.choice}
                id="soil"
                name="soil"
                onChange={handleInputChange}
              >
                <option value="">Select Soil Type</option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Clayey">Clayey</option>
              </select>
            </div>
            <div>
              <label htmlFor="crop">Crop Type</label>
              <select
                className={styles.choice}
                id="crop"
                name="crop"
                onChange={handleInputChange}
              >
                <option value="">Select a crop</option>
                <option value="Maize">Maize</option>
                <option value="Sugarcane">Sugarcane</option>
                <option value="Cotton">Cotton</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Barley">Barley</option>
                <option value="Wheat">Wheat</option>
                <option value="Millets">Millets</option>
                <option value="Oil seeds">Oil seeds</option>
                <option value="Pulses">Pulses</option>
                <option value="Ground Nuts">Ground Nuts</option>
              </select>
            </div>
            <div>
              <label htmlFor="nitrogen">Nitrogen : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.nitrogen || ""}
                onChange={handleInputChange}
                name="nitrogen"
                id="nitrogen"
                placeholder="Enter nitrogen value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="potassium">Potassium : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.potassium || ""}
                onChange={handleInputChange}
                name="potassium"
                id="potassium"
                placeholder="Enter potassium value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="phosphorous">Phosphorous : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.phosphorous || ""}
                onChange={handleInputChange}
                name="phosphorous"
                id="phosphorous"
                placeholder="Enter phosphorous value"
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

export default Fertipredict;
