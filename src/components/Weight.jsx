import { Link } from "react-router-dom";

function Weight() {
  return (
    <>
      <div className="relative mt-10 flex flex-col justify-center bg-[#c88f4c] rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pt-30 pb-5">
          <h2 className="absolute top-5 text-3xl md:text-4xl xl:text-6xl z-1 text-white">
            Lose weight
            <br />
            with a custom plan
          </h2>
          <video
            src="/media/weight-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-30 lg:top-40 left-0 z-0 pointer-events-none touch-action-none"
            style={{ PointerEvent: "none" }}
          />
          <div className="z-10 mt-42 sm:mt-75 md:mt-93 lg:mt-129 xl:mt-165 xl:mx-40">
            <div className="flex justify-center items-center gap-2">
              <Link to={"/weight-loss"}>
                <button className="bg-white hover:bg-gray-300/70 hover:backdrop-blur-lg cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                  Get started
                </button>
              </Link>
              <Link to={"/weight-loss"}>
                <button className="backdrop-blur hover:backdrop-blur-2xl border border-neutral-50/50 hover:border-neutral-50/10 text-white cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                  See if I'm eligible
                </button>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-2 lg:mt-10 px-4">
              <div className="bg-[#905a22] rounded-2xl flex flex-col justify-center items-center gap-6 w-full px-16 py-15 text-center lg:basis-1/2 lg:h-155">
                <h3 className="text-white text-4xl">
                  Moving in the
                  <br />
                  <span className="text-amber-300/90">right direction</span>
                  <video
                    src="/media/weight-phone.mp4"
                    autoPlay
                    muted
                    className="lg:max-w-70"
                  />
                </h3>
                <p className="text-sm font-medium text-white leading-4.5">
                  Get a personalized weight loss plan designed with one goal in
                  mind: helping you feel happy in your body.
                </p>
                <Link to={"/weight-loss"}>
                  <button className="bg-amber-950/30 hover:bg-amber-950/50 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                    Get results
                  </button>
                </Link>
              </div>
              <div className="bg-[#905a22] rounded-2xl w-full pt-15 text-center lg:basis-1/2 lg:h-155 flex flex-col justify-between">
                <div className="flex flex-col gap-6 px-16">
                  <h3 className="text-white text-4xl">
                    Eat healthy,
                    <br />
                    <span className="text-amber-300/90">get strong</span>
                  </h3>
                  <p className="text-sm font-medium text-white leading-4.5">
                    <span className="text-amber-300/90">
                      Find nutritional, protein-packed recipes
                    </span>{" "}
                    in the Hims app, to help you maintain muscle mass.
                  </p>
                  <Link to={"/weight-loss"}>
                    <button className="bg-amber-950/30 hover:bg-amber-950/50 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                      Get started
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/media/eating.png" className="rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="px-20 text-sm text-neutral-300/50 mt-6">
              Compounded products are not approved nor evaluated for safety,
              efficacy, or quality by the FDA. Paid testimonial. Results have
              not been independently verified. Individual results will vary.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weight;
