import React from "react"
import Head from "./header.jsx"
import Aibackground from "../public/ai-background.png"

function Home() {

  return (
    <div>

      <Head />

      <Img src={Aibackground} alt="Background of future"/>

      <div className="bg-green-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eaque non cumque cum tempore saepe provident, omnis impedit alias necessitatibus inventore laboriosam consequuntur esse facere ullam minima sed dolor earum.
      </div>

    </div>
  )
}

export default Home