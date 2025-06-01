"use client";
import React from "react";
import { Libre_Baskerville} from "next/font/google";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"


const Libre = Libre_Baskerville({
  weight: '400',
  subsets: ["latin"],
});

const Libre_wide = Libre_Baskerville({
  weight: '700',
  subsets: ["latin"],
});


export default function Navbar () {

    const  [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);


    }


    return (
    
    <div className="fixed w-full h-20 shadow-xl z-[1] bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
            <Link href={'/'}>
            <div className=" uppercase xl:text-xl sm:text-base ">AUTOTRANSFER</div>
            </Link>
            <div className="hidden lg:flex ">
                <ul className="hidden lg:flex ">
                    <Link href={'/'}>
                        <li className="ml-10 uppercase hover:border-b xl:text-xl sm:text-base  Libre_wide">
                                Start
                        </li>
                    </Link>
                     <Link href={'/services'}>
                        <li className="ml-10 uppercase hover:border-b xl:text-xl sm:text-base Libre_wide">
                                Services
                        </li>
                    </Link>
                     <Link href={'/kontakt'}>
                        <li className="ml-10 uppercase hover:border-b xl:text-xl sm:text-base  Libre_wide">
                               Kontakt
                        </li>
                    </Link>
                     <Link className="md:mr-20 xl:mr-30"href={'/about'}>
                        <li className="ml-10 uppercase hover:border-b xl:text-xl sm:text-base Libre_wide">
                                about us
                        </li>
                    </Link>
                    <Link href={'/form'}>
                        <li className="ml-10 flex justify-center pt-1 uppercase hover:border-b xl:text-xl hover:bg-gray-600 duration-300 sm:text-base Libre_wide h-8 rounded-full py-0 px-4 w-51 cursor-pointer tracking-wider btn bg-black text-white">
                                Get started
                        </li>
                    </Link>
                </ul>


            </div>
            <div onClick={handleNav}  className="lg:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-1000" 
                : "fixed left-[-100%] top-0 p-10 ease-in duration-300 z-1000"
            }>
                <div className="flex w-full items-center justify-end z-1000">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} /> 
                    </div>
                    
                </div>
                <div className="flex-col py-4 ">
                       <ul className="">
                    <Link href={'/'}>
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer uppercase">
                                Start
                        </li>
                    </Link>
                     <Link href={'/services'}>
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer uppercase">
                                Services
                        </li>
                    </Link>
                     <Link href={'/kontakt'}>
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer uppercase">
                               Kontakt
                        </li>
                    </Link>
                     <Link href={'/about'}>
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer uppercase">
                                about us
                        </li>
                    </Link>
                    <Link href={'/form'}>
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer uppercase">
                                Get started
                        </li>
                    </Link>
                </ul> 
                    </div>
            </div>
        </div>
    </div>


    )
}