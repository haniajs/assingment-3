import React from "react";
import Link from "next/link";

function About(){
    return(
      <div>
    
        <div>
            <section id="about" className="bg-red-600 h-screen ">
              <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-
            bg-gradient-to-b from-neutral-50 to-red-600 text-white text-center p-20">About For Our Website</h1>
              <p className="mt-0 font-normal text-base md:text-lg text-white max-w-lg mx-auto">Therefore, 
            flowers are an essential part of our lives. They are responsible for bringing happiness in our 
            lives and making our surrounding environment a prettier place to live in. Thus, we must all plant 
            flowers at homes and in our neighbourhood to beautify the place and bring happiness and joy
            for everyone.</p>

            <div className="text-center m-2"><Link href={"/contact"}><button className="bg-white text-red-600 font-medium py-2 px-8
            transition hover:text-black rounded-lg ">
                Contact-Us</button></Link></div>
            </section>
        </div>

      </div>
    )
  }
  
  export default About;