import Home from "./Components/Home";
import Croprecommend from "./Pages/Croprecommend";
import Fertipredict from "./Pages/Fertipredict";
import YieldPredict from "./Pages/YieldPredict";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/croprecommend" element={<Croprecommend />} />
          <Route path="/Fertipredict" element={<Fertipredict />} />
          <Route path="/YieldPredict" element={<YieldPredict />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
