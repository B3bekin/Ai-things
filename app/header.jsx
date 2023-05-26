import React from "react";
import Image from "next/image"

import LogoSVG from "../public/Logo.svg"
import Glass from "../public/magnifying-glass.png"
import Menu from "../public/menU.png"
 
function Header() {

    return (
        <div className="top-0 left-0 sticky z-[3]">
            
            {/* bg-pink-500 sm:bg-green-500 lg:bg-slate-500*/}
            <div className="px-16 bg-gradient-to-b from-white to-slate-500">
                <div className="flex justify-between items-center py-3">

                    <Image src={LogoSVG} alt="logo" className="pr-3 cursor-pointer"/>

                    {/* <h1 className="text-5xl">Kreate</h1> */}

                    <ul className="hidden lg:text-3xl lg:flex gap-10 items-center cursor-pointer">
                        <li className="hover:underline">Solutions</li>
                        <li className="hover:underline">Products</li>
                        <li className="hover:underline">Support</li>
                        <li className="hover:underline">News</li>
                    </ul>

                    <div className="text-2xl flex flex-row gap-3">
                        <div className="overflow-hidden bg-white  rounded-md px-0.5">
                            <div className="flex gap-14 ml-24">
                                <p className="mr-7 text-gray-500">search</p>
                                <Image src={Glass} width={30} height={30} alt="search" className="cursor-pointer" />
                            </div>
                        </div>

                        <div className=" lg:hidden cursor-pointer">
                            <Image src={Menu} width={40} height={40} />
                        </div>
                    </div>

                </div>

            </div>
            <div className="min-w-full bg-gradient-to-b from-slate-500 to-blue-950">.</div>
        </div>
    )
}

export default Header