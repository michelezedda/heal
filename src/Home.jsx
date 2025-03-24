import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Weight from "./components/Weight";
import Sex from "./components/Sex";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl">
        <Hero />
        <Weight />
        <Sex />
      </div>
      <Footer />
    </>
  );
}

export default Home;
