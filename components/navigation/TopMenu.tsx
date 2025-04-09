'use client'

import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function TopMenu() {
    const pathname = usePathname();

    return (
        <div className='flex  flex-wrap justify-between p-6 gap-5 sm:px-12'>
            <a className='flex' href='/'>
                <>
                    <Image
                        src="/ot_investment_light_mode.svg"
                        alt="main logo"
                        width={150}
                        height={1}
                        className="block dark:hidden"
                    />
                    <Image
                        src="/ot_investment_dark_mode.svg"
                        alt="main logo dark"
                        width={150}
                        height={1}
                        className="hidden dark:block"
                    />
                </>
            </a>

            <div className="flex items-center">
                <div className="flex max-lg:hidden">
                    <ul className="flex ">
                        {NavLinks.map((links) => {
                            const isActive = pathname === links.href;
                            return (
                                <li key={links.label} className="px-2">
                                    <Link
                                        href={links.href}
                                        className={`inline-block text-xl transition-transform transform hover:scale-110 hover:text-[#F5B429] ${
                                            isActive ? "text-[#F5B429]" : ""
                                        }`}
                                        >
                                        {links.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>    
            </div>

            <div className="flex items-center">
                <a href="tel:+16822677741">
                    <button className="flex flex-row p-2 px-4 gap-2 text-xl items-center cursor-pointer transition-transform transform hover:scale-125 active:scale-125 bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md shadow-2xl max-lg:hidden">
                        <Icon icon="mingcute:phone-call-fill" width={24} height={24} />
                        <div>682-267-7741</div>
                    </button>
                </a>
            </div>

            <div className="flex items-center">
                <MobileMenu />
            </div>

            
        </div>
    );
}