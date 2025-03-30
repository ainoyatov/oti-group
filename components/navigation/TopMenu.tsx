'use client'

import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function TopMenu() {
    const pathname = usePathname();

    return (
        <div className='flex min-h-auto flex-wrap justify-between p-6 gap-5 sm:px-16'>
            <a className='flex h-[150px]' href='/'>
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

            <div className="flex flex-row">
                <div className="flex h-[150px] max-lg:hidden">
                    <ul className="flex h-[150px] items-center">
                        {NavLinks.map((links) => {
                            const isActive = pathname === links.href;
                            return (
                                <li key={links.label} className="p-2 text-left">
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

            <div className="flex items-center p-6">
                <a href="tel:+16822677741">
                    <button className="flex flex-row p-2 px-4 gap-2 text-2xl items-center cursor-pointer transition-transform transform hover:scale-125 active:scale-125 bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md shadow-2xl max-lg:hidden">
                        <Icon icon="mingcute:phone-call-fill" width={24} height={24} />
                        <span>682-267-7741</span>
                    </button>
                </a>
            </div>
        </div>
    );
}