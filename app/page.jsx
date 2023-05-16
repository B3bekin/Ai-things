import React from "react"
import Image from "next/image.js"

import Head from "./header.jsx"

import Aibackground from "../public/ai-background.png"

function Home() {

  return (
    <div>

      <Head className="sticky" />

      <div className="min-w-full bg-gradient-to-b from-slate-500 to-blue-950">.</div>

      <Image className="z-[2] min-w-full" src={Aibackground} alt="Background of future" />

      <div className=" text-xl text-white mt-[-2rem] ">IM ON TOP LMAOOO</div>

      <div className="bg-green-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eaque non cumque cum tempore saepe provident, omnis impedit alias necessitatibus inventore laboriosam consequuntur esse facere ullam minima sed dolor earum.
      </div>

    </div>
  )
}

export default Home