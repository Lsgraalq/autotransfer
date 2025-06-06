"use client"

import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Observer } from 'gsap/Observer';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";


gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);



export default function AboutPage () {
  
    const [showNavbar, setShowNavbar] = useState(false);
  const heroRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "middle ", // когда низ hero доходит до верха экрана
      onEnter: () => setShowNavbar(true),
      onLeaveBack: () => setShowNavbar(false),
    });
  }, []);
  


    return (
        <>
       
        <Navbar visible={showNavbar}></Navbar>
        <section id="hero" ref={heroRef} className="hero h-screen relative"  >
           <video
      className="w-full h-full object-cover  "
      autoPlay
      muted
      loop
      playsInline
      src="/images/Timeline.mp4" // заменишь на своё видео
    />
    {/* <h1 className="absolute inset-0 flex items-end pb-5 justify-center text-6xl font-bold  text-gray-100 top-50% ">AUTOTRANSFER</h1> */}
        </section>
        <section id="main"  className="pt-35 h-screen ">
          <div className="contaner flex flex-col gap-30 pb-30">
            <div className="text-center ">
              <h1 className="font-bold text-xl pb-5">Über autotransfer</h1>
              <p className="text-gray-500 leading-7 xl:leading-8  xl:text-base 2xl:tetx-lg">Seit 2005 sorgt autotransfer24 für frischen Fahrtwind in der Fahrzeugtransferbranche. Eine Reihe von engagierten Spezialisten aus der Autovermietungs- und Transferbranche schlossen sich mit dem Ziel zusammen, ein einzigartiges Transport-Unternehmen ins Leben zu rufen. Die jahrelange Berufserfahrung unserer Mitarbeiter spiegelt sich seitdem tagtäglich im kompetenten Fachwissen und einem professionellen Service wieder.</p>
            </div>
            <div className="text-center  ">
              <h1 className="font-bold text-xl pb-5">Über autotransfer</h1>
              <p className="text-gray-500 leading-7 xl:leading-8  xl:text-base 2xl:tetx-lg">Seit 2005 sorgt autotransfer24 für frischen Fahrtwind in der Fahrzeugtransferbranche. Eine Reihe von engagierten Spezialisten aus der Autovermietungs- und Transferbranche schlossen sich mit dem Ziel zusammen, ein einzigartiges Transport-Unternehmen ins Leben zu rufen. Die jahrelange Berufserfahrung unserer Mitarbeiter spiegelt sich seitdem tagtäglich im kompetenten Fachwissen und einem professionellen Service wieder.</p>
            </div>
            <div className="text-center ">
              <h1 className="font-bold text-xl pb-5">Über autotransfer</h1>
              <p className="text-gray-500 leading-7 xl:leading-8  xl:text-base 2xl:tetx-lg">Seit 2005 sorgt autotransfer24 für frischen Fahrtwind in der Fahrzeugtransferbranche. Eine Reihe von engagierten Spezialisten aus der Autovermietungs- und Transferbranche schlossen sich mit dem Ziel zusammen, ein einzigartiges Transport-Unternehmen ins Leben zu rufen. Die jahrelange Berufserfahrung unserer Mitarbeiter spiegelt sich seitdem tagtäglich im kompetenten Fachwissen und einem professionellen Service wieder.</p>
            </div>
          </div>
            <Footer></Footer>
        </section>
       
      
       
        
       </>
    )
}