import Image from "next/image"
import {Icon} from '@iconify/react'
import Link from "next/link"
import { FooterLinks, SocialLinks } from "@/constants"

const Footer = () => {

    const tosYear = new Date().getFullYear()
    
    return (
        <footer className="flex relative border-t border-gray-100 bg-[url('/footer-bg.jpg')] bg-cover bg-center">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 bg-gray-900/80 w-full">
                <div className="flex flex-col justified-start items-start gap-2 cursor-pointer">
                    <a href="/">
                        <Image 
                            src='/ot_investment_dark_mode.svg'
                            alt="logo"
                            width={150}
                            height={35}
                            className="object-contain"
                            priority
                        />
                    </a>
                    
                    <div className="text-white">
                        All rights reserved &copy; {tosYear}
                    </div>
                </div>
            
                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                    {FooterLinks.map((link, index) => (
                        <div key={index} className="flex flex-col gap-6 text-base min-w-[170px]">
                            <h3 className="font-bold text-[#F5B429]">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-white"
                                    target="_blank"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                
                    {SocialLinks.map((link, index) => (
                        <div key={index} className="flex flex-col gap-6 text-base min-w-[170px]">
                            <h3 className="font-bold text-[#F5B429]">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-white"
                                    target="_blank"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer