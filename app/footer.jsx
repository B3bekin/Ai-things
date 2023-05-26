import React from "react";
import Image from "next/image";

import LogoSVG from "../public/Logo.svg"

function Footer() {

    return (
        <div>

            <div className="bg-gray-700 py-10 ">
                <div className="text-white">
                    <div className="flex flex-col gap-7  md:flex-row md:justify-evenly">
                        <div className="flex flex-col justify-center pl-40 md:pl-0">
                            <Image className="pb-3" src={LogoSVG} width={110} />
                            <div className="flex leading-loose flex-col gap-7 sm:flex-row sm:gap2 sm:leading-loose">
                                <ul className="pl-5 cursor-pointer">
                                    <li className="text-gray-300 hover:text-white">Contacts</li>
                                    <li className="text-gray-300 hover:text-white">Abouts us</li>
                                    <li className="text-gray-300 hover:text-white">Jobs</li>
                                    <li className="text-gray-300 hover:text-white">FAQ</li>
                                </ul>
                                <ul className="pl-5 cursor-pointer">
                                    <li className="text-gray-300 hover:text-white">Solutions</li>
                                    <li className="text-gray-300 hover:text-white">Products</li>
                                    <li className="text-gray-300 hover:text-white">Support</li>
                                    <li className="text-gray-300 hover:text-white">News</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex items-center">
                                <h1 className="italic text-4xl text-white font-semibold">Best at what we do!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 p-2 font-light">
                <p className="text-gray-500 text-center text-sm">All copy rights served 2023</p>
            </div>
        </div>

    )
}

export default Footer