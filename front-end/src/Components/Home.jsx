import Header from "./Header";
import Hero from "./Hero";
import Crop from "./Crop";
import Fertilizer from "./Fertilizer";
import Yield from "./Yield";
import Footer from "./Footer";
import SeedQuality from "./SeedQuality";
import CropDisease from "./CropDisease";
function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <Hero></Hero>
        <Crop />
        <Fertilizer />
        <SeedQuality />
        <CropDisease />
        <Yield />
        <Footer />
      </div>
    </>
  );
}

export default Home;
