"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header className="w-full bg-black text-white py-4 px-6">
          <div className="flex justify-between items-center container">
              <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                      <Image
                          src="https://placehold.co/51x50"
                          alt="Logo"
                          width={51}
                          height={50}
                          className="mr-2"
                      />
                  </Link>
              </div>

              <NavigationMenu className="hidden md:flex">
                  <NavigationMenuList>
                      <NavigationMenuItem>
                          <Link href="#" legacyBehavior passHref>
                              <NavigationMenuLink
                                  className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-altor-light-blue`}
                              >
                                  About Us
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                          <Link href="#" legacyBehavior passHref>
                              <NavigationMenuLink
                                  className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-altor-light-blue`}
                              >
                                  Our Products
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                          <Link href="#" legacyBehavior passHref>
                              <NavigationMenuLink
                                  className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-transparent hover:text-altor-light-blue`}
                              >
                                  For Business
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                  </NavigationMenuList>
              </NavigationMenu>

              <Button className="bg-altor-blue text-white rounded-full px-6 py-2 hover:bg-altor-light-blue transition-colors">
                  Buy
              </Button>

              {/* Mobile menu button */}
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden flex items-center p-2 rounded-md text-white hover:text-altor-light-blue focus:outline-none"
              >
                  <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                              isOpen
                                  ? 'M6 18L18 6M6 6l12 12'
                                  : 'M4 6h16M4 12h16M4 18h16'
                          }
                      />
                  </svg>
              </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
              <div className="md:hidden bg-black pt-4 pb-6 px-6">
                  <nav className="flex flex-col space-y-4">
                      <Link
                          href="#"
                          className="text-white hover:text-altor-light-blue"
                      >
                          About Us
                      </Link>
                      <Link
                          href="#"
                          className="text-white hover:text-altor-light-blue"
                      >
                          Our Products
                      </Link>
                      <Link
                          href="#"
                          className="text-white hover:text-altor-light-blue"
                      >
                          For Business
                      </Link>
                  </nav>
              </div>
          )}
      </header>
  )
};

export default Header;
