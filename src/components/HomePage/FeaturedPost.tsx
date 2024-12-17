"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IBlogPost } from "@/utils/components/ApiTypes";
interface BlogProps {
  blogs: IBlogPost[];
}
const FeaturedPost = ({ blogs }: BlogProps) => {
  return (
    <section className="pt-36">
      <div className="container mx-auto px-4 pb-10">
        <div className="w-full py-10">
          <h1 className="text-center font-semibold text-2xl tracking-wide">
            Featured Post
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => {
            if (blog.isFeatured === true) {
              return (
                <div
                  key={index}
                  className={`${
                    blog.id === 5
                      ? "card card-compact bg-base-100 shadow-xl  max-w-xs w-full lg:card-side lg:col-span-3 lg:max-w-[55%] mx-auto "
                      : "card card-compact bg-base-100 shadow-xl mx-auto w-full max-w-xs lg:pt-10"
                  }`}
                >
                  <Image
                    src={
                      blog.galleries.find((img) => img.type === "cover")
                        ?.imageUrl || ""
                    }
                    className="w-full"
                    alt={blog.title}
                    width={250}
                    height={250}
                  />
                  <div className="card-body">
                    <h2 className="card-title">
                      {blog.title}
                      {blog.id}
                    </h2>
                    <p>
                      {blog.contents
                        .find((content) => content.type === "text")
                        ?.body.slice(0, 100)}{" "}
                      .....
                    </p>
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

export default FeaturedPost;
