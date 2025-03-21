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

            <div className="flex flex-row items-center text-2xl px-4 m-6 bg-blue-500 text-white max-lg:hidden">
                <div className="mr-4">
                    <Icon icon="carbon:phone-filled" width="32" height="32" />
                </div> 
                <a href="tel:+16822677741">682-267-7741</a>
            </div>
            
        </div>
    )
}