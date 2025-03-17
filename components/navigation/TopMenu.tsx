import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function TopMenu() {

    return (
        <div className='flex min-h-auto flex-row justify-between  sm:px-6 sm:mt-8'>
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
                                    className="text-2xl"
                                >
                                    {links.label}
                                </Link>
                            </li>
                        ))}  
                    </ul>
                </div>
            </div>

            <div className="flex items-center text-2xl p-4 bg-blue-500 text-white max-lg:hidden">
                682-267-7741
            </div>
            
        </div>
    )
}