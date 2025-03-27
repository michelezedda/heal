import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function MentalHealth() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 flex flex-col gap-4 justify-center items-center mt-26">
          <h1 className="text-4xl lg:text-6xl text-red-800 text-center font-semibold">
            Start your mental health assessment
          </h1>
          <p className="lg:text-2xl lg:mx-10 xl:mx-26">
            <span className="text-black font-medium">Feel better soon.</span> Go
            beyond traditional mental health services with treatment specific to
            your symptoms from a licensed provider, 100% online.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-start pb-5 gap-6">
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-[url(/media/anxiety-page-pic.png)] bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4 text-red-900">
                    Let the pros make a plan
                  </h3>
                  <p className="text-black text-center">
                    Whatever you're going through, they tailor treatment to you.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#treatments"
                    className="bg-red-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-red-900 hover:backdrop-blur-lg text-lg active:scale-98"
                  >
                    See all treatments
                  </a>
                </div>
              </div>
              <div className="bg-red-900 bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 pt-0 flex flex-col items-center justify-between h-140">
                <img src={"/media/pills.png"} className="w-50" />
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4">
                    Medications psychiatrists trust
                  </h3>
                  <p className="text-center">
                    Try a free consultation to see if it might be right for you.
                  </p>
                  <div className="flex justify-end">
                    <Link to={"/shop"} className="w-full">
                      <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full my-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg text-lg active:scale-98 w-full">
                        All medications
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[url(/media/find-us.png)] bg-cover bg-no-repeat bg-center text-white rounded-2xl p-4 flex flex-col justify-between h-160">
                <div>
                  <h3 className="text-center font-medium text-4xl mb-4 text-red-900">
                    You know where to find us
                  </h3>
                  <p className="text-black text-center">
                    No phone calls, no waiting, no insurance providers—we're
                    here whenever you're ready.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#treatments"
                    className="bg-red-900/80 text-white translate-transform ease-in-out duration-300 p-4 rounded-full mt-4 cursor-pointer hover:bg-red-900 hover:backdrop-blur-lg text-lg active:scale-98"
                  >
                    Start your visit
                  </a>
                </div>
              </div>
            </div>
            <div
              id="treatments"
              className="bg-red-900 w-full text-white rounded-2xl p-4 flex flex-col gap-4"
            >
              {/* Treatment options */}
              <div className="flex flex-col p-4 h-100 rounded-2xl bg-[url(/media/anxiety-treatments.png)] bg-center bg-no-repeat bg-cover text-black">
                <div>
                  <h3 className="font-medium text-2xl mb-2">
                    Treatment options
                  </h3>
                  <p className="sm:w-1/2">
                    Medications psychiatrists trust. Try a free consultation to
                    see if it might be right for you.
                  </p>
                </div>
              </div>
              {/* Anxiety & depression */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/anxiety-depression.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Anxiety & depression
                  </h4>
                  <p className="text-lg text-neutral-600">
                    Not feeling like yourself? It could be anxiety or depression
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Start a consultation
                  </button>
                </div>
              </div>
              {/* Sleep trouble */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/sleep-trouble.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Sleep trouble
                  </h4>
                  <p className="text-lg text-neutral-600">
                    Your mental health affects more than you think
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Start a consultation
                  </button>
                </div>
              </div>
              {/* Burnout & job stress */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/burnout-stress.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Burnout & job stress
                  </h4>
                  <p className="text-lg text-neutral-600">
                    It's been on the rise lately, and treatment can help
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Start a consultation
                  </button>
                </div>
              </div>
              {/* Major life events */}
              <div className="flex flex-col justify-between p-4 h-100 rounded-2xl bg-[url(/media/major-events.png)] bg-center bg-no-repeat bg-cover">
                <div>
                  <h4 className="text-2xl text-neutral-950 mb-2">
                    Major life events
                  </h4>
                  <p className="text-lg text-neutral-600">
                    Whatever it is, you don't have to go through it alone
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black translate-transform ease-in-out duration-300 p-3 rounded-full mt-4 cursor-pointer hover:bg-white/70 hover:backdrop-blur-lg font-medium text-lg active:scale-98 w-full">
                    Start a consultation
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

export default MentalHealth;
