import React from "react";

function Anxiety() {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-center bg-gradient-to-b from-[#ad6054] via-[#ad6054] to-[#612921] rounded-2xl">
        <div className="flex flex-col justify-center items-center text-center pt-30 pb-5">
          <h2 className="absolute top-5 text-3xl md:text-5xl xl:text-6xl z-1 text-white">
            A journey to
            <br />
            better mental well-being
          </h2>
          <video
            src="/media/anxiety-vid.mp4"
            autoPlay
            loop
            muted
            className="absolute top-30 left-0 z-0 pointer-events-none touch-action-none"
          />
          <div className="z-10 mt-42 sm:mt-75 md:mt-93 lg:mt-129 xl:mt-165">
            <div className="flex justify-center items-center gap-2">
              <button className="bg-white hover:bg-gray-300/70 hover:backdrop-blur-lg cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                Get started
              </button>
              <button className="backdrop-blur-md hover:backdrop-blur-2xl border border-neutral-50/50 hover:border-neutral-50/10 text-white cursor-pointer rounded-full py-2 px-6 duration-300 lg:text-2xl">
                See all medication
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 mt-2 px-4">
              <div className="bg-[#552424] rounded-2xl flex flex-col items-start gap-6 w-full px-4 pt-15 pb-35 bg-[url(/media/anxiety-pills.png)] bg-no-repeat bg-top sm:bg-[50%_30%] lg:bg-bottom text-start lg:basis-1/2 lg:h-155">
                <h3 className="text-white text-2xl md:text-4xl">
                  Start your mental health <br />
                  assessment
                </h3>
                <button className="bg-red-950/90 hover:bg-red-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                  Learn more
                </button>
              </div>
              <div className="rounded-2xl w-full pt-6 text-end bg-[url(/media/anxiety-pic.png)] bg-no-repeat bg-cover lg:basis-1/2 lg:h-155">
                <div className="flex flex-col px-4 pb-8 gap-6">
                  <h3 className="text-black text-2xl md:text-4xl">
                    Unlocking peace
                    <br />
                    <span className="text-red-900">and mental clarity</span>
                  </h3>
                  <div className="flex flex-col justify-end items-end gap-1">
                    <button className="bg-red-950/90 hover:bg-red-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                      Anxiety
                    </button>
                    <button className="bg-red-950/90 hover:bg-red-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                      Depression
                    </button>
                    <button className="bg-red-950/90 hover:bg-red-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                      Trouble sleeping
                    </button>
                    <button className="bg-red-950/90 hover:bg-red-950 text-white cursor-pointer rounded-full py-3 px-6 duration-300 lg:text-xl">
                      Stress & Burnout
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

export default Anxiety;
