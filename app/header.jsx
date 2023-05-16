import React from "react";
// import Logo from "../public/Logo.png"
// import Glass from "../public/magnifying-glass.png"

function Header() {

    return (
        <div>
            <div className="px-16">
                <div className="flex justify-between items-center">

                    <div>
                        <img src='/noiseless/public/Logo.png' height={64} width={199} alt="logo" />
                    </div>
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

                                <img src="/noiseless/public/magnifying-glass.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header