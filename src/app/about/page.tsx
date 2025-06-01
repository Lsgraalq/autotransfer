"use client"
import Navbar from "../../../components/navbar"
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from "../../../components/footer";


gsap.registerPlugin(useGSAP) 
gsap.registerPlugin(ScrollTrigger) 




export default function AboutPage () {
  
  


    return (
        <>
       <section className="about-us">
         <Navbar></Navbar>
         
          <h1 className="">hello</h1>
        <Footer></Footer>
       </section>
        
       </>
    )
}