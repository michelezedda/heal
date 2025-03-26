import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Weight from "./components/Weight";
import Anxiety from "./components/Anxiety";
import Sex from "./components/Sex";
import Hair from "./components/Hair";
import Skincare from "./components/Skincare";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl">
        <Hero />
        <Weight />
        <Anxiety />
        <Sex />
        <Hair />
        <Skincare />
      </div>
      <Footer />
    </>
  );
}

export default Home;
