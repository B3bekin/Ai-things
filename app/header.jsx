import React from "react";
import Image from "next/image"

import Logo from "../public/Logo.png"
import Glass from "../public/magnifying-glass.png"


function Header() {

    return (
        <div>
            <div className="px-16 bg-gradient-to-b from-white to-slate-500">
                <div className="flex justify-between items-center py-3">

                    <Image src={Logo} width={199} height={64} alt="logo" />

                    {/* <h1 className="text-5xl">Kreate</h1> */}

                    <ul className="text-3xl flex gap-10 items-center">
                        <li>Solutions</li>
                        <li>Products</li>
                        <li>Support</li>
                        <li>News</li>
                    </ul>

                    <div className="text-2xl">
                        <div className="bg-white px-0.5">
                            <div className="flex gap-14 ml-24">
                                <p className="mr-7">search</p>

                                <Image src={Glass} width={30} height={30} alt="search"/>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header