import { useEffect, useState } from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function Hero() {
  const services = [
    "Better Sex",
    "Weight Loss",
    "Hair Regrowth",
    "Mental Health",
    "Skin care",
  ];

  const textColors = [
    "text-sky-800",
    "text-amber-800",
    "text-green-800",
    "text-red-800",
    "text-purple-800",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-20 px-4 xl:px-0 mx-auto max-w-screen-xl">
        <p className="text-5xl lg:text-7xl">
          <span
            className={`${textColors[currentIndex]} transition-colors duration-200`}
          >
            {services[currentIndex]}
          </span>{" "}
          <br />
          personalized to you
        </p>
        <p className="mt-4 text-xl lg:text-2xl">Customized care starts here</p>
        <div className="grid md:grid-cols-2 items-start mt-4 text-lg font-semibold duration-200 ease-in-out transition-all gap-2">
          {/* "Weight loss" button */}
          <Link to={"/weight-loss"}>
            <button className="group flex justify-between items-center py-6 px-4 bg-neutral-100 rounded-2xl w-full hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-200 hover:text-white duration-200 ease-in-out transition-all cursor-pointer">
              <div>
                Lose <span className="text-amber-800">weight</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/media/double1.png"
                  className="w-11 group-hover:hidden"
                />
                <img
                  src="/media/double2.png"
                  className="w-11 hidden group-hover:block"
                />
                <IoArrowForwardCircle size={30} className="text-black" />
              </div>
            </button>
          </Link>
          {/* "Mental health" button */}
          <Link to={"/mental-health"}>
            <button className="group flex justify-between items-center py-6 px-4 bg-neutral-100 rounded-2xl w-full hover:bg-gradient-to-r hover:from-red-700 hover:to-red-200 hover:text-white duration-200 ease-in-out transition-all cursor-pointer">
              <div>
                Tackle <span className="text-red-800">anxiety</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/media/white1.png"
                  className="w-12 group-hover:hidden"
                />
                <img
                  src="/media/white2.png"
                  className="w-12 hidden group-hover:block"
                />
                <IoArrowForwardCircle size={30} className="text-black" />
              </div>
            </button>
          </Link>
          {/* "Sexual health" button */}
          <Link to={"/sexual-health"}>
            <button className="group flex justify-between items-center py-6 px-4 bg-neutral-100 rounded-2xl w-full hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-200 hover:text-white duration-200 ease-in-out transition-all cursor-pointer">
              <div>
                Have better <span className="text-sky-800">sex</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/media/blue1.png"
                  className="w-16 group-hover:hidden"
                />
                <img
                  src="/media/blue2.png"
                  className="w-16 hidden group-hover:block"
                />
                <IoArrowForwardCircle size={30} className="text-black" />
              </div>
            </button>
          </Link>
          {/* "Hair regrowth" button */}
          <Link to={"/hair-regrowth"}>
            <button className="group flex justify-between items-center py-6 px-4 bg-neutral-100 rounded-2xl w-full hover:bg-gradient-to-r hover:from-green-700 hover:to-green-200 hover:text-white duration-200 ease-in-out transition-all cursor-pointer">
              <div>
                Regrow <span className="text-green-800">hair</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/media/green1.png"
                  className="w-10 group-hover:hidden"
                />
                <img
                  src="/media/green2.png"
                  className="w-10 hidden group-hover:block"
                />
                <IoArrowForwardCircle size={30} className="text-black" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
