function Weight() {
  return (
    <>
      <div className="relative mt-10 flex flex-col justify-center">
        <div className="h-400 bg-gradient-to-b from-[#c78e4b] via-[#c78d4b] to-[#aa5d06] rounded-2xl  text-center flex justify-center items-start pt-30">
          <h2 className="absolute top-5 text-3xl text-white">
            Lose weight
            <br />
            with a custom plan
          </h2>
          <video
            src="/media/weight-vid.mp4"
            autoPlay
            loop
            muted
            className="rounded-lg"
          />
          <div className="absolute top-85">
            <div className="flex justify-center items-center gap-2">
              <button className="bg-white hover:bg-gray-300/70 hover:backdrop-blur-lg cursor-pointer rounded-full py-2 px-6 duration-300">
                Get started
              </button>
              <button className="backdrop-blur-md hover:backdrop-blur-2xl border border-neutral-50/50 hover:border-neutral-50/10 text-white cursor-pointer rounded-full py-2 px-6 duration-300">
                See if I'm eligible
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-2">
              <div className="bg-[#905a22] rounded-2xl flex flex-col justify-center items-center gap-6 w-[97%] px-28 py-15 text-center">
                <h3 className="text-white text-4xl">
                  Moving in the
                  <br />
                  <span className="text-amber-300/90">right direction</span>
                  <video
                    src="/media/weight-phone.mp4"
                    autoPlay
                    muted
                    className="rounded-lg"
                  />
                </h3>
                <p className="text-sm font-medium text-white leading-4.5">
                  Get a personalized weight loss plan designed with one goal in
                  mind: helping you feel happy in your body.
                </p>
                <button className="bg-amber-950/30 hover:bg-amber-950/50 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                  Get results
                </button>
              </div>
              <div className="bg-[#905a22] rounded-2xl w-[97%] pt-15 text-center">
                <div className="flex flex-col justify-center items-center gap-6 px-22">
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
                  <button className="bg-amber-950/30 hover:bg-amber-950/50 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                    Get started
                  </button>
                </div>
                <img src="/media/eating.png" className="mt-10 rounded-2xl" />
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
