import React from 'react';
import menuIcon from 'public/images/Menu-Burger.svg';
import Link from 'next/link';


function Header() {
    return (
        <header className="px-[2rem] py-6 md:px-[4.5rem] md:py-10 text-sm flex justify-between">
            <div>design &amp; <br />development</div>
            <div className="uppercase text-xl">salt &amp; paper</div>
            <div>
                <img src={menuIcon} alt="Menu" />
                <div className="flex gap-4">
                    <Link href="./">
                        Home
                    </Link>
                    <Link href="./portfolio">
                        Portfolio
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
