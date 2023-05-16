import React from "react";
import Image from "next/image"

import Logo from "../public/Logo.png"
import Glass from "../public/magnifying-glass.png"

function Header() {

    return (
        <div>
            <div className="px-16 bg-gradient-to-b from-white to-blue-300">
                <div className="flex justify-between items-center">


                    <Image src={Logo} width={199} height={64} alt="logo" />

                    {/* <h1 className="text-5xl">Kreate</h1> */}

                    <ul className="text-2xl flex gap-10 items-center">
                        <li>Solutions</li>
                        <li>Products</li>
                        <li>Support</li>
                        <li>News</li>
                    </ul>

                    <div className="text-2xl">
                        <div className="bg-slate-600 text-white ">
                            <div className="flex min-w-[12px] gap-5">
                                <p>search</p>

                                <Image src={Glass} alt="search"/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header