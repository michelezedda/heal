import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoAddCircle } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

function HairRegrowth() {
  const { scrollToTop } = useAppContext();
  const handleToast = () =>
    toast("Demo mode: where buttons look useful but aren't!");

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 flex flex-col gap-4 justify-center items-center mt-26">
          <h1 className="text-4xl lg:text-6xl text-green-800 text-center font-semibold">
            Hair regrowth made simple
          </h1>
          <p className="lg:text-2xl">
            Hair loss is{" "}
            <span className="text-green-800 font-medium">
              normal, and treatable
            </span>
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-start pb-5 gap-6">
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-[url(/media/hair-page-pic.png)] bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Your hair, your regrowth, your way
                  </h3>
                  <p className="text-center">
                    Get access to personalized treatments, experienced medical
                    providers, free shipping, and more.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link to={"/shop"}>
                    <button className="bg-green-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-green-900 hover:backdrop-blur-lg text-lg active:scale-98">
                      See all treatments
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-[url(/media/green-sheet.png)] bg-cover bg-no-repeat bg-center rounded-2xl p-4 flex flex-col items-center justify-between h-140">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4 text-white">
                    Trusted ingredients: <br />
                    <strong className="text-green-500">minoxidil</strong> and
                    <strong className="text-green-500"> finasteride</strong>
                  </h3>
                  <ul className="flex flex-col gap-6  text-white">
                    <li className="flex items-center gap-2">
                      <IoAddCircle size={30} /> 90% saw reduced shedding or
                      increased regrowth using finasteride.*
                    </li>
                    <li className="flex items-center gap-2">
                      <IoAddCircle size={30} /> 4/5 Experienced significant
                      improvement in hair loss when using minoxidil.**
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg text-lg active:scale-98 w-full"
                    onClick={handleToast}
                  >
                    Get started
                  </button>
                  <p className="text-gray-400">
                    *Based on long-term (10-year) clinical study observing 523
                    men with androgenetic alopecia using oral finasteride.
                    **Source: Beach, Renée A. et al. ""Low-dose oral minoxidil
                    for treating alopecia: A 3-year North American retrospective
                    case series"" J. of the American Academy of Dermatology.
                  </p>
                </div>
              </div>
              <div className="bg-[url(/media/touching-hair.png)] bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Hair loss treatment that’s suited to you
                  </h3>
                  <ul className="flex flex-col gap-6">
                    <li className="flex items-center gap-2">
                      <MdVerified size={24} /> Regrow hair in as few as 3-6
                      months*
                    </li>
                    <li className="flex items-center gap-2">
                      <MdVerified size={24} /> Doctor-trusted ingredients
                    </li>
                    <li className="flex items-center gap-2">
                      <MdVerified size={24} /> 100% online process, unlimited
                      provider support
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 justify-end">
                  <button
                    className="bg-green-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-green-900 hover:backdrop-blur-lg text-lg active:scale-98"
                    onClick={handleToast}
                  >
                    Take the free hair quiz
                  </button>
                  <p className="text-gray-200">
                    Prescription products require an online review by a licensed
                    provider. Restrictions apply. Results and prices vary.{" "}
                    <br />
                    *Based on separate individual studies of topical minoxidil
                    and oral finasteride. Prescription products require an
                    online consultation with a licensed provider. The quiz is
                    not a medical assessment.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="treatments"
              className="bg-green-900 w-full text-white rounded-2xl p-4 flex flex-col gap-4 lg:mt-30"
            >
              {/* Hair loss treatments */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/hair-creme.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Hair loss treatments
                  </h4>
                  <p className="text-lg text-neutral-600">
                    More care for your hair
                  </p>
                </div>
                <div>
                  <Link to={"/shop"}>
                    <button className="bg-green-700/50 text-black hover:text-white translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-green-800 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                      See options
                    </button>
                  </Link>
                </div>
              </div>
              {/* Results */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/happiness.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Thousands of you are loving their results
                  </h4>
                </div>
                <div>
                  <button
                    className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full"
                    onClick={handleToast}
                  >
                    Start now
                  </button>
                </div>
              </div>
              {/* How it works */}
              <div className="flex flex-col justify-between p-4 h-130 rounded-2xl bg-green-200 bg-center bg-no-repeat bg-cover">
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    How it works
                  </h4>
                  <ol className="flex flex-col gap-2 text-black list-decimal">
                    <li className="flex flex-col">
                      <strong>Take the free hair quiz</strong> Tell us a bit
                      about your hair needs, routine, and goals for treatment.
                    </li>
                    <li className="flex flex-col">
                      <strong>Intake & assessment</strong> Provide some
                      information about your health history and a medical
                      professional will determine what’s right for you.
                    </li>
                    <li className="flex flex-col">
                      <strong>Free delivery</strong> Your hair loss treatment
                      ships to you for free, if prescribed.
                    </li>
                    <li className="flex flex-col">
                      <strong>Ongoing support</strong> Get unlimited access to
                      follow-ups, adjustments, and answers to your questions
                      throughout your treatment.
                    </li>
                  </ol>
                </div>
                <div>
                  <button
                    className="bg-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-black/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full"
                    onClick={handleToast}
                  >
                    Take the first step
                  </button>
                </div>
              </div>
              {/* Satisfaction */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/hair-treatment.png)] bg-center bg-no-repeat bg-cover">
                <div className="text-center">
                  <h4 className="text-8xl text-green-950 mb-2 font-bold">
                    90%
                  </h4>
                  <p className="text-lg text-green-50">
                    of heal users are satisfied with their treatment
                  </p>
                </div>
                <div>
                  <Link to={"/shop"}>
                    <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                      Get started today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  );
}

export default HairRegrowth;
