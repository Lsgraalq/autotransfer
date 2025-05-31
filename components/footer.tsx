"use client";
import React from "react";
import { Libre_Baskerville} from "next/font/google";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react"


export default function Footer (){
    return (
        <div className="section-three">
            <div className="contaner pb-10 ">
                <div className="flex flex-row justify-between border-b-3 pb-5 border-gray-400 pl-20 pr-20">
                    <h1 className="text-gray-400">© 2025 „TRANSFER-de“. Alle Rechte vorbehalten.</h1>
                    <Link href={'/'} className="flex justify-center">
                                <p className="text-base underline underline-offset-8 text-gray-400">AGB</p>
                    </Link> 
                    
                     <Link href={'/'} className="flex justify-center">
                                <p className="text-base underline underline-offset-8 text-gray-400">Datenschutz</p>
                    </Link> 
                     <Link href={'/'} className="flex justify-center">
                                <p className="text-base underline underline-offset-8 text-gray-400">Impressum</p>
                    </Link> 
                </div>
                <div className="flex justify-center pt-10">
                    <a href="https://www.illia-merinets.site/" className="tracking-[9] text-gray-400 underline underline-offset-8  text-center">Project by Merinets</a>
                    
                </div>
            </div>
        </div>

    )

}