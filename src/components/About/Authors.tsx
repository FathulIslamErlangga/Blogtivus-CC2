import React from "react";
import Image from "next/image";

const Authors = () => {
  return (
    <div className="container-2xl pt-24">
      <div className="flex flex-wrap">
        <div className="w-full pl-14  self-center lg:w-1/2">
          <h1 className="text-semibold text-base lg:pl-[60px]  text-primaryDark lg:text-2xl pb-5 lg:text-justify lg:w-full">
            Author Data
          </h1>
          <div className="lg:pl-[60px]">
            <p>Name : Fathul Islam Erlangga</p>
            <p>Title : It Suport</p>
            <p>Description:</p>
            <p>
              Mendiagnosis dan menyelesaikan masalah perangkat keras, perangkat
              lunak, dan jaringan. Memberikan dukungan teknis kepada pengguna,
              baik secara langsung maupun jarak jauh. Melakukan instalasi,
              konfigurasi, dan pemeliharaan perangkat IT. Mengelola sistem
              keamanan data dan memastikan backup dilakukan secara rutin.
              Berkoordinasi dengan tim untuk mengimplementasikan solusi
              teknologi yang efisien.
            </p>
          </div>
        </div>
        <div className="w-full  self-end lg:w-1/2">
          <div className="px-5 mt-24 lg:mt-1">
            <Image
              className="mx-w-full rounded-lg mx-auto"
              src="/images/myfoto.jpg"
              alt="hero page"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authors;
