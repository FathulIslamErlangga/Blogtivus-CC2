"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DetailBlogPage = () => {
  return (
    <section className="pt-16 lg:pt-8">
      <div className="container lg:mx-auto lg:px-10">
        <div className="grid grid-cols-2 pb-5 px-4  lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-xl mx-auto w-full max-w-xs"
            >
              <Image
                src="/images/hero.webp"
                className="w-full"
                alt="Album"
                width={250}
                height={250}
              />
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-end pt-5">
                  <Link href="" className=" text-sm text-slate-400">
                    ReadMore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailBlogPage;
