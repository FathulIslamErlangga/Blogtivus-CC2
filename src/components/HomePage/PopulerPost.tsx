"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogPost } from "@/utils/components/ApiTypes";

const PopulerPost = ({ blogPopuler }: { blogPopuler: IBlogPost[] }) => {
  return (
    <section className="pt-36">
      <div className="container mx-auto px-10">
        <h1 className="font-semibold text-center text-2xl pb-10 tracking-wide">
          Populer Post
        </h1>
        <div className="grid grid-cols-1 pb-5 px-4 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {blogPopuler.map((blog) => {
            const blogContent = blog.contents.find(
              (content) => content.type === "text"
            )?.body;
            const sliceContent = blogContent?.slice(0, 100);
            if (blog.isPopuler === true) {
              return (
                <div
                  key={blog.id}
                  className="card card-compact bg-base-100 shadow-xl mx-auto w-full max-w-xs"
                >
                  <Image
                    src={
                      blog.galleries.find((g) => g.type === "cover")
                        ?.imageUrl || ""
                    }
                    className="w-full"
                    alt="Album"
                    width={250}
                    height={250}
                  />
                  <div className="card-body">
                    <h2 className="card-title text-lg">{blog.title}</h2>
                    <p>{sliceContent}....</p>
                    <div className="flex  justify-between w-full items-center pt-10">
                      <div className="flex justify-start">
                        <div className="flex flex-wrap gap-1 pl-2">
                          <div className="-mt-1">
                            <Image
                              src="/images/love.png"
                              width={20}
                              height={20}
                              alt={blog.title}
                            />
                          </div>
                          <span>{blog.popularity}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <Link
                          href={`/blog_post/${blog.slug}`}
                          className=" text-sm text-slate-500"
                        >
                          ReadMore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default PopulerPost;
