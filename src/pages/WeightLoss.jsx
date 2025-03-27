import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function WeightLoss() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [pounds, setPounds] = useState("");
  const [BMI, setBMI] = useState(null);
  const { scrollToTop } = useAppContext();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleFeet = (e) => {
    setFeet(e.target.value);
  };
  const handleInches = (e) => {
    setInches(e.target.value);
  };
  const handlePounds = (e) => {
    setPounds(e.target.value);
  };

  const calculateBMI = () => {
    const feetNum = Number(feet);
    const inchesNum = Number(inches);
    const poundsNum = Number(pounds);

    const totalInches = feetNum * 12 + inchesNum;
    const bmi = (poundsNum * 703) / totalInches ** 2;
    setBMI(bmi.toFixed(1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 flex flex-col gap-4 justify-center items-center mt-26">
          <h1 className="text-4xl lg:text-6xl text-amber-800 text-center font-semibold">
            It's more than a plan, <br />
            it's personal
          </h1>
          <p className="lg:text-2xl">
            A provider licensed in your state will review your information, so
            that they can combine guidance on nutrition, activity, sleep, and
            more into a plan designed around your body's needs.
          </p>
          <div className="flex flex-col justify-center items-start pb-5 gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Lose weight */}
              <div className="bg-[url(/media/weight-page-pic.png)] bg-cover bg-no-repeat bg-center w-full lg:w-1/2 text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Lose up to 20% your bodyweight
                  </h3>
                  <p>
                    People lost an average of 15% (up to 20%) bodyweight in a
                    68-week clinical trial study of semaglutide*
                  </p>
                </div>
                <div className="flex flex-col">
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-gray-300/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98">
                    Start a consultation
                  </button>
                  <p className="text-center text-sm text-neutral-300 mt-4">
                    *Along with a reduced calorie diet and increased exercise.
                    In a 68-week clinical study of semaglutide, about 1 in 3
                    adults with obesity or with overweight and weight-related
                    medical problems achieved 20% weight loss. Average weight
                    loss achieved was 15%. semaglutide is a registered trademark
                    of Novo Nordisk A/S.
                  </p>
                </div>
              </div>
              {/* BMI */}
              <div className="lg:w-1/2 bg-amber-900 w-full text-white rounded-2xl p-4">
                <h3 className="text-center font-medium text-2xl mb-4">
                  See how much you could lose: <br /> check your BMI now!
                </h3>
                <p>
                  BMI stands for Body Mass Index. It’s a measurement that uses
                  your height and weight to estimate if your weight is in a
                  healthy range for your height.
                </p>
                <form
                  className="flex flex-col gap-2 mt-6"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="height">Height</label>
                  <div className="flex mb-2 gap-2">
                    <input
                      type="number"
                      placeholder="feet"
                      className="border-2 rounded-lg p-4 border-amber-600 hover:border-white duration-300 w-1/2"
                      min="0"
                      step="1"
                      required
                      value={feet}
                      onChange={handleFeet}
                    />
                    <input
                      type="number"
                      placeholder="inches"
                      className="border-2 rounded-lg p-4 border-amber-600 hover:border-white duration-300 w-1/2"
                      min="0"
                      step="1"
                      required
                      value={inches}
                      onChange={handleInches}
                    />
                  </div>
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="number"
                    placeholder="pounds"
                    className="border-2 rounded-lg p-4 border-amber-600 hover:border-white duration-300 w-full"
                    min="0"
                    step="1"
                    required
                    value={pounds}
                    onChange={handlePounds}
                  />
                  <button className="bg-amber-700 hover:bg-white translate-transform ease-in-out duration-300 p-4 rounded-2xl mt-4 cursor-pointer hover:text-amber-700 font-medium text-xl active:scale-98">
                    Calculate
                  </button>
                </form>
                {BMI && (
                  <div className="border-amber-700 bg-amber-950 border-2 rounded-lg mt-6 p-4 flex flex-col">
                    <p className="text-2xl text-center">
                      Your BMI is{" "}
                      <strong className="ml-2 text-3xl">{BMI}</strong>
                    </p>
                    <div className="flex flex-col mt-4">
                      <div
                        className={`flex justify-evenly items-center p-4 ${
                          BMI < 18.5 &&
                          "bg-amber-200/50 animate-pulse rounded-2xl text-black font-medium"
                        }`}
                      >
                        <span>Underweight</span>
                        <span>{"< 18.5"}</span>
                      </div>
                      <div
                        className={`flex justify-evenly items-center p-4 ${
                          BMI >= 18.5 &&
                          BMI <= 24.9 &&
                          "bg-amber-200/50 animate-pulse rounded-2xl text-black font-medium"
                        }`}
                      >
                        <span>Healthy Weight</span>
                        <span>18.5 - 24.9</span>
                      </div>
                      <div
                        className={`flex justify-evenly items-center p-4 ${
                          BMI >= 25 &&
                          BMI <= 29.9 &&
                          "bg-amber-200/50 animate-pulse rounded-2xl text-black font-medium"
                        }`}
                      >
                        <span>Overweight</span> <span>25 - 29.9</span>
                      </div>
                      <div
                        className={`flex justify-evenly items-center p-4 ${
                          BMI > 30 &&
                          "bg-amber-200/50 animate-pulse rounded-2xl text-black font-medium"
                        }`}
                      >
                        <span>Obesity</span>
                        <span>{"> 30"}</span>
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-center text-sm text-neutral-400 mt-4">
                  BMI does not measure body composition directly, and it may not
                  accurately reflect the health or wellness of individuals of a
                  specific race/ethnic group, those with high muscle mass,
                  pregnant women, children, the elderly, or those with specific
                  health conditions. BMI should not be used as a sole diagnostic
                  tool. The BMI calculator does not determine eligibility for
                  any weight loss medications or treatments provided via the
                  Hims/Hers platform. Consultation with a healthcare provider is
                  required to assess suitability for any medical treatment based
                  on individual health and medical history. BMI may not be
                  accurate for children, pregnant women, or older adults.
                </p>
              </div>
            </div>
            {/* Weight Loss treatments */}
            <div className="flex flex-col justify-between p-4 h-150 rounded-2xl bg-[url(/media/brown-pills.png)] bg-center bg-no-repeat bg-cover w-full text-white">
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl mb-2 font-bold">
                  Weight loss treatment for{" "}
                  <span className="text-amber-400">where you are now</span>
                </h4>
                <p className="text-lg md:text-2xl">
                  Doctor-trusted weight loss treatment options
                </p>
              </div>
              <ul className="flex flex-col gap-2 md:text-2xl w-3/4">
                <li className="flex items-center gap-2">
                  <IoAddCircle /> Personalized, doctor-trusted treatment plans
                </li>
                <li className="flex items-center gap-2">
                  <IoAddCircle /> Prescription treatment tailored to your needs
                  for long-term results
                </li>
                <li className="flex items-center gap-2">
                  <IoAddCircle />
                  Answers to questions and ongoing care, 100% online
                </li>
              </ul>
              <div>
                <Link to={"/shop"}>
                  <button className="bg-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-black/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Get started
                  </button>
                </Link>
                <button className="bg-white text-black hover:text-white translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-black hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                  See if treatment is right for me
                </button>
              </div>
            </div>
            {/* Meal replacement */}
            <div className="flex flex-col justify-between p-4 h-120 rounded-2xl bg-[url(/media/protein-bar.png)] bg-[90%_50%] bg-no-repeat bg-cover w-full text-white">
              <div className="text-center">
                <h4 className="text-2xl md:text-4xl mb-2 font-bold">
                  Meal replacement kits{" "}
                  <span className="text-amber-400">for weight loss</span>
                </h4>
                <p className="text-xl text-start w-2/3 md:text-2xl mt-10">
                  Fuel your weight loss journey with doctor-recommended meal
                  replacement bars and shakes to provide your body with
                  essential nutrients to help you reach your goal.
                </p>
              </div>
              <div>
                <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WeightLoss;
