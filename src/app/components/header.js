'use client'
import React, { useState } from 'react';
import Link from 'next/link';


function Header() {
    const [menu, setMenu] = useState(false);
    return (
        <header className="px-[2rem] py-6 md:px-[4.5rem] md:py-10 text-sm flex justify-between relative z-50">
            <div data-cursor="-exclusion">design &amp; <br />development</div>
            <div className="uppercase text-xl cursor-default" data-cursor="-exclusion">salt &amp; paper</div>
            <div>
                <img onClick={() => setMenu(!menu)} className="relative z-30 cursor-pointer" src="/images/burgerIcon.svg" alt="Menu" />
                <div className={`fixed flex justify-center items-center w-screen h-screen bg-[#d54c4c] inset-0 z-20 transition-all duration-500 ${ menu ? "translate-y-0" : "translate-y-[-100%]" }`}>
                    <div className="flex w-full h-full p-[150px]">
                        <div className="flex flex-col pt-36 pl-40 w-[50%]">
                            <div className="text-white text-9xl"><h2>about</h2></div>
                            <div className="text-white text-9xl"><h2>brands</h2></div>
                            <div className="text-white text-9xl"><h2>contact</h2></div>
                        </div>
                        <div className="flex flex-col pt-36 pl-40 w-[50%]">
                            <div className="text-white text-9xl"><h2>work</h2></div>
                            <div className="text-white text-9xl"><h2>play</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
