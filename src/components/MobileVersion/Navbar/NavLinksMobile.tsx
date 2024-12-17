"use client";
import React from "react";
import NavbarMobile from "./NavbarMobile";
import Link from "next/link";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
const NavLinksMobile = () => {
  const { isOpen } = useGlobalStateContext();

  return (
    <>
      {isOpen && (
        <NavbarMobile
          className={`bg-primaryDark w-full  absolute top-full right-0 lg:bg-transparent lg:static 
        `}
        >
          <div className="w-full  h-screen  lg:h-full">
            <ul className="text-primaryWhite  block lg:text-primaryDark lg:flex">
              <li className="group">
                <Link href="/blogpost" className="py-5 flex mx-5 text-base">
                  Blog Post
                </Link>
              </li>
              <li className="group">
                <Link href="/category" className="py-5 flex mx-5 text-base">
                  Category
                </Link>
              </li>
              <li className="group">
                <Link href="/about" className="py-5 flex mx-5 text-base">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </NavbarMobile>
      )}
    </>
  );
};
export default NavLinksMobile;
