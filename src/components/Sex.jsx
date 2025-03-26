import { Link } from "react-router-dom";

function Sex() {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-center bg-gradient-to-b from-[#4e799a] via-[#4e799a] to-[#1d4968] rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pt-30 pb-5">
          <h2 className="absolute top-5 text-3xl md:text-5xl xl:text-6xl z-1 text-white">
            Bring out your best
            <br />
            in the bedroom
          </h2>
          <video
            src="/media/sex-vid.mp4"
            autoPlay
            loop
            muted
            className="absolute top-30 left-0 z-0 pointer-events-none touch-action-none"
          />
          <div className="z-10 mt-42 sm:mt-75 md:mt-93 lg:mt-129 xl:mt-165">
            <div className="flex justify-center items-center gap-2">
              <Link to={"/sexual-health"}>
                <button className="bg-white hover:bg-gray-300/70 hover:backdrop-blur-lg cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                  Get started
                </button>
              </Link>
              <Link to={"/sexual-health"}>
                <button className="backdrop-blur-md hover:backdrop-blur-2xl border border-neutral-50/50 hover:border-neutral-50/10 text-white cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                  Is it right for me?
                </button>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center gap-2 mt-2 px-4">
              <div className="bg-[#143c57] rounded-2xl flex flex-col items-start gap-6 w-full px-4 pt-15 pb-35 bg-[url(/media/sex-pills.png)] bg-top lg:bg-bottom bg-no-repeat text-start lg:basis-1/2 lg:h-155">
                <h3 className="text-white text-2xl md:text-4xl">
                  Have longer, better sex <br />
                  with Rx + Climax Control
                </h3>
                <Link to={"/sexual-health"}>
                  <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                    Get results
                  </button>
                </Link>
              </div>
              <div className="rounded-2xl w-full pt-6 text-start bg-[url(/media/sex-couple.png)] bg-center bg-no-repeat bg-cover lg:basis-1/2 lg:h-155">
                <div className="flex flex-col px-4 pb-8 gap-6 h-full justify-between">
                  <h3 className="text-white text-2xl md:text-4xl pb-10">
                    How do you want to
                    <br />
                    <span className="text-sky-700">improve your sex life?</span>
                  </h3>
                  <div className="flex flex-col items-end gap-1">
                    <Link to={"/sexual-health"}>
                      <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                        Get hard
                      </button>
                    </Link>
                    <Link to={"/sexual-health"}>
                      <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                        Last longer
                      </button>
                    </Link>
                    <Link to={"/sexual-health"}>
                      <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                        Staying hard
                      </button>
                    </Link>
                    <Link to={"/sexual-health"}>
                      <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                        All of the above
                      </button>
                    </Link>
                  </div>
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

export default Sex;
