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

                    <Link href={"/about"} className='text-white hover:text-gray-300'>
                        About Us
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-base'>Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col gap-6 px-6 py-6  md:grid-cols-1 w-[400px] lg:w-[320px] md:w-[350px] bg-black text-white rounded-none">
                                        <Link href={"/electric"}>
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.0491 11.7617L9.54911 23.0117C9.43784 23.1305 9.29097 23.2098 9.13065 23.2377C8.97034 23.2657 8.80528 23.2407 8.66039 23.1667C8.5155 23.0926 8.39863 22.9734 8.32743 22.827C8.25623 22.6807 8.23455 22.5152 8.26568 22.3555L9.64005 15.4808L4.23724 13.452C4.12121 13.4086 4.01773 13.3372 3.93606 13.244C3.85439 13.1508 3.79706 13.0389 3.76921 12.9182C3.74135 12.7975 3.74383 12.6718 3.77642 12.5522C3.80902 12.4327 3.87071 12.3231 3.95599 12.2333L14.456 0.983274C14.5673 0.864526 14.7141 0.785191 14.8744 0.75724C15.0348 0.729289 15.1998 0.75424 15.3447 0.828326C15.4896 0.902412 15.6065 1.02161 15.6777 1.16794C15.7489 1.31428 15.7705 1.47979 15.7394 1.63952L14.3613 8.52171L19.7641 10.5476C19.8793 10.5913 19.9819 10.6627 20.063 10.7555C20.144 10.8483 20.2009 10.9596 20.2287 11.0796C20.2565 11.1996 20.2544 11.3246 20.2224 11.4436C20.1904 11.5626 20.1296 11.6718 20.0454 11.7617H20.0491Z" fill="white" />
                                                </svg>

                                                <span>  Electric Mobility Solution</span>
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/liquid">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 17.6108C12.2406 17.771 12.4911 17.9156 12.75 18.0439V21.7498C12.75 21.9487 12.671 22.1395 12.5304 22.2802C12.3897 22.4208 12.1989 22.4998 12 22.4998C11.8011 22.4998 11.6103 22.4208 11.4697 22.2802C11.329 22.1395 11.25 21.9487 11.25 21.7498V18.0439C11.509 17.9156 11.7595 17.771 12 17.6108ZM18.5719 5.86765C18.0294 4.57225 17.1161 3.46609 15.9468 2.68813C14.7775 1.91017 13.4044 1.49512 12 1.49512C10.5956 1.49512 9.2225 1.91017 8.05323 2.68813C6.88397 3.46609 5.97069 4.57225 5.42815 5.86765C4.25647 6.40318 3.26333 7.26409 2.56693 8.34791C1.87054 9.43173 1.50021 10.6928 1.50002 11.9811C1.49065 15.5623 4.50002 18.6561 8.07565 18.7498C9.17541 18.7759 10.265 18.5336 11.25 18.0439V14.713L7.1644 12.6711C6.98637 12.5821 6.851 12.426 6.78805 12.2372C6.72511 12.0483 6.73976 11.8422 6.82877 11.6642C6.91779 11.4862 7.07387 11.3508 7.2627 11.2879C7.45153 11.2249 7.65762 11.2396 7.83565 11.3286L11.25 13.0367V8.24984C11.25 8.05092 11.329 7.86016 11.4697 7.71951C11.6103 7.57885 11.8011 7.49984 12 7.49984C12.1989 7.49984 12.3897 7.57885 12.5304 7.71951C12.671 7.86016 12.75 8.05092 12.75 8.24984V10.7867L16.1644 9.07859C16.2525 9.03451 16.3485 9.00823 16.4468 9.00124C16.5451 8.99426 16.6438 9.0067 16.7373 9.03787C16.8308 9.06903 16.9173 9.11831 16.9917 9.18288C17.0662 9.24746 17.1272 9.32606 17.1713 9.41421C17.2153 9.50236 17.2416 9.59833 17.2486 9.69664C17.2556 9.79494 17.2432 9.89366 17.212 9.98716C17.1808 10.0807 17.1315 10.1671 17.067 10.2416C17.0024 10.316 16.9238 10.377 16.8356 10.4211L12.75 12.463V18.0439C13.6824 18.5069 14.709 18.7484 15.75 18.7498H15.9206C19.5 18.6561 22.5103 15.5623 22.5 11.9811C22.4998 10.6928 22.1295 9.43173 21.4331 8.34791C20.7367 7.26409 19.7436 6.40318 18.5719 5.86765Z" fill="white" />
                                                </svg>

                                                <span>
                                                    Liquid Tree Technology
                                                </span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/conversion">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.7483 8.99981C21.7494 10.1224 21.4706 11.2275 20.937 12.2152C20.4033 13.2028 19.6318 14.0418 18.6923 14.6561C17.7527 15.2704 16.6748 15.6407 15.556 15.7335C14.4373 15.8263 13.3131 15.6385 12.2852 15.1873L7.40456 20.8329C7.39331 20.8461 7.38019 20.8601 7.368 20.8723C6.80533 21.435 6.04218 21.7511 5.24644 21.7511C4.4507 21.7511 3.68755 21.435 3.12487 20.8723C2.5622 20.3096 2.24609 19.5465 2.24609 18.7508C2.24609 17.955 2.5622 17.1919 3.12487 16.6292C3.138 16.617 3.15112 16.6039 3.16519 16.5926L8.81081 11.7129C8.305 10.5559 8.13356 9.28023 8.31595 8.03069C8.49834 6.78115 9.02725 5.60772 9.84269 4.64353C10.6581 3.67933 11.7275 2.96294 12.9294 2.57564C14.1313 2.18833 15.4177 2.14561 16.6427 2.45231C16.769 2.48396 16.8848 2.54794 16.9789 2.63794C17.0729 2.72795 17.1419 2.84089 17.1791 2.96565C17.2163 3.09041 17.2204 3.2227 17.1909 3.34951C17.1614 3.47632 17.0995 3.59327 17.0111 3.68888L13.4983 7.49981L14.0289 9.97013L16.4983 10.4998L20.3092 6.98231C20.4049 6.89395 20.5218 6.832 20.6486 6.80254C20.7754 6.77308 20.9077 6.77714 21.0325 6.81431C21.1572 6.85149 21.2702 6.9205 21.3602 7.01455C21.4502 7.10861 21.5142 7.22447 21.5458 7.35075C21.6804 7.89011 21.7484 8.44392 21.7483 8.99981Z" fill="white" />
                                                </svg>

                                                <span>Autogas Vehicle Conversion</span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/financing">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.8975 5.62534C22.7895 5.55795 22.6662 5.51915 22.5391 5.51259C22.412 5.50603 22.2853 5.53192 22.1709 5.58784C18.1462 7.55659 15.2719 6.63409 12.2334 5.66096C9.0375 4.64377 5.7375 3.58909 1.17094 5.81846C1.04482 5.88004 0.938513 5.97577 0.8641 6.09476C0.789687 6.21375 0.750156 6.35124 0.75 6.49159V17.735C0.749982 17.8623 0.782342 17.9874 0.844035 18.0987C0.905728 18.21 0.994725 18.3038 1.10265 18.3712C1.21057 18.4386 1.33388 18.4775 1.46096 18.4841C1.58804 18.4907 1.71471 18.4649 1.82906 18.4091C5.85375 16.4403 8.72812 17.3628 11.7712 18.336C13.575 18.9125 15.4125 19.5003 17.49 19.5003C19.0922 19.5003 20.8397 19.1516 22.8253 18.1822C22.9514 18.1206 23.0577 18.0249 23.1322 17.9059C23.2066 17.7869 23.2461 17.6494 23.2463 17.5091V6.26565C23.2474 6.13807 23.2159 6.01231 23.1549 5.90026C23.0939 5.78822 23.0053 5.69359 22.8975 5.62534ZM4.5 14.2503C4.5 14.4492 4.42098 14.64 4.28033 14.7807C4.13968 14.9213 3.94891 15.0003 3.75 15.0003C3.55109 15.0003 3.36032 14.9213 3.21967 14.7807C3.07902 14.64 3 14.4492 3 14.2503V8.25034C3 8.05142 3.07902 7.86066 3.21967 7.72001C3.36032 7.57935 3.55109 7.50034 3.75 7.50034C3.94891 7.50034 4.13968 7.57935 4.28033 7.72001C4.42098 7.86066 4.5 8.05142 4.5 8.25034V14.2503ZM12 15.0003C11.4067 15.0003 10.8266 14.8244 10.3333 14.4947C9.83994 14.1651 9.45542 13.6966 9.22836 13.1484C9.0013 12.6002 8.94189 11.997 9.05764 11.4151C9.1734 10.8331 9.45912 10.2986 9.87868 9.87902C10.2982 9.45946 10.8328 9.17374 11.4147 9.05798C11.9967 8.94222 12.5999 9.00164 13.1481 9.2287C13.6962 9.45576 14.1648 9.84028 14.4944 10.3336C14.8241 10.827 15 11.407 15 12.0003C15 12.796 14.6839 13.559 14.1213 14.1217C13.5587 14.6843 12.7956 15.0003 12 15.0003ZM21 15.7503C21 15.9492 20.921 16.14 20.7803 16.2807C20.6397 16.4213 20.4489 16.5003 20.25 16.5003C20.0511 16.5003 19.8603 16.4213 19.7197 16.2807C19.579 16.14 19.5 15.9492 19.5 15.7503V9.75034C19.5 9.55142 19.579 9.36066 19.7197 9.22001C19.8603 9.07935 20.0511 9.00034 20.25 9.00034C20.4489 9.00034 20.6397 9.07935 20.7803 9.22001C20.921 9.36066 21 9.55142 21 9.75034V15.7503Z" fill="white" />
                                                </svg>

                                                <span>Autogas Vehicle Financing</span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/prepaid">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5ZM18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5ZM3 8.25V6H21V8.25H3Z" fill="white" />
                                                </svg>

                                                <span>Ozone Prepaid Fuel Card</span></NavigationMenuLink>
                                        </Link>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href={"/investments"} className='text-white hover:text-gray-300'>
                        Investments
                    </Link>
                </div>

                {/* Contact Button */}
                <div className="hidden md:flex">
                    <Link href={"/contact"}>
                    
                    <button className="bg-white text-black px-8 py-3 rounded-none hover:bg-gray-100">
                        Contact Us
                    </button></Link>
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
                    <Link href={"/about"}
                        className="block text-white hover:text-gray-300 py-2 px-4"
                    >
                        About Us
                    </Link>
                  
                     <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-base'>Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col gap-6 px-6 py-6  md:grid-cols-1 w-max bg-black text-white rounded-none">
                                        <Link href="/electric" className="w-full">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.0491 11.7617L9.54911 23.0117C9.43784 23.1305 9.29097 23.2098 9.13065 23.2377C8.97034 23.2657 8.80528 23.2407 8.66039 23.1667C8.5155 23.0926 8.39863 22.9734 8.32743 22.827C8.25623 22.6807 8.23455 22.5152 8.26568 22.3555L9.64005 15.4808L4.23724 13.452C4.12121 13.4086 4.01773 13.3372 3.93606 13.244C3.85439 13.1508 3.79706 13.0389 3.76921 12.9182C3.74135 12.7975 3.74383 12.6718 3.77642 12.5522C3.80902 12.4327 3.87071 12.3231 3.95599 12.2333L14.456 0.983274C14.5673 0.864526 14.7141 0.785191 14.8744 0.75724C15.0348 0.729289 15.1998 0.75424 15.3447 0.828326C15.4896 0.902412 15.6065 1.02161 15.6777 1.16794C15.7489 1.31428 15.7705 1.47979 15.7394 1.63952L14.3613 8.52171L19.7641 10.5476C19.8793 10.5913 19.9819 10.6627 20.063 10.7555C20.144 10.8483 20.2009 10.9596 20.2287 11.0796C20.2565 11.1996 20.2544 11.3246 20.2224 11.4436C20.1904 11.5626 20.1296 11.6718 20.0454 11.7617H20.0491Z" fill="white" />
                                                </svg>

                                                <span>  Electric Mobility Solution</span>
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/liquid">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 17.6108C12.2406 17.771 12.4911 17.9156 12.75 18.0439V21.7498C12.75 21.9487 12.671 22.1395 12.5304 22.2802C12.3897 22.4208 12.1989 22.4998 12 22.4998C11.8011 22.4998 11.6103 22.4208 11.4697 22.2802C11.329 22.1395 11.25 21.9487 11.25 21.7498V18.0439C11.509 17.9156 11.7595 17.771 12 17.6108ZM18.5719 5.86765C18.0294 4.57225 17.1161 3.46609 15.9468 2.68813C14.7775 1.91017 13.4044 1.49512 12 1.49512C10.5956 1.49512 9.2225 1.91017 8.05323 2.68813C6.88397 3.46609 5.97069 4.57225 5.42815 5.86765C4.25647 6.40318 3.26333 7.26409 2.56693 8.34791C1.87054 9.43173 1.50021 10.6928 1.50002 11.9811C1.49065 15.5623 4.50002 18.6561 8.07565 18.7498C9.17541 18.7759 10.265 18.5336 11.25 18.0439V14.713L7.1644 12.6711C6.98637 12.5821 6.851 12.426 6.78805 12.2372C6.72511 12.0483 6.73976 11.8422 6.82877 11.6642C6.91779 11.4862 7.07387 11.3508 7.2627 11.2879C7.45153 11.2249 7.65762 11.2396 7.83565 11.3286L11.25 13.0367V8.24984C11.25 8.05092 11.329 7.86016 11.4697 7.71951C11.6103 7.57885 11.8011 7.49984 12 7.49984C12.1989 7.49984 12.3897 7.57885 12.5304 7.71951C12.671 7.86016 12.75 8.05092 12.75 8.24984V10.7867L16.1644 9.07859C16.2525 9.03451 16.3485 9.00823 16.4468 9.00124C16.5451 8.99426 16.6438 9.0067 16.7373 9.03787C16.8308 9.06903 16.9173 9.11831 16.9917 9.18288C17.0662 9.24746 17.1272 9.32606 17.1713 9.41421C17.2153 9.50236 17.2416 9.59833 17.2486 9.69664C17.2556 9.79494 17.2432 9.89366 17.212 9.98716C17.1808 10.0807 17.1315 10.1671 17.067 10.2416C17.0024 10.316 16.9238 10.377 16.8356 10.4211L12.75 12.463V18.0439C13.6824 18.5069 14.709 18.7484 15.75 18.7498H15.9206C19.5 18.6561 22.5103 15.5623 22.5 11.9811C22.4998 10.6928 22.1295 9.43173 21.4331 8.34791C20.7367 7.26409 19.7436 6.40318 18.5719 5.86765Z" fill="white" />
                                                </svg>

                                                <span>
                                                    Liquid Tree Technology
                                                </span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/conversion">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.7483 8.99981C21.7494 10.1224 21.4706 11.2275 20.937 12.2152C20.4033 13.2028 19.6318 14.0418 18.6923 14.6561C17.7527 15.2704 16.6748 15.6407 15.556 15.7335C14.4373 15.8263 13.3131 15.6385 12.2852 15.1873L7.40456 20.8329C7.39331 20.8461 7.38019 20.8601 7.368 20.8723C6.80533 21.435 6.04218 21.7511 5.24644 21.7511C4.4507 21.7511 3.68755 21.435 3.12487 20.8723C2.5622 20.3096 2.24609 19.5465 2.24609 18.7508C2.24609 17.955 2.5622 17.1919 3.12487 16.6292C3.138 16.617 3.15112 16.6039 3.16519 16.5926L8.81081 11.7129C8.305 10.5559 8.13356 9.28023 8.31595 8.03069C8.49834 6.78115 9.02725 5.60772 9.84269 4.64353C10.6581 3.67933 11.7275 2.96294 12.9294 2.57564C14.1313 2.18833 15.4177 2.14561 16.6427 2.45231C16.769 2.48396 16.8848 2.54794 16.9789 2.63794C17.0729 2.72795 17.1419 2.84089 17.1791 2.96565C17.2163 3.09041 17.2204 3.2227 17.1909 3.34951C17.1614 3.47632 17.0995 3.59327 17.0111 3.68888L13.4983 7.49981L14.0289 9.97013L16.4983 10.4998L20.3092 6.98231C20.4049 6.89395 20.5218 6.832 20.6486 6.80254C20.7754 6.77308 20.9077 6.77714 21.0325 6.81431C21.1572 6.85149 21.2702 6.9205 21.3602 7.01455C21.4502 7.10861 21.5142 7.22447 21.5458 7.35075C21.6804 7.89011 21.7484 8.44392 21.7483 8.99981Z" fill="white" />
                                                </svg>

                                                <span>Autogas Vehicle Conversion</span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/financing">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.8975 5.62534C22.7895 5.55795 22.6662 5.51915 22.5391 5.51259C22.412 5.50603 22.2853 5.53192 22.1709 5.58784C18.1462 7.55659 15.2719 6.63409 12.2334 5.66096C9.0375 4.64377 5.7375 3.58909 1.17094 5.81846C1.04482 5.88004 0.938513 5.97577 0.8641 6.09476C0.789687 6.21375 0.750156 6.35124 0.75 6.49159V17.735C0.749982 17.8623 0.782342 17.9874 0.844035 18.0987C0.905728 18.21 0.994725 18.3038 1.10265 18.3712C1.21057 18.4386 1.33388 18.4775 1.46096 18.4841C1.58804 18.4907 1.71471 18.4649 1.82906 18.4091C5.85375 16.4403 8.72812 17.3628 11.7712 18.336C13.575 18.9125 15.4125 19.5003 17.49 19.5003C19.0922 19.5003 20.8397 19.1516 22.8253 18.1822C22.9514 18.1206 23.0577 18.0249 23.1322 17.9059C23.2066 17.7869 23.2461 17.6494 23.2463 17.5091V6.26565C23.2474 6.13807 23.2159 6.01231 23.1549 5.90026C23.0939 5.78822 23.0053 5.69359 22.8975 5.62534ZM4.5 14.2503C4.5 14.4492 4.42098 14.64 4.28033 14.7807C4.13968 14.9213 3.94891 15.0003 3.75 15.0003C3.55109 15.0003 3.36032 14.9213 3.21967 14.7807C3.07902 14.64 3 14.4492 3 14.2503V8.25034C3 8.05142 3.07902 7.86066 3.21967 7.72001C3.36032 7.57935 3.55109 7.50034 3.75 7.50034C3.94891 7.50034 4.13968 7.57935 4.28033 7.72001C4.42098 7.86066 4.5 8.05142 4.5 8.25034V14.2503ZM12 15.0003C11.4067 15.0003 10.8266 14.8244 10.3333 14.4947C9.83994 14.1651 9.45542 13.6966 9.22836 13.1484C9.0013 12.6002 8.94189 11.997 9.05764 11.4151C9.1734 10.8331 9.45912 10.2986 9.87868 9.87902C10.2982 9.45946 10.8328 9.17374 11.4147 9.05798C11.9967 8.94222 12.5999 9.00164 13.1481 9.2287C13.6962 9.45576 14.1648 9.84028 14.4944 10.3336C14.8241 10.827 15 11.407 15 12.0003C15 12.796 14.6839 13.559 14.1213 14.1217C13.5587 14.6843 12.7956 15.0003 12 15.0003ZM21 15.7503C21 15.9492 20.921 16.14 20.7803 16.2807C20.6397 16.4213 20.4489 16.5003 20.25 16.5003C20.0511 16.5003 19.8603 16.4213 19.7197 16.2807C19.579 16.14 19.5 15.9492 19.5 15.7503V9.75034C19.5 9.55142 19.579 9.36066 19.7197 9.22001C19.8603 9.07935 20.0511 9.00034 20.25 9.00034C20.4489 9.00034 20.6397 9.07935 20.7803 9.22001C20.921 9.36066 21 9.55142 21 9.75034V15.7503Z" fill="white" />
                                                </svg>

                                                <span>Autogas Vehicle Financing</span></NavigationMenuLink>
                                        </Link>
                                        <Link href="/prepaid">
                                            <NavigationMenuLink className='flex items-center'>
                                                <svg className='mr-4' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5ZM18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5ZM3 8.25V6H21V8.25H3Z" fill="white" />
                                                </svg>

                                                <span>Ozone Prepaid Fuel Card</span></NavigationMenuLink>
                                        </Link>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link 
                        href={"/investments"}
                        className="block text-white hover:text-gray-300 py-2 px-4"
                    >
                        Investments
                    </Link>
                    <div className="px-4 py-2">
                        <Link href={"/contact"}>
                        <button className="w-full bg-white text-black px-6 py-2  hover:bg-gray-100">
                            Contact Us
                        </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;