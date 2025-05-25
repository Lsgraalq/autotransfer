"use client"
import Image from "next/image";
import Navbar from '../../components/navbar'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ScrollArrow from "../../components/ScrollArrow";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(useGSAP, SplitText); 
import { useState } from "react";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    { label: "PKW / Van", image: "/images/car.png" },
    { label: "TRANSPORTER", image: "/images/van.png" },
    { label: "LKW", image: "/images/truck.png" },
  ];

  
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = SplitText.create(".text", { type: "lines" });

    gsap.from(split.lines, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.45,
      duration: 1,
      ease: "power3.out",
    });
    
  }, { scope: container });

  
  

  return ( <>
      <Navbar></Navbar> 
      <main className="pt-20" ref={container}>
       
        <div className="flex flex-col-reverse md:flex-row items-center gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="md:text-6xl text-2xl font-bold pl-8 pr-5 pt-20 sm:text-left md:pl-20 text lines md:leading-20">
          Europaweiter Autotransfer
          pünktlich, professionell
            </h1>
            <h2 className="text-gray-500 pl-10 pt-10 pr-10  md:pl-20 md:pt-20 text leading-loose	md:leading-13 md:text-4xl text-xl">
              Wir überführen alle Fahrzeugtypen: Pkw, Transporter, Oldtimer und Luxuskarossen von Tür zu Tür, in ganz Europa
            </h2>
            <div className="btn-container text justify-center md:block md:pl-20 flex pt-12">
              <Link href={'/form'} className="">
                               <button className="btn-effect-18 uppercase font-bold">
      Get started
    </button>
                    </Link> 
            </div>
          </div>
          <div className="md:w-1/2 w-full justify-center flex  ">
              <DotLottieReact
                src="https://lottie.host/ff797c80-2dcc-480d-b736-bc182e1f2077/jXvcIjN1iU.lottie"
                loop
                autoplay
              />
          </div>
        </div>
        <div className="justify-center md:pt-25 text pt-6 pb-20">
        <ScrollArrow />
        </div>
        <div className="w-full min-h-screen section-two pt-30 " >
          <div className="flex flex-col">
            
              <h1 className="text font-bold text-2xl justify-center flex"id="next-section">Was können wir für Sie tun?</h1>
          
            <div className="cars-container w-full flex flex-col">
                            <div className="cars-first-row pt-10 flex-col md:flex-row flex justify-between ">
                                <div className=" pl-10">
                                    <div className="text-black text-xl">
                                        Abholung in
                                    </div>
                                    <div className="flex justify-start  ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white placeholder-white  mt-5 pt-3 mb-5 w-85  bg-gray-500 rounded-xl' placeholder="Von wo?" />
                                    </div>
                                </div>
                                <div className="pl-10">
                                    <div className="text-black text-xl">
                                        Abholdatum
                                    </div>
                                    <div className="flex justify-start ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white  placeholder-white mt-5 pt-3 mb-5 w-85  bg-gray-500 rounded-xl' placeholder="dd.mm.jjjj" />
                                    </div>
                                </div>
                                <div className="pl-10 ">
                                    <div className="text-black text-xl">
                                        Zielort
                                    </div>
                                    <div className="flex justify-start  ">
                                        <input name="myInput" className=' outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white focus:border-white placeholder-white mt-5 pt-3 mb-5 w-85  bg-gray-500 rounded-xl' placeholder="Wohin?" />
                                        
                                    </div>
                                    <div className="pt-10 mr-10 border-b-gray-500 border-b-1 sm:hidden"></div>
                                </div>
                            </div>
                            <div className="cars-second-row ">
                                <div className="car-selecter flex flex-col">
                                    <div className='first justify-center mx-auto pt-8'> 
                                           <h2 className="text  text-xl ">Fahrzeugtyp</h2>      
                                    </div>
                                    <div className="pl-8 flex justify-between pt-12">
                                        <div className="flex  ">
                                      {items.map((item, index) => (
                                      <div
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`flex flex-col items-center  rounded-xl  pt-2 pl-2 pr-2 cursor-pointer transition-colors mr-2 w-30 ${
                                          activeIndex === index ? "bg-gray-400 text-white" : ""
                                        }`}
                                      >
                                        <h2 className="text-sm mb-2">{item.label}</h2>
                                        <img src={item.image} alt={item.label} className="w-20" />
                                      </div>
                                    ))}
                                      </div>
                                    </div>
                                    


                                    <div className="btn-container  justify-center md:block md:pl-20 flex pt-12">
              <Link href={'/form'} className="">
                               <button className="btn-effect-18 uppercase font-bold">
      JETZT ANFRAGEN
    </button>
                    </Link> 
            </div>
                                    
                                </div>
                            </div>
            </div>

          </div>
        </div>
        
      </main>

      </>
  );
}
