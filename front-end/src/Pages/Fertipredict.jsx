import styles from "../Styles/Fertipredict.module.css";
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
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Fertilizer Recommendation System</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="temperature" style={{ fontWeight: "bold" }}>
                Temperature
              </label>
              <input
                type="number"
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
              <label htmlFor="moisture" style={{ fontWeight: "bold" }}>
                Moisture
              </label>
              <input
                type="number"
                id="moisture"
                name="moisture"
                placeholder="Enter Moisture"
                className="form-control"
                value={inputValue.moisture}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="soil" style={{ fontWeight: "bold" }}>
                Soil Type
              </label>
              <select
                className="form-control"
                id="soil"
                name="soil"
                onChange={handleInputChange}
                value={inputValue.soil}
                required
              >
                <option value="">Select Soil Type</option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Clayey">Clayey</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="crop" style={{ fontWeight: "bold" }}>
                Crop Type
              </label>
              <select
                className="form-control"
                id="crop"
                name="crop"
                onChange={handleInputChange}
                value={inputValue.crop}
                required
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

            <div className="row mt-4">
              <div className={styles.custombtn}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg align-center"
                >
                  Predict
                </button>
              </div>
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

export default Fertipredict;
