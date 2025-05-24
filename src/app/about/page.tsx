"use client"
import Navbar from "../../../components/navbar"
import { useState } from "react"
import MegaScroll from 'react-mega-scroll';

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "60px",
  textAlign: "center",
  color: "white",
};

export default function AboutPage () {
  const [active, setActive] = useState(0);


    return (
        <>
        <Navbar></Navbar>
         <MegaScroll threshold={0.1} onChange={setActive}>
       <div style={{ ...styles, background: "#111" }}>react-mega-scroll</div>
      <div style={{ ...styles, background: "#222" }}>Smooth Scrolling</div>
      <div style={{ ...styles, background: "#333" }}>Keyboard Support</div>
      <div style={{ ...styles, background: "#222" }}>State Listeners</div>
      <div style={{ ...styles, background: "#111" }}>Free Forever</div>

      </MegaScroll>
       </>
    )
}