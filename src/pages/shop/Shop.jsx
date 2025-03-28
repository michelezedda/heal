import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ShopCard from "./ShopCard";
import medications from "../../data/medications";

function Shop() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 items-center justify-center mb-20">
        <h2 className="text-5xl mt-22 text-yellow-700">
          <span className="font-[DM_Serif_Display] text-black">heal</span> shop
        </h2>
        <p className="text-2xl mx-6">
          Enhance your well-being with expertly crafted health solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-x-8 2xl:gap-4 mt-4">
          {medications.map((medication) => (
            <div key={medication.id}>
              <ShopCard {...medication} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
