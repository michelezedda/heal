import React from "react";

function Sex() {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-center">
        <div className="h-400 bg-gradient-to-b from-[#4e799a] via-[#4e799a] to-[#1d4968] rounded-2xl  text-center flex justify-center items-start pt-30">
          <h2 className="absolute top-5 text-3xl text-white">
            Bring out your best
            <br />
            in the bedroom
          </h2>
          <video
            src="/media/sex-vid.mp4"
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
                Is it right for me?
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-2">
              <div className="bg-[#1e4c6b] rounded-2xl flex gap-6 w-[97%] px-4 pt-15 pb-35 bg-[url(/media/sex-pills.png)] bg-no-repeat bg-cover text-start">
                <h3 className="text-white text-2xl">
                  Have longer, better sex <br />
                  with Rx + Climax Control
                </h3>
                <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                  Get results
                </button>
              </div>
              <div className="bg-[#1e4c6b] rounded-2xl w-[97%] pt-6 text-start bg-[url(/media/sex-couple.png)] bg-center bg-no-repeat bg-cover">
                <div className="flex flex-col px-4 pb-8 gap-6">
                  <h3 className="text-white text-2xl pb-10">
                    How do you want to
                    <br />
                    <span className="text-sky-700">improve your sex life?</span>
                  </h3>
                  <div className="flex flex-col justify-end items-end gap-1">
                    <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Get hard
                    </button>
                    <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Last longer
                    </button>
                    <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Staying hard
                    </button>
                    <button className="bg-sky-950/70 hover:bg-sky-950/90 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      All of the above
                    </button>
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
