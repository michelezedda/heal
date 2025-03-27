import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Weight from "./components/Weight";
import Anxiety from "./components/Anxiety";
import Sex from "./components/Sex";
import Hair from "./components/Hair";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto max-w-screen-2xl">
        <Weight />
        <Anxiety />
        <Sex />
        <Hair />
      </div>
      <Footer />
    </>
  );
}

export default Home;
