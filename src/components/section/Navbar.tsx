"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import NavLinksMobile from "../MobileVersion/Navbar/NavLinksMobile";
import ToggleNav from "../elements/ToggleNav";
import NavLinks from "../parts/NavLinks";

const Navbar = () => {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const hendleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", hendleScroll);

    return () => {
      window.removeEventListener("scroll", hendleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-transparent w-full  flex items-center z-10 ${
        isScroll ? "blur-nav" : "sticky"
      }`}
    >
      <div className="flex justify-between w-full items-center relative">
        <div className="brands px-10 lg:px-20 flex flex-wrap py-7">
          <Image
            src="/svg/icon.svg"
            alt=""
            width={25}
            height={25}
            className="mt-1"
          />
          <h1 className=" text-primaryDark text-2xl ml-2 font-[300] tracking-wider">
            <Link href="/">
              Blog<span className="text-greenty font-bold">Tivus</span>
            </Link>
          </h1>
        </div>
        <div className="flex px-20 items-center ">
          <NavLinks />
          <ToggleNav />
          <NavLinksMobile />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
