'use client'

import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenuLinks } from "@/constants";

export default function TopMenu() {
    const pathname = usePathname();

    const [isMobile, setIsMobile] = useState(false);

    const handleClickMobile = () => {
        setIsMobile(() => !isMobile);
    }

    return (
        <div className='bg-cyan-900 w-full'>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    {/* Desktop Menu */}
                    <div className="flex flex-1 items-center justify-between">
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
                    </div>

                    
                    
                    {/* Mobile menu */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={handleClickMobile}
                            type="button"
                            className="relative ml-1 inline-flex items-center justify-center border border-white rounded-md p-2 text-gray-900 dark:text-gray-200 action:bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {
                                isMobile ? (
                                    <div>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div>
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </div>
                                )
                            }
                        </button>
                    </div>

                </div>
            </div>

            { isMobile? (
                <div>
                    {MobileMenuLinks.map((menu) => (
                        <a
                            key={menu.label}
                            href={menu.href}
                            className="block rounded-md px-2 py-2 text-base font-medium text-gray-900 dark:invert hover:bg-gray-300"
                        >
                            {menu.label}
                        </a>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}



// export default function TopMenu() {
//     const pathname = usePathname();

//     return (
//         <div className='flex flex-wrap justify-between p-6 gap-5 sm:px-12'>
//             <a className='flex' href='/'>
//                 <>
//                     <Image
//                         src="/ot_investment_light_mode.svg"
//                         alt="main logo"
//                         width={150}
//                         height={1}
//                         className="block dark:hidden"
//                     />
//                     <Image
//                         src="/ot_investment_dark_mode.svg"
//                         alt="main logo dark"
//                         width={150}
//                         height={1}
//                         className="hidden dark:block"
//                     />
//                 </>
//             </a>

//             <div className="flex items-center">
//                 <div className="flex max-lg:hidden">
//                     <ul className="flex ">
//                         {NavLinks.map((links) => {
//                             const isActive = pathname === links.href;
//                             return (
//                                 <li key={links.label} className="px-2">
//                                     <Link
//                                         href={links.href}
//                                         className={`inline-block text-xl transition-transform transform hover:scale-110 hover:text-[#F5B429] ${
//                                             isActive ? "text-[#F5B429]" : ""
//                                         }`}
//                                         >
//                                         {links.label}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>    
//             </div>

//             <div className="flex items-center">
//                 <a href="tel:+16822677741">
//                     <button className="flex flex-row p-2 px-4 gap-2 text-xl items-center cursor-pointer transition-transform transform hover:scale-125 active:scale-125 bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md shadow-2xl max-lg:hidden">
//                         <Icon icon="mingcute:phone-call-fill" width={24} height={24} />
//                         <div>682-267-7741</div>
//                     </button>
//                 </a>
//             </div>
            
//         </div>
//     );
// }