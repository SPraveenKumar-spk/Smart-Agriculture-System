import styles from "../Styles/croprecommend.module.css";
import Image from "../assets/trees.png";
import Image2 from "../assets/flower.png";
import { useState } from "react";
import axios from "axios";
function Croprecommend() {
  const [inputValue, setInputValues] = useState({
    nitrogen: "",
    phosphorous: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [prediction, setPrediction] = useState("");

  const handleInputChange = (e) => {
    setInputValues({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(inputValue);
      const response = await axios.post("/api/predict", inputValue);
      setPrediction(response.data);
    } catch (error) {
      console.error("Prediction failed: ", error);
      setPrediction(`An error occurred while predicting: ${error.toString()}`);
    }
  };

  return (
    <>
      <div>
        <h1 className={styles.heading}>Crop Recommendation System</h1>
        <div className={styles.container}>
          <form className={styles.attributes} onSubmit={handleSubmit}>
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
              <label htmlFor="ph">Ph Value : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.ph || ""}
                onChange={handleInputChange}
                name="ph"
                id="ph"
                placeholder="Enter ph value"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="rainfall">Rainfall : </label>
              <input
                className={styles.inputs}
                type="text"
                value={inputValue.rainfall || ""}
                onChange={handleInputChange}
                name="rainfall"
                id="rainfall"
                placeholder="Enter rainfall value"
                required
              ></input>
            </div>
            <div className={styles.btn}>
              <button>Predict</button>
            </div>
          </form>
          {prediction && (
            <div>
              <h2>Prediction:</h2>
              <p>{prediction}</p>
            </div>
          )}
          <img className={styles.flower} src={Image2}></img>
          <img className={styles.tree} src={Image}></img>
        </div>
      </div>
    </>
  );
}

export default Croprecommend;
