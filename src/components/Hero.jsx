import { useEffect, useState } from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

// Button configuration map
const buttonConfig = {
  weightLoss: {
    to: "/weight-loss",
    text1: "Lose ",
    text2: "weight",
    textClass: "text-amber-800",
    img: "/media/double2.png",
    imgHidden: "/media/double1.png",
    gradientFrom: "from-amber-700",
    gradientTo: "to-amber-200",
  },
  mentalHealth: {
    to: "/mental-health",
    text1: "Tackle ",
    text2: "anxiety",
    textClass: "text-red-800",
    img: "/media/white2.png",
    imgHidden: "/media/white1.png",
    gradientFrom: "from-red-700",
    gradientTo: "to-red-200",
  },
  sexualHealth: {
    to: "/sexual-health",
    text1: "Have better ",
    text2: "sex",
    textClass: "text-sky-800",
    img: "/media/blue2.png",
    imgHidden: "/media/blue1.png",
    gradientFrom: "from-sky-700",
    gradientTo: "to-sky-200",
  },
  hairRegrowth: {
    to: "/hair-regrowth",
    text1: "Regrow ",
    text2: "hair",
    textClass: "text-green-800",
    img: "/media/green2.png",
    imgHidden: "/media/green1.png",
    gradientFrom: "from-green-700",
    gradientTo: "to-green-200",
  },
};

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
    <div className="mt-20 px-4 xl:px-0 mx-auto max-w-screen-xl">
      <p className="text-5xl lg:text-7xl">
        <span
          className={`${textColors[currentIndex]} transition-colors duration-400`}
        >
          {services[currentIndex]}
        </span>{" "}
        <br />
        personalized to you
      </p>
      <p className="mt-4 text-xl lg:text-2xl">Customized care starts here</p>
      <div className="grid md:grid-cols-2 items-start mt-4 text-lg font-semibold duration-200 ease-in-out transition-all gap-2">
        {Object.entries(buttonConfig).map(([key, config]) => (
          <Link to={config.to} key={key}>
            <HeroButton config={config} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hero;

export function HeroButton({ config }) {
  const { text1, text2, textClass, img, imgHidden, gradientFrom, gradientTo } =
    config;

  return (
    <button
      className={`group flex justify-between items-center py-6 px-4 bg-neutral-100 rounded-2xl w-full hover:bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:text-white duration-300 ease-in-out transition-all cursor-pointer`}
    >
      <div>
        {text1}
        <span className={textClass}>{text2}</span>
      </div>
      <div className="flex gap-3">
        <img src={imgHidden} className="w-max h-8 group-hover:hidden" />
        <img
          src={img}
          alt={text1 + text2}
          className="w-max h-8 hidden group-hover:block"
        />
        <IoArrowForwardCircle size={30} className="text-black" />
      </div>
    </button>
  );
}
