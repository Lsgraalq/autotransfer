"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/SplitText";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AboutUs from "../../components/aboutus";
import History from "../../components/history";
import ScrollArrow from "../../components/ScrollArrow";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {

  const container = useRef(null);


 

useGSAP(() => {
  gsap.utils.toArray<HTMLElement>(".panel").forEach((panel, i) => {
  gsap.from(panel, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

  const showAnim = gsap.from('.main-tool-bar', { 
  yPercent: -100,
  paused: true,
  duration: 0.2
  }).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: "max",
  markers: false,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
  });


  const tl = gsap.timeline();

  // 🔵 Анимация .wow в самом начале
  tl.fromTo(
  ".wow",
  { height: "20px" },
  { height: "400px", duration: 0.6, ease: "expo.out" ,top: "60vh",} // Увеличение до 400px
).to(
  ".wow",
  {
    height: "300px",
    duration: 0.6,
    ease: "expo.in",
    top: "100vh",
    onComplete: () => {
      const el = document.querySelector(".wow");
      if (el instanceof HTMLElement) {
        el.classList.add("hidden");
      }
    }
  }
)
  // 🔵 Анимация заголовков
  .fromTo(
    "#introText",
    { y: "-1000%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 1.2, ease: "power3.out" },
    "-=0.2"
  )
  .fromTo(
    "#introTexttwo",
    { y: "1000%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 1.2, ease: "power3.out" },
    "-=1"
  )

  // 🔵 Исчезновение обёртки
  .to(
    "#intro",
    {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      onComplete: () => {
        const el = document.querySelector("#intro");
        if (el instanceof HTMLElement) {
          el.classList.add("hidden");
        }
      }
    }
  );
}, []);

  

  

  return ( 
      <>
      
      <div ref={container} className="">
      <div className="fixed  w-full bg-black h-0  z-[100] wow" ></div>
      <div
        id="intro"
        className="fixed flex-col  sm:flex-row gap-10 top-0 left-0 w-full h-full flex items-center justify-center  bg-white z-[90]"
      >
        <h1
          id="introText"
          className="sm:text-[100px] xl:text-[160px] xs text-black  text-6xl intruhao opacity-0"
        >
          Auto
        </h1>
        <h1 id="introTexttwo"
          className="sm:text-[100px] xl:text-[160px]  text-6xl text-white intruha opacity-0"> Transfer</h1>
       
      </div>
      </div>
      <main className="  min-h-screen scrollable-area" ref={container}>
       <div className="pb-20"><Navbar></Navbar> </div> 
       {/* hero section */}
        <section className="grid grid-cols-12 md:flex-row items-center gap-0  panel contaner 2xl:pl-20">   
          <div className="w-full col-start-3 col-end-12 order-2 sm:order-1 md:col-span-6 ">
            <h1 className="text text-left  pt-10 text-2xl font-bold leading-10 md:text-3xl md:leading-15  xl:text-5xl xl:leading-20">
          Europaweiter Autotransfer
          pünktlich, professionell
            </h1>
            <h2 className="text-gray-500  pt-10 pr-10   md:pt-20 text leading-9	md:leading-13 md:text-4xl text-xl lg:text-3xl lg:leading-12">
              Wir überführen alle Fahrzeugtypen: Pkw, Transporter, Oldtimer und Luxuskarossen von Tür zu Tür, in ganz Europa
            </h2>
            <div className="btn-container text justify-start md:block  flex pt-12">
              <Link href={'/form'} className="">
                               <button className="btn-effect-18 uppercase font-bold">
      Get started
    </button>
                    </Link> 
            </div>
          </div>
          <div className="col-span-12 order-1 sm:order-2 md:col-span-6 w-full justify-center flex  ">
              <DotLottieReact
                src="https://lottie.host/ff797c80-2dcc-480d-b736-bc182e1f2077/jXvcIjN1iU.lottie"
                loop
                autoplay
              />
          </div>
          <div className="justify-center md:pt-25 sm:order-3 hidden lg:flex text pt-5  pb-5 lg:pt-25 col-start-1 col-end-12">
        <ScrollArrow />
        </div>
       </section>
        {/* hero section ENDs */}
        {/* SERCTION CAR CHOOSE STARTS */}
        <div className="w-full  section-two pt-45 panel" id="next-section" >
          <div className="flex flex-col contaner">
            
              <h1 className="text font-bold text-2xl justify-center flex">Was können wir für Sie tun?</h1>
          
            <div className="cars-container w-full flex flex-col">
                            <div className="cars-first-row pt-10 flex-col md:flex-row flex justify-between max-w-full">
                                <div className=" pl-10 md:pl-0">
                                    <div className="text-black text-xl" >
                                        Abholung in
                                    </div>
                                    <div className="flex justify-start  ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white placeholder-white  mt-5 pt-3 mb-5 w-75  bg-gray-500 rounded-xl md:w-60 xl:w-85' placeholder="Von wo?" />
                                    </div>
                                </div>
                                <div className="pl-10 md:pl-0">
                                    <div className="text-black text-xl">
                                        Abholdatum
                                    </div>
                                    <div className="flex justify-start ">
                                        <input name="myInput" className='outline-none focus:outline-none focus:border-none flex items-center pb-2  pl-4 text-white  placeholder-white mt-5 pt-3 mb-5 w-75  bg-gray-500 rounded-xl md:w-60 xl:w-85' placeholder="dd.mm.jjjj" />
                                    </div>
                                </div>
                                <div className="pl-10 md:pl-0 ">
                                    <div className="text-black text-xl">
                                        Zielort
                                    </div>
                                    <div className="flex justify-start  ">
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
        {/* SERCTION CAR CHOOSE ENDs */}
        <History></History>
        {/* SECTION BENEFITS STARTS */}
        <div className="why-us min-h-screen w-full pt-20 section-three panel">
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
            <div className="flex justify-center">
            <Link href={'/form'} className="flex justify-center md:w-90 w-60">
                                <button className="btn-effect-18 uppercase font-bold leading-5  md:leading-8">
                                  Unverbindlich  &nbsp;   anfragen
                                </button>
                    </Link> 
                    </div>
          </div>
        </div>
    {/* SECTION BENEFINT ENDS */}
      <AboutUs ></AboutUs>
 
      </main>
      
      <Footer></Footer>

    </>
  );
}
