import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-primaryWhite text-neutral-content items-center py-5 lg:p-4">
      <div className="brands  flex flex-wrap mx-auto lg:pl-10 lg:mx-0">
        <Image
          src="/svg/icon.svg"
          alt=""
          width={25}
          height={25}
          className="mt-1"
        />
        <h1 className=" text-primaryDark text-xl ml-2 font-[300] tracking-wider">
          Blog<span className="text-greenty font-bold">Tivus</span>
        </h1>
      </div>
      <aside className="grid-flow-col items-center block mx-auto lg:py-5 ">
        <p className="mt-1">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 mx-auto lg:mx-5 lg:place-self-center lg:justify-self-end">
        <a>
          <Image
            src="/svg/twitter.svg"
            alt=""
            width={25}
            height={25}
            className="mt-1"
          />
        </a>
        <a>
          <Image
            src="/svg/youtube.svg"
            alt=""
            width={25}
            height={25}
            className="mt-1"
          />
        </a>
        <a>
          <Image
            src="/svg/facebook.svg"
            alt=""
            width={25}
            height={25}
            className="mt-1"
          />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
