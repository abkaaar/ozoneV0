"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"




const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                   <Image src="/assets/logo.png" alt="ozone-logo" width={100} height={30} />
                   </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* <a href="#about" className="text-white hover:text-gray-300">
              About Us
            </a> */}
                    {/* <div className="relative group">
              <button className="text-white hover:text-gray-300 flex items-center">
                Solutions
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a href="#investments" className="text-white hover:text-gray-300">
              Investments
            </a> */}
            <Link href={"/about"} className='text-white hover:text-gray-300'>
            About Us
            </Link>
                    <NavigationMenu className="">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-base'>Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col gap-6 p-4  md:grid-cols-1 w-[400px] lg:w-[350px] md:w-[350px] bg-black text-white">
                                        <Link href="/">
                                            <NavigationMenuLink>Electric Mobility Solution</NavigationMenuLink>
                                    </Link>
                                        <Link href="/">
                                            <NavigationMenuLink>Liquid Tree Technology</NavigationMenuLink>
                                        </Link>
                                        <Link href="/">
                                            <NavigationMenuLink>Autogas Vehicle Conversion</NavigationMenuLink>
                                        </Link>
                                        <Link href="/">
                                            <NavigationMenuLink>Autogas Vehicle Conversion</NavigationMenuLink>
                                        </Link>
                                        <Link href="/">
                                            <NavigationMenuLink>Ozone Prepaid Fuel Card</NavigationMenuLink>
                                        </Link>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                          
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href={"/about"} className='text-white hover:text-gray-300'>
            Investments
            </Link>
                </div>

                {/* Contact Button */}
                <div className="hidden md:flex">
                    <button className="bg-white text-black px-8 py-4 rounded-none hover:bg-gray-100">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <a
                        href="#about"
                        className="block text-white hover:text-gray-300 py-2 px-4"
                    >
                        About Us
                    </a>
                    <a
                        href="#solutions"
                        className="block text-white hover:text-gray-300 py-2 px-4"
                    >
                        Solutions
                    </a>
                    <a
                        href="#investments"
                        className="block text-white hover:text-gray-300 py-2 px-4"
                    >
                        Investments
                    </a>
                    <div className="px-4 py-2">
                        <button className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-100">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;