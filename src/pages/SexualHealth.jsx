import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

function SexualHealth() {
  const { scrollToTop } = useAppContext();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 flex flex-col gap-4 justify-center items-center mt-26">
          <h1 className="text-4xl lg:text-6xl text-sky-800 text-center font-semibold">
            Sex. Let's talk about it.
          </h1>
          <p className="lg:text-2xl">
            <span className="text-sky-800 font-medium">heal makes</span> sexual
            health better than ever.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-start pb-5 gap-6">
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-[url(/media/sex-page-pic.png)] bg-cover bg-no-repeat bg-center rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4 text-sky-200">
                    100% secure online process with licensed providers.
                  </h3>
                  <p className="text-white text-center">
                    Get access to personalized treatments, experienced medical
                    providers, free shipping, and more.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#treatments"
                    className="bg-sky-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-sky-900 hover:backdrop-blur-lg text-lg active:scale-98"
                  >
                    See all treatments
                  </a>
                </div>
              </div>
              <div className="bg-[url(/media/hand-pills.png)] bg-cover bg-no-repeat bg-center text-black rounded-2xl p-4 flex flex-col items-center justify-between h-140">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Get hard & stay hard anytime the mood strikes
                  </h3>
                  <p className="text-center">
                    Once-daily options for spontaneous sex.
                  </p>
                </div>
                <Link to={"/shop"} className="w-full">
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg text-lg active:scale-98 w-full">
                    All medications
                  </button>
                </Link>
              </div>
              <div className="bg-[url(/media/couple.png)] bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Plan ahead with ED pills taken before sex
                  </h3>
                  <p className=" text-center">
                    Medications taken in the moment.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-sky-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-sky-900 hover:backdrop-blur-lg text-lg active:scale-98">
                    See if before sex meds are right for me
                  </button>
                </div>
              </div>
            </div>
            <div
              id="treatments"
              className="bg-sky-900 w-full text-white rounded-2xl p-4 flex flex-col gap-4"
            >
              {/* Condoms & Lube */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/condoms.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Condoms & Lube
                  </h4>
                  <p className="text-lg text-neutral-600">
                    Sensationally smooth and safe
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    See options
                  </button>
                </div>
              </div>
              {/* Sex Toys & Vibrators */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/box.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Sex Toys & Vibrators
                  </h4>
                  <p className="text-lg text-neutral-600">
                    More fun for everyone
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    See options
                  </button>
                </div>
              </div>
              {/* Satisfaction */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/bed-fun.png)] bg-center bg-no-repeat bg-cover">
                <div className="text-center">
                  <h4 className="text-8xl text-sky-700 mb-2 font-bold">90%</h4>
                  <p className="text-lg text-neutral-950">
                    of heal users are satisfied with their treatment
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Get started today
                  </button>
                </div>
              </div>
              {/* Sexual wellness */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-sky-200 bg-center bg-no-repeat bg-cover">
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Sexual wellness, <br />
                    <span className="text-sky-950">your way</span>
                  </h4>
                  <ul className="flex flex-col gap-2 text-black">
                    <li className="flex items-center gap-2">
                      <IoAddCircle /> Medical providers experienced in sexual
                      health
                    </li>
                    <li className="flex items-center gap-2">
                      <IoAddCircle /> Doctor-trusted treatment options
                    </li>
                    <li className="flex items-center gap-2">
                      <IoAddCircle /> Thousands of satisfied customers—and
                      partners
                    </li>
                  </ul>
                </div>
                <div>
                  <button className="bg-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-black/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Get started
                  </button>
                  <button className="bg-white text-black hover:text-white translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-black hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    See if treatment is right for me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SexualHealth;
