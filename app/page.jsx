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
          <div className="flex justify-evenly bg-blue-800 mx-auto ">
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

      <h2 className="pt-5 pb-3">Unleash the power of kreate.ai</h2>
      <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, assumenda necessitatibus quo consequuntur totam blanditiis nulla vero, quos aperiam cumque alias odio, culpa dolorem iusto quisquam?</p>

      <div className="min-w-full min-h-screen px-5">
        <div className="flex flex-row">
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