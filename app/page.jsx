import React from "react"
import Image from "next/image.js"

import Head from "./header.jsx"

import Aibackground from "../public/ai-background.png"

function Home() {

  return (
    <div className="bg-slate-300 min-h-screen">

      <Head className="sticky" />

      <div className="min-w-full bg-gradient-to-b from-slate-500 to-blue-950">.</div>

      <Image className="z-[2] min-w-full" src={Aibackground} alt="Background of future" />

      {/*<div className="z-[2] text-xl text-white mt-[-2rem] ">IM ON TOP LMAOOO</div>*/}

      <div className="bg-blue-900 px-12">
        <div className="bg-slate-400 text-white  px-2 py-6">
          <div className="flex justify-evenly py-2 bg-blue-800 mx-auto ">
            <p>Key benefits</p>
            <p>AI-enhanced EDA Suite</p>
            <p>News</p>
            <p>Chips for AI Applications</p>
            <p>Testimonials</p>
            <p>Resources</p>
            <p>Contact Sales</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home