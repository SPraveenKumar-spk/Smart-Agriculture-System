import Header from "./Header";
import Hero from "./Hero";
import Crop from "./Crop";
import Fertilizer from "./Fertilizer";
import Yield from "./Yield";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <Hero></Hero>
        <Crop />
        <Fertilizer />
        <Yield />
        <Footer />
      </div>
    </>
  );
}

export default Home;
