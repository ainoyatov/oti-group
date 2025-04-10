'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MobileMenuLinks } from "@/constants";

const MobileMenu = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleClickMobile = () => {
        setIsMobile(() => !isMobile);
    }

    const router = useRouter();
    
    const handleClick = () => {
        router.push('/');
    }

    return (
        <div className="flex w-full">
            <div className="lg:hidden">
                <button
                    onClick={handleClickMobile}
                    type="button"
                    className="relative ml-1 inline-flex items-center justify-center rounded-md p-2 text-gray-900 dark:text-gray-200 action:bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        </div>
    );
}

export default MobileMenu;