import styles from "../Styles/croprecommend.module.css";
import Image from "../assets/trees.png";
import Image2 from "../assets/flower.png";
import { useState } from "react";
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
      const response = await fetch(`http://localhost:5000/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.crop);
      }
    } catch (error) {}
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

export default Croprecommend;
