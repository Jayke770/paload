import NextLink from 'next/link'
export default function Features() {
    return (
        <div
            id="features"
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex justify-center flex-col items-center">
                <p className="font-sans text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Our Platform Offers
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                    More ways to sell loads.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 lg:grid-cols-3 mt-20 mb-20">
                <div className="relative cursor-pointer p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="font-semibold leading-5">PaLoad Website</h6>
                        </div>
                        <p className="mb-2 text-sm text-gray-900">
                            Our website makes it simple to sell loads.
                        </p>
                        <NextLink passHref href="/">
                            <a
                                aria-label=""
                                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Learn more
                            </a>
                        </NextLink>
                    </div>
                </div>
                <div className="relative cursor-pointer p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="font-semibold leading-5">PaLoad Bot</h6>
                        </div>
                        <p className="mb-2 text-sm text-gray-900">
                            Sell Load using our powerful bots.
                        </p>
                        <NextLink passHref href="/">
                            <a
                                aria-label=""
                                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Learn more
                            </a>
                        </NextLink>
                    </div>
                </div>
                <div className="relative cursor-pointer p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                    <div className="relative p-5 bg-white rounded-sm">
                        <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="font-semibold leading-5">PaLoad Developer API</h6>
                        </div>
                        <p className="mb-2 text-sm text-gray-900">
                            Create your own application or website using our API.
                        </p>
                        <NextLink passHref href="/">
                            <a
                                aria-label=""
                                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Learn more
                            </a>
                        </NextLink>
                    </div>
                </div>
            </div>
        </div>
    )
}