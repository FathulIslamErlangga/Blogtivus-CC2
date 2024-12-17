import React from "react";
import Image from "next/image";
import Link from "next/link";
const ContactUs = () => {
  return (
    <section className=" pt-36 ">
      <div className="bg-greenty py-10 container mx-auto w-full rounded-lg relative">
        <h1 className="text-2xl text-primaryDark text-center font-semibold tracking-wide">
          Contact Us
        </h1>
        <div className="flex-wrap gap-10  pt-10 place-self-center flex lg:mx-5 ">
          <Link href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmTgSQBMzXHBgWvDBrzVRJDZvtpwdGqsGccvhCZCcCBzxcPDVcBczDfkHKPXmsgwFlKkRQ">
            <Image
              src="/images/email.png"
              alt=""
              width={25}
              height={25}
              className="mt-1"
            />
          </Link>
          <Link href="https://www.instagram.com/fthlislmerlngga?igsh=MTFidWd2dm9wMXY5NA== ">
            <Image
              src="/images/instagram.png"
              alt=""
              width={25}
              height={25}
              className="mt-1"
            />
          </Link>
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

export default ContactUs;
