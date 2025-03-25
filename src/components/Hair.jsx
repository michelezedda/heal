import React from "react";

function Hair() {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-center bg-gradient-to-b from-[#adac53] via-[#adac53] to-[#63600d] rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pt-30 pb-5">
          <h2 className="absolute top-5 text-3xl md:text-5xl xl:text-6xl z-1 text-white">
            Your hair, your regrowth,
            <br />
            your way
          </h2>
          <video
            src="/media/hair-vid.mp4"
            autoPlay
            loop
            muted
            className="absolute top-30 left-0 z-0"
          />
          <div className="z-10 mt-55 sm:mt-75 md:mt-93 lg:mt-129 xl:mt-165">
            <div className="flex justify-center items-center gap-2">
              <button className="bg-white hover:bg-gray-300/70 hover:backdrop-blur-lg cursor-pointer rounded-full py-2 px-6 duration-300">
                Get started
              </button>
              <button className="backdrop-blur-md hover:backdrop-blur-2xl border border-neutral-50/50 hover:border-neutral-50/10 text-white cursor-pointer rounded-full py-2 px-6 duration-300">
                Take the free hair quiz
              </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center gap-2 mt-2 px-4">
              <div className="bg-[#3e5524] rounded-2xl flex flex-col items-start gap-6 w-full px-4 pt-15 pb-35 bg-[url(/media/hair-pills.png)] bg-no-repeat bg-cover sm:bg-[50%_30%] text-start lg:basis-1/2 lg:h-155">
                <h3 className="text-white text-2xl">
                  Hair loss treatment <br />
                  that’s suited to you
                </h3>
                <button className="bg-green-950/90 hover:bg-green-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                  How it works
                </button>
              </div>
              <div className="bg-[#1e4c6b] rounded-2xl w-full pt-6 text-start bg-[url(/media/hair-pic.png)] bg-left bg-no-repeat bg-cover lg:basis-1/2 lg:h-155">
                <div className="flex flex-col px-4 pb-8 gap-6">
                  <h3 className="text-white text-2xl pb-10">
                    Hair regrowth
                    <br />
                    <span className="text-green-900">made simple</span>
                  </h3>
                  <div className="flex flex-col justify-end items-start gap-1">
                    <button className="bg-green-950/90 hover:bg-green-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Receding hairline?
                    </button>
                    <button className="bg-green-950/90 hover:bg-green-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Thinning at the crown?
                    </button>
                    <button className="bg-green-950/90 hover:bg-green-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Overall thinning?
                    </button>
                    <button className="bg-green-950/90 hover:bg-green-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300">
                      Not sure?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-20 text-sm text-neutral-300/50 mt-6">
              Compounded drug products are not FDA-approved. FDA does not
              evaluate compounded products for safety, effectiveness, or
              quality. Prescription products require an online consultation with
              a healthcare provider who will determine if a prescription is
              appropriate.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hair;
