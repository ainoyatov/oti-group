import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {Icon} from '@iconify/react'

export default function TopMenu() {

    return (
        <div className='flex min-h-auto flex-row justify-between p-2'>
            <a className='flex h-[100px] ' href='/'>
               <Image src="/top-menu-logo.png" alt="main logo" width={150} height={1} className=''/> 
            </a>

            <div className="flex flex-row">
                <div className="flex h-[100px] max-lg:hidden">
                    <ul className="flex h-[100px] items-center">
                        {NavLinks.map((links) => (
                            <li key={links.label} className="p-2 text-left">
                                <Link
                                    href={links.href}
                                    className="text-xl"
                                >
                                    {links.label}
                                </Link>
                            </li>
                        ))}  
                    </ul>
                </div>
            </div>

            
            <a href="tel:+16822677741">
                <button className="flex flex-row p-2 px-4 gap-2 m-6 text-2xl items-center cursor-pointer transition-transform transform hover:scale-125 active:scale-125  bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md max-lg:hidden">
                    <Icon icon="carbon:phone-filled" width={24} height={24} />
                    <span>Free Cash Offer</span>
                </button>
            </a>
            
        </div>
    )
}