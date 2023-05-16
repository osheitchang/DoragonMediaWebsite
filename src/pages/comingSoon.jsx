import React from 'react';
import Image from 'next/image'
import { useTimer } from 'react-timer-hook';
import logo from '../images/logos/doragonmedia_white.png'



function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') })
    //Continue here (Code missing - Look example)

}

export default function ComingSoon() {
    return (
        <>
            <div className=" ">
                <div className="flex  justify-center content-center bg-main bg-fixed object-none h-screen px-24">
                    <Image src={logo} objectFit={'contain'} padding={'40px 40px'} style={{ position: 'absolute', zIndex: '80', width: '20px', margin: '0 40' }} absolute color="white" />
                </div>
                <div className="max-h-3.5">
                    <Image src={'/landscape.jpg'} objectFit={'cover'} layout={'fill'} style={{ objectFit: 'contain' }} />
                </div>
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
                {/* <h1 className=" relative h-max text-white justify-center align-middle mx-auto my-auto font-medium text-4xl md:text-7xl font-display z-20 shadow-lg">Coming soon...</h1> */}
            </div>
            {/* Card */}
            <div className="z-52 bg-main py-16 sm:py-24 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 ">
                    <div className="max-w-xl text-3xl font-bold tracking-tight text-white text-xl sm:text-2xl lg:col-span-7">
                        <h2 className="inline sm:block lg:inline xl:block text-white font-display font-light">Doragon Media will go online soon. </h2>
                        <p className='font-extralight'>Be the first to know by subscribing to our newsletter.</p>

                    </div>

                    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                        <div className="flex flex-col justify-center content-center">
                            <div className='pb-2 text-3xl'>
                                <p className="inline sm:block lg:inline xl:block font-heavy text-white mb-4 font-bold ">Sign up here</p>
                            </div>
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
                                    className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold font-display text-sky-500 bg-white shadow-sm hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-white ">
                                We care about data. Read our{' '}
                                <a className="font-semibold text-white hover:text-red-100" href="#main">Privacy&nbsp;policy</a>.
                            </p>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}