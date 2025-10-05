"use client";
import React from "react";
import { Libre_Baskerville} from "next/font/google";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"


export default function Footer (){
    return (
        <div className="section-three">
            <div className="contaner md:pb-10 pb-5">
                <div className="flex sm:flex-row justify-between md:border-b-2 md:pb-5 pb-2 border-gray-400 md:pl-20 md:pr-20 mx-5  border-b-1  flex-col">
                    <div className="flex justify-center pb-6">
                        <h1 className="text-gray-400 text-xs">© 2025 „TRANSFER-de“. Alle Rechte vorbehalten.</h1>
                    </div>
                    <div className="flex flex-row gap-4 xl:gap-20 justify-center pb-6">
                        <Link href={'/'} className="flex justify-center">
                                    <p className="md:text-base text-xs underline underline-offset-8 text-gray-400">AGB</p>
                        </Link> 
                        
                        <Link href={'/'} className="flex justify-center">
                                    <p className="md:text-base text-xs underline underline-offset-8 text-gray-400">Datenschutz</p>
                        </Link> 
                        <Link href={'/'} className="flex justify-center">
                                    <p className="md:text-base text-xs underline underline-offset-8 text-gray-400">Impressum</p>
                        </Link> 
                    </div>
                </div>
                <div className="flex justify-center md:pt-10  pt-2">
                    <a href="https://merinets.xyz/" className="tracking-[6] text-gray-400 md:underline underline-offset-8  text-center">Designed and developed by Merinets</a>
                    
                </div>
            </div>
        </div>

    )

}