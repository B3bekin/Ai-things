import React from "react"
import Image from "next/image.js"
import Header from "./header"
import Footer from "./footer"

import Aibackground from "../public/ai-background.png"
import Brains from "../public/brain.png"
import Bulb from "../public/bulb.png"
import Speed from "../public/speedometer.png"
import Graph from "../public/graph.png"

import Pink from "../public/ai-tres.png"
import Green from "../public/ai-qautros.png"
import DarkBlue from "../public/ai-uno.png"
import Orange from "../public/ai-dos.png"

function Home() {

  return (
    <div className="min-h-screen">

      <Header />

      <Image className="z-[2] min-w-full" src={Aibackground} alt="Background of future" />

      <div className="z-[2] absolute top-[17%] left-[23%] sm:top-[20%] sm:left-[29%] lg:top-[27%] lg:left-[33%] ">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl">AI Machine learning</h1>
      </div>

      {/*<div className="z-[2] text-xl text-white mt-[-2rem] ">IM ON TOP LMAOOO</div>*/}


      {/*nejde mi locknout ten wrap na 2 radky. Bud se to newrapuje vubec nebo se to natahne na 3 a vic radku 😫*/}

      <div className="flex flex-row flex-wrap text-white bg-white gap-px cursor-pointer">
        <p className="bg-blue-900 flex-grow cursor-default" />
        <p className="bg-blue-900 p-11 hover:bg-blue-800">Key benefits</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">AI-enhanced EDA Suite</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">News</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">Chips for AI Applications</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">Testimonials</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">Resources</p>
        <p className="bg-blue-900 p-11 hover:bg-blue-800">Contact Sales</p>
        <p className="bg-blue-900 flex-grow cursor-default" />
      </div>

      <h2 className="pt-11 pb-3 text-3xl text-center text-blue-800">Unleash the power of kreate.ai</h2>
      <p className="text-center pb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, assumenda necessitatibus quo consequuntur totam blanditiis nulla vero, quos aperiam cumque alias odio, culpa dolorem iusto quisquam?</p>

      <div className="min-w-full px-5 mb-10 bg-slate-300">
        <div className="flex flex-col gap-7 md:flex-row md:py-10 md:gap-16">
          <p className="flex-grow" />
          <div>
            <Image className="mx-auto" src={Graph} alt="going up" />
            <h2 className="text-blue-800 text-center text-xl hover:font-semibold cursor-pointer">Maximize Chip Potential</h2>
            <p className="text-center"> Push the limits of silicone value with our <br /> AI-driven design solutions.</p>
          </div>
          <div>
            <Image className="mx-auto" src={Brains} alt="Not zombies" />
            <h2 className="text-blue-800 text-center text-xl hover:font-semibold cursor-pointer">Power AI SoCs</h2>
            <p className="text-center ">Accelerate AI Soc with our optimized <br />IP for diverse protocols.</p>
          </div>
          <div>
            <Image className="mx-auto" src={Bulb} alt="What an Idea" />
            <h2 className="text-blue-800 text-center text-xl hover:font-semibold cursor-pointer">AI iInnovation of future</h2>
            <p className="text-center">Discover a new way to interact with AI  <br />architecture faster with emulating solutions.</p>
          </div>
          <div>
            <Image className="mx-auto" src={Speed} alt="Imma fast boi" />
            <h2 className="text-blue-800 text-center text-xl hover:font-semibold cursor-pointer">Converge your AI faster</h2>
            <p className="text-center">Power, performance and battery are the  <br /> main tradeoffs using AI computing.</p>
          </div>
          <p className="flex-grow" />
        </div>
      </div>

      <div className="px-20">

        {/*<div className="flex flex-row">

          <div>
            <Image className="row-start-0 row-end-2 grid grid-cols-1" width={400} height={250} src={Pink} alt="Ai" />
            <div className="row-start-2 row-end-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium Et harum quidem rerum facilis est et expedita distinctio. Etyo prosto solo. Solo enijeals.</div>
          </div>

          <div>
            <Image className="row-start-0 row-end-2" width={400} height={250} src={Green} alt="Ai" />
            <div className="row-start-2 row-end-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium Et harum quidem rerum facilis est et expedita distinctio. Etyo prosto solo. Solo enijeals.</div>
          </div>

          <div>
            <Image className="row-start-0 row-end-2" width={400} height={250} src={DarkBlue} alt="Ai" />
            <div className="row-start-2 row-end-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium Et harum quidem rerum facilis est et expedita distinctio. Etyo prosto solo. Solo enijeals.</div>
          </div>

        </div>*/}

        <div className="pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-7">
            <div className="sm:bg-blue-900" />
            <div className="col-span-1 md:col-span-5">
              <div className="flex flex-row flex-wrap xl:flex-nowrap">
                <div className="bg-blue-900 p-5 cursor-pointer">
                  <Image src={Pink} />
                  <div className=" bg-white p-2">
                    <h1 className="text-3xl font-semibold">Standart</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora accusantium, quod.</p>
                  </div>
                </div>
                <div className="bg-blue-900 p-5 cursor-pointer">
                  <Image src={DarkBlue} />
                  <div className="bg-white p-2">
                    <h1 className="text-3xl font-semibold">Premium </h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora accusantium, quod.</p>
                  </div>
                </div>
                <div className="bg-blue-900 p-5 cursor-pointer">
                  <Image src={Orange} />
                  <div className="bg-white p-2">
                    <h1 className="text-3xl font-semibold">Premium Gold</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora accusantium, quod.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:bg-blue-900" />
          </div>
        </div>

        <div>
          <h1 className="text-5xl font-semibold text-blue-800 pl-12 sm:pl-24 md:pl-48">Powerfull machines build by us</h1>
          <p className="pt-4 pb-5 pl-3 sm:pl-44">We are the best at what we do. Why? Because:</p>
          <ul className="pl-0 pb-16 font-semibold leading-loose sm:pl-24 sm:pb-16 sm:font-semibold sm:leading-loose">
            <li>🔷 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet ab quaerat nihil. Officiis commodi, et at consectetur deleniti, perspiciatis libero.</li>
            <li>🔷 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis risus.</li>
            <li>🔷 Etiam neque. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem.</li>
            <li>🔷 Nullam faucibus mi quis velit. Nam quis nulla. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</li>
          </ul>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home