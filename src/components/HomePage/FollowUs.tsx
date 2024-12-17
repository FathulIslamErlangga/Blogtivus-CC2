import React from "react";
import Image from "next/image";
const FollowUs = () => {
  return (
    <section className=" pt-36 ">
      <div className="bg-greenty py-10 container mx-auto w-full rounded-lg relative">
        <h1 className="text-2xl text-primaryDark text-center font-semibold tracking-wide">
          Follow Us
          <span className="block text-primaryDark text-lg pt-1">
            Social Media
          </span>
        </h1>
        <div className="flex-wrap gap-10  pt-10 place-self-center flex lg:mx-5 ">
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
          <a>
            <Image
              src="/images/instagram.png"
              alt=""
              width={25}
              height={25}
              className="mt-1"
            />
          </a>
        </div>

        <div className="absolute bottom-0 lg:right-10 lg:flex justify-center items-center hidden  lg:mr-10">
          <Image
            src="/images/followus.png"
            alt=""
            width={200}
            height={200}
            className="mt-1 max-w-[100%]"
          />
        </div>
        <div className="absolute lg:left-0  -left-14 bottom-0 hidden lg:flex justify-center items-center">
          <Image
            src="/images/followus.png"
            alt=""
            width={200}
            height={200}
            className="mt-1 max-w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
