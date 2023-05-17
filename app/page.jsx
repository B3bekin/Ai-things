import React from "react"
import Image from "next/image.js"

import Head from "./header.jsx"

import Aibackground from "../public/ai-background.png"

function Home() {

  return (
    <div className="min-h-screen">

      <Head className="sticky" />

      <div className="min-w-full bg-gradient-to-b from-slate-500 to-blue-950">.</div>

      <Image className="z-[2] min-w-full" src={Aibackground} alt="Background of future" />

      {/*<div className="z-[2] text-xl text-white mt-[-2rem] ">IM ON TOP LMAOOO</div>*/}



      <div className="flex justify-cente text-white bg-white gap-px">
        <p className="bg-blue-900 flex-grow" />
        <p className="bg-blue-900 p-11">Key benefits</p>
        <p className="bg-blue-900 p-11">AI-enhanced EDA Suite</p>
        <p className="bg-blue-900 p-11">News</p>
        <p className="bg-blue-900 p-11">Chips for AI Applications</p>
        <p className="bg-blue-900 p-11">Testimonials</p>
        <p className="bg-blue-900 p-11">Resources</p>
        <p className="bg-blue-900 p-11">Contact Sales</p>
        <p className="bg-blue-900 flex-grow" />
      </div>

      <h2 className="pt-11 pb-3 text-3xl text-center text-blue-800">Unleash the power of kreate.ai</h2>
      <p className="text-center pb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, assumenda necessitatibus quo consequuntur totam blanditiis nulla vero, quos aperiam cumque alias odio, culpa dolorem iusto quisquam?</p>

      <div className="min-w-full px-5 bg-slate-300">
        <div className="flex flex-row py-10">
          <div>
            <h2 className="text-blue-800 text-center text-xl">Maximize Chip Potential</h2>
            <p className="text-center"> Push the limits of silicone value with our AI-driven design solutions.</p>
          </div>
          <div>
            <h2 className="text-blue-800 text-center text-xl">Power AI SoCs</h2>
            <p className="text-center ">Accelerate AI Soc with our optimized IP for diverse protocols.</p>
          </div>
          <div>
            <h2 className="text-blue-800 text-center text-xl">AI iInnovation of future</h2>
            <p className="text-center">Discover a new way to interact with AI architecture faster with emulating solutions.</p>
          </div>
          <div>
            <h2 className="text-blue-800 text-center text-xl">Converge your AI faster</h2>
            <p className="text-center">Power, performance and battery are the main tradeoffs using AI computing.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home