import { Icon } from '@iconify/react';

const ThirdDiv = () => {
  return (
    <div className="flex relative my-12 bg-[url('/third-div-bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col w-full justify-center items-center bg-gray-900/70">
        {/* Headline */}
        <div className="flex flex-col items-center text-4xl md:text-5xl text-white mt-16 mb-2">
          <div>We Provide Solutions</div>
          <div>For All Situations</div>
        </div>

        {/* Icon Divider */}
        <div className="pb-8">
          <Icon icon="carbon:direction-curve" color="white" width={48} height={48} className="rotate-180" />
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 gap-y-4 px-4 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 max-w-[900px]">
          {[
            { title: "Foreclosure", text: "Is your house in the foreclose process?" },
            { title: "Pre-Foreclosure", text: "Are you behind on mortgage payments?" },
            { title: "Tax Default", text: "Are you behind on property taxes?" },
            { title: "Divorced", text: "Have you been recently divorced?" },
            { title: "Inherited", text: "Were you passed down a home that is a burden?" },
            { title: "Vacant", text: "Are you an absentee home owner with a vacant property?" },
          ].map((item, index) => (
            <div
              key={index}
              className="group shadow-lg border-2 border-white px-5 py-4 transition-colors
                hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                active:border-gray-300 active:bg-gray-500 active:dark:border-neutral-700 active:dark:bg-neutral-800/30"
            >
              <div className="flex flex-row space-x-2 py-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#F5B429]">
                  <Icon icon="game-icons:check-mark" color="white" />
                </div>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              </div>
              <p className="m-0 max-w-[30ch] text-sm text-white">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col py-16 gap-2 w-full text-white items-center text-3xl">
          <div className="flex mb-2 text-4xl md:text-5xl">No Commission</div>
          <div className="flex mb-2 text-4xl md:text-5xl">No Hidden Charges</div>
          <div className="mb-2">
            <Icon icon="carbon:direction-curve" color="white" width={48} height={48} className="rotate-180" />
          </div>

          <a href="tel:+16822677741">
            <button className="flex flex-row p-2 px-4 gap-2 text-xl cursor-pointer transition-transform transform hover:scale-125 active:scale-125 bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md shadow-2xl">
              <Icon icon="fa6-solid:sack-dollar" width={24} height={24} />
              <span>Free Cash Offer</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdDiv;