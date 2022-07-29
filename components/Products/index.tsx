const products = ['smart', 'sun', 'tnt', 'globe', 'tm', 'dito']
export default function Products() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Updated Products
                    </p>
                </div>
                <p className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Our</span>
                    </span>{' '}
                    top eload products
                </p>
                <p className="text-base text-gray-700 md:text-lg">
                    Just create an account and sell load to all networks and also gaming pins.
                </p>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, i) => (
                    <div key={i} className="relative cursor-pointer p-px overflow-hidden transition duration-300 transform border hover:border-deep-purple-accent-400 rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100" />
                        <img
                            className="relative w-full h-40 top-0 object-contain p-5"
                            src={`/assets/products/${product}.png`} />
                    </div>
                ))}
            </div>
        </div>
    )
}