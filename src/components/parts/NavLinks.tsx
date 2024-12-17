"use client";
import React from "react";

import Link from "next/link";
import Navbars from "../elements/Navbars";
const NavLinks = () => {
  return (
    <>
      <Navbars
        className={`bg-transparent w-full static hidden lg:flex
        `}
      >
        <div className="w-full h-full">
          <ul className="text-primaryDark flex">
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
      </Navbars>
    </>
  );
};
export default NavLinks;
