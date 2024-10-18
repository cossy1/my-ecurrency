"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import AppLogo from "/public/svg/app-logo.svg";
import Image from "next/image";
import { NAVITEMS } from "@/constants/navItems";
import { usePathname } from "next/navigation";

const AppHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pathname = usePathname();

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto lg:mx-0 px-4 sm:px-6 lg:pl-[150px] lg:pr-8">
                <div className="flex justify-between sm:justify-start space-x-[170px] h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src={AppLogo}
                            alt=""
                            height={62}
                            width={92}
                            className="object-contain"
                        />
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:space-x-16">
                        {NAVITEMS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className={`${pathname === item.link ? "font-black" : "font-normal"} text-[#12305B] inline-flex items-center px-1 pt-1 text-sm font-medium`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mr-2 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 flex flex-col pb-3 space-y-1">
                        {NAVITEMS.map((item, index) => (
                            <div key={index} onClick={toggleMenu}>
                                <Link
                                    href={item.link}
                                    className={`${pathname === item.link ? "font-bold" : "font-normal"} text-[#12305B] inline-flex items-center px-1 my-1 text-sm font-medium bg-blue-50 pl-3 w-full pr-4 py-2`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default AppHeader;
