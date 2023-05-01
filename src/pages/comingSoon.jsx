import React from 'react';
import Image from 'next/image'

export default function ComingSoon() {
    return (
        <>
            <div className="relative flex bg-main bg-fixed object-none h-screen">
                <Image src="/doragonmedia.png" width={500} height={500} color="white" className="z-80" />
                {/* <svg
                    viewBox="0 0 1024 1024"
                    className="absolute overscroll-contain overflow-clip left-1/2 top-1/2 z-10 h-[150rem] w-[150rem] -translate-x-1/2 -translate-y-1/2 mx-auto opacity-10"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(300)"
                        >
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="white" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg> */}
                <h1 className="flex h-max text-white justify-center align-middle mx-auto my-auto font-medium text-4xl md:text-7xl font-display z-20">Coming soon...</h1>
            </div>
            {/* Card */}
            <div className="z-52 bg-red-600 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 ">
                    <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                        <h2 className="inline sm:block lg:inline xl:block text-white">Doragon Media will go online soon. Be the first to know by subscribing to our newsletter.</h2>
                        <p className="inline sm:block lg:inline xl:block">Sign up here</p>
                    </div>

                    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                        <div className="flex gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-x-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10
                                placeholder:text-white/75 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6
                                "
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold font-display text-red-600 bg-white shadow-sm hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-white ">
                            We care about data. Read our{' '}
                            <a className="font-semibold text-white hover:text-red-100" href="#main">Privacy&nbsp;policy</a>.
                        </p>
                    </form>

                </div>

            </div>
        </>
    )
}