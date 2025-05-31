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
      <main className="pt-20  min-h-screen md:pt-30" ref={container}>
       
        <div className="flex flex-col-reverse md:flex-row items-center gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="text text-left pl-10 pt-10 text-2xl font-bold leading-10 md:text-3xl md:leading-15 md:pl-20 xl:text-6xl xl:leading-20">
          Europaweiter Autotransfer
          pünktlich, professionell
            </h1>
            <h2 className="text-gray-500 pl-10 pt-10 pr-10  md:pl-20 md:pt-20 text leading-9	md:leading-13 md:text-4xl text-xl lg:text-3xl lg:leading-12">
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
        <div className="justify-center md:pt-25  text pt-5 pb-20 mb-20 md:mb-10 lg:pt-25">
        <ScrollArrow />
        </div>
        <div className="w-full  section-two pt-25 " id="next-section" >
          <div className="flex flex-col">
            
              <h1 className="text font-bold text-2xl justify-center flex">Was können wir für Sie tun?</h1>
          
            <div className="cars-container w-full flex flex-col">
                            <div className="cars-first-row pt-10 flex-col md:flex-row flex justify-between max-w-full">
                                <div className=" pl-10">
                                    <div className="text-black text-xl" >
                                        Abholung in
                                    </div>
                                    <div className="flex justify-start  ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white placeholder-white  mt-5 pt-3 mb-5 w-75  bg-gray-500 rounded-xl md:w-60 xl:w-85' placeholder="Von wo?" />
                                    </div>
                                </div>
                                <div className="pl-10">
                                    <div className="text-black text-xl">
                                        Abholdatum
                                    </div>
                                    <div className="flex justify-start ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white  placeholder-white mt-5 pt-3 mb-5 w-75  bg-gray-500 rounded-xl md:w-60 xl:w-85' placeholder="dd.mm.jjjj" />
                                    </div>
                                </div>
                                <div className="pl-10 ">
                                    <div className="text-black text-xl">
                                        Zielort
                                    </div>
                                    <div className="flex justify-start  md:pr-5">
                                        <input name="myInput" className=' outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white focus:border-white placeholder-white mt-5 pt-3 mb-5 w-75  bg-gray-500 rounded-xl md:w-60 xl:w-85' placeholder="Wohin?" />
                                        
                                    </div>
                                    <div className="pt-10 mr-10 border-b-gray-500 border-b-1 sm:hidden"></div>
                                </div>
                            </div>
                            <div className="cars-second-row ">
                                <div className="car-selecter flex flex-col">
                                    <div className='first justify-center mx-auto pt-8'> 
                                           <h2 className="text  text-xl ">Fahrzeugtyp</h2>      
                                    </div>
                                    <div className="flex justify-between pt-10 gap-5 px-10 md:justify-center md:gap-20">
                                       <div className="car-option" >
                                          <h3 className="flex justify-center p-2 md:text-2xl" >CAR</h3>
                                          <input name="onSelect" type="image" src='../images/car.png' className='w-25 p-2 flex justify-center md:w-60 md:p-10' />
                                       </div>
                                       <div className="car-option">

                                          <h3 className="flex justify-center p-2 md:text-2xl">VAN</h3>
                                          <input name="onSelect" type="image" src='../images/van.png' className='w-25 p-2 flex justify-center md:w-60 md:p-10' />
                                       </div>
                                       <div className="car-option" >
                                          <h3 className="flex justify-center p-2 md:text-2xl">PKW</h3>
                                          <input name="onSelect" type="image" src='../images/truck.png' className='w-25 p-2 flex justify-center md:w-60 md:p-5' />
                                       </div>
                                    </div>
                                    


                                    <div className="btn-container  justify-center md:block flex pt-12">
              <Link href={'/form'} className="flex justify-center">
                                <button className="btn-effect-18 uppercase font-bold">
                                  JETZT ANFRAGEN
                                </button>
                    </Link> 
            </div>
                                    
                                </div>
                                <div className="pt-25 flex   justify-center">
                                  <h2 className="text-xs  text-gray-500 flex justify-center w-70 text-center pb-10 md:text-base md:w-full">Bei einem besonderen Anliegen kontaktieren Sie uns bitte unter: eshkere12345@outlook.com</h2>
                                </div>
                            </div>
            </div>

          </div>
        </div>
        
        <div className="why-us min-h-screen w-full pt-20 section-three">
          <div className="flex flex-col contaner">

            <div className="flex sm:flex-row  flex-col pb-10  sm:justify-between px-5 xl:pb-20 md:pb-15">
                <div className="">
                  <h2 className=" text-gray-500 text-md hidden sm:flex sm:text-3xl  xl:text-4xl">Nutzen</h2>
                  <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl">Ausgeben, aber richtig</h1>
                </div>
                <div className=" pt-2 flex sm:justify-end ">
                  <h2 className=" text-md sm:justify-end flex text-gray-500 sm:text-2xl sm:pt-8  xl:pt-12">Mit uns sind Sie gut beraten</h2>
                </div>
            </div>

            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col mx-4 mb-4 px-4 pb-4 border-1 gap-6 section-two border-gray-500 rounded-xs">
                    <img src="/images/asd.png" alt="5 stars" className="flex justify-start   w-40 xl:w-50 xl:pt-5 xl:ml-2"/>
                    <h2 className="font-bold  text-xl xl:text-xl ">Jahrelange Erfahrung</h2>
                    <p className="text-gray-500 leading-6 xl:leading-8 xl:text-lg pb-4">Die jahrelange Berufserfahrung unserer Mitarbeiter spiegelt sich seit dem tagtäglich im kompetenten Fachwissen und einem professionellen Service wieder.</p>
                </div>
                <div className="flex flex-col mx-4 mb-4 px-4 pb-4 border-1 gap-6 section-two border-gray-500 rounded-xs">
                    <img src="/images/speed.png" alt="high speed" className="flex justify-start  mt-4 w-35 xl:mt-7 xl:mb-2 xl:ml-5"/>
                    <h2 className="font-bold  text-xl xl:text-xl">24-Stunden-Express-Service</h2>
                    <p className="text-gray-500 leading-6 xl:leading-8 xl:text-lg pb-4">Sie haben es eilig? Unter bestimmten Voraussetzungen ermöglichen wir eine besonders schnelle Expressüberführung Ihres Fahrzeugs innerhalb von 24 Stunden.</p>
                </div>
                <div className="flex flex-col mx-4 mb-4 px-4 pb-4 border-1 gap-6 last-section rounded-br-[60] md:rounded-tr-[60] md:rounded-br-none border-gray-500 rounded-xs">
                    <img src="/images/route.png" alt="excelent routing" className="flex justify-start  pt-4 w-20 xl:ml-2 xl:mb-1"/>
                    <h2 className="font-bold  text-xl xl:text-xl">Europaweite Überführungen</h2>
                    <p className="text-gray-500 leading-6 xl:leading-8 xl:text-lg pb-4">Wir überführen Ihr Fahrzeug deutschland- und europaweit. Wir sorgen für einen sicheren, unkomplizierten und termingerechten Fahrzeug-Transfer.</p>
                </div>
                
            </div>
          </div>
          <div className="button-wrapper pt-15 pb-10 xl:pt-35">
            <Link href={'/form'} className="flex justify-center">
                                <button className="btn-effect-18 uppercase font-bold leading-8">
                                  Unverbindlich  &nbsp;   anfragen
                                </button>
                    </Link> 
          </div>
        </div>



      </main>

      </>
  );
}
