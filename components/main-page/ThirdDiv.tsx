import {Icon} from '@iconify/react'

const ThirdDiv = () => {
  return (
    <div className="flex relative my-12 bg-[url('/third-div-home.jpg')] bg-cover bg-center ">
        <div className='flex flex-col w-full justify-center items-center bg-gray-900/70'>
            <div className="flex flex-col items-center text-3xl lg:text-5xl text-white mt-8 mb-2">
                <div>We Provide Solutions</div>
                <div>For All Situations</div>
            </div>
            <div className="pb-8">
                <Icon 
                    icon="carbon:direction-curve"
                    color="white"
                    width={48}
                    height={48}
                    className="rotate-180"
                />
            </div>

            <div className="grid grid-cols-1 gap-y-4 px-4 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 max-w-[900px]">
                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                        </div>
                        <h2 className="text-xl font-semibold text-white">
                        Foreclosure
                        </h2>
                    </div>
                    <p className="m-0 max-w-[30ch] text-sm text-white">
                        Is your house in the foreclose process?
                    </p>
                </div>

                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                        Pre-Foreclosure
                    </h2>
                    </div>
                    <p className="m-0 max-w-[30ch] text-sm text-white">
                    Are you behind on mortgage payments?
                    </p>
                </div>     
                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                        Tax Default
                    </h2>
                    </div>
                    <p className="m-0 max-w-[30ch] text-sm  text-white">
                    Are you behind on property taxes?
                    </p>
                </div>
                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                        Divorced
                    </h2>
                    </div>
                    <p className="m-0 max-w-[30ch] text-sm  text-white">
                    Have you been recently divorced?
                    </p>
                </div>
                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                        Inherited
                    </h2>
                    </div>
                    <p className="m-0 max-w-[30ch]  text-sm  text-white">
                    Were you passed down a home that is a burden?
                    </p>
                </div>
                <div className="group shadow-lg border-2 border-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <div className="flex flex-row space-x-2 py-2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400">
                        <Icon icon="game-icons:check-mark" color="white"/>
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                        Vacant
                    </h2>
                    </div>
                    <p className="m-0 max-w-[30ch] text-sm  text-white ">
                    Are you an absentee home owner with a vacant property?
                    </p>
                </div>
            </div>

            <div className="flex flex-col py-16 gap-2 w-full text-white items-center text-3xl">
                <div className="flex mb-2 text-4xl md:text-5xl">No Commission</div>
                <div className="flex mb-2 text-4xl md:text-5xl">No Hidden Charges</div>
                <div className="mb-2">
                    <Icon 
                    icon="carbon:direction-curve"
                    color="white"
                    width={48}
                    height={48}
                    className="rotate-180"
                    />
                </div>
                <a href="tel:+16822677741">
                    <button className="flex flex-row p-2 px-4 gap-2 text-xl cursor-pointer transition-transform transform hover:scale-125 bg-orange-400 text-white hover:bg-orange-500">
                        <Icon icon="fa6-solid:sack-dollar" width={24} height={24} />
                        <span>Free Cash Offer</span>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ThirdDiv