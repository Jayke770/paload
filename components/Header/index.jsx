export default function Header() {
    return (
        <div className="px-4 mt-[50px] lg:mt-[5px] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">All in one</p>
                        </div>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                            {"The No. 1 ELoading Business "}
                            <br className="hidden md:block" />
                            {"you can't believe "}
                            <span className="inline-block text-deep-purple-accent-400">is real.</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            Start your Eloading business today and enjoy unlimited rebates and rewards.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-[60%] lg:w-2/5">
                        <img className="object-cover" src="/assets/images/mobile-light.png" alt="" />
                    </div>
                    <div className="w-[65%] lg:w-[45%] -ml-28 lg:-ml-28">
                        <img className="object-cover" src="/assets/images/mobile-light.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}