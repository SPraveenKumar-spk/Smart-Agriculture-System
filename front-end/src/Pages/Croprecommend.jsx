import styles from "../Styles/croprecommend.module.css";
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
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
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
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Crop Recommendation System</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="nitrogen" style={{ fontWeight: "bold" }}>
                Nitrogen
              </label>
              <input
                type="number"
                id="nitrogen"
                name="nitrogen"
                placeholder="Enter Nitrogen"
                className="form-control"
                value={inputValue.nitrogen}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="phosphorous" style={{ fontWeight: "bold" }}>
                Phosphorus
              </label>
              <input
                type="number"
                id="phosphorous"
                name="phosphorous"
                placeholder="Enter Phosphorus"
                className="form-control"
                value={inputValue.phosphorous}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="potassium" style={{ fontWeight: "bold" }}>
                Potassium
              </label>
              <input
                type="number"
                id="potassium"
                name="potassium"
                placeholder="Enter Potassium"
                className="form-control"
                value={inputValue.potassium}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="temperature" style={{ fontWeight: "bold" }}>
                Temperature
              </label>
              <input
                type="number"
                step="0.01"
                id="temperature"
                name="temperature"
                placeholder="Enter Temperature in °C"
                className="form-control"
                value={inputValue.temperature}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="humidity" style={{ fontWeight: "bold" }}>
                Humidity
              </label>
              <input
                type="number"
                step="0.01"
                id="humidity"
                name="humidity"
                placeholder="Enter Humidity in %"
                className="form-control"
                value={inputValue.humidity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="ph" style={{ fontWeight: "bold" }}>
                pH
              </label>
              <input
                type="number"
                step="0.01"
                id="ph"
                name="ph"
                placeholder="Enter pH value"
                className="form-control"
                value={inputValue.ph}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <label htmlFor="rainfall" style={{ fontWeight: "bold" }}>
                Rainfall
              </label>
              <input
                type="number"
                step="0.01"
                id="rainfall"
                name="rainfall"
                placeholder="Enter Rainfall in mm"
                className="form-control"
                value={inputValue.rainfall}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className={styles.custombtn}>
              <button
                type="submit"
                className="btn btn-primary btn-lg align-center"
              >
                Get Recommendation
              </button>
            </div>
          </div>
        </form>
        <div className={styles.result}>
          {prediction && (
            <div>
              <h2>
                <span className={styles.span1}>Prediction</span> :{" "}
                <span className={styles.span2}>{prediction}</span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Croprecommend;
