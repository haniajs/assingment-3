import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
       <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
       justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">

            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-
            bg-gradient-to-b from-neutral-50 to-red-600 text-red-600">Where every petal tells a story of resilience</h1>

            <p className="mt-4 font-normal text-base md:text-lg text-red-600 max-w-lg mx-auto">Therefore, 
            flowers are an essential part of our lives. They are responsible for bringing happiness in our 
            lives and making our surrounding environment a prettier place to live in. Thus, we must all plant 
            flowers at homes and in our neighbourhood to beautify the place and bring happiness and joy
            for everyone.</p><br />

            <div><Link href={"/about"}><button className="bg-red-600 text-white font-medium py-2 px-8
            transition hover:text-black rounded-lg">
                Learn more</button></Link></div>

        </div>
       </div>
    );
}

export default Hero;