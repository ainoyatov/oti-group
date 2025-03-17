import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function TopMenu() {

    return (
        <div className='flex min-h-auto flex-row justify-between px-4 sm:px-12 sm:mt-8'>
            <a className='flex h-[100px] ' href='/'>
               <Image src="/top-menu-logo.png" alt="main logo" width={150} height={1} className=''/> 
            </a>

            <div className="flex flex-row">
                <div className="flex h-[100px] max-lg:hidden">
                    <ul className="flex h-[100px] justify-center">
                        {NavLinks.map((links) => (
                            <li key={links.label} className="mt-4 p-2 text-xl  text-left">
                                <Link
                                    href={links.href}
                                    className="text-2xl p-2"
                                >
                                    {links.label}
                                </Link>
                            </li>
                        ))}  
                    </ul>
                </div>
            </div>

            {/* <div className="flex">
                <a href="tel:+16822677741" className="flex items-center p-4 text-white font-semibold bg-blue-500">
                    682-267-7741
                </a>
            </div> */}
            
        </div>
    )
}