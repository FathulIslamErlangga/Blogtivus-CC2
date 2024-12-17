import { ICategory } from "@/utils/components/ApiTypes";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ICategoryProps {
  categories: ICategory[];
}
const Categories = ({ categories }: ICategoryProps) => {
  return (
    <div className="container">
      <div className="mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="p-10">
            <h1 className="text-center text-primaryDark font-semibold text-2xl pb-24">
              {category.name}
            </h1>
            <div className="grid grid-cols-1 pb-5 px-8  lg:grid-cols-3 gap-6">
              {category.blog_post_id.slice(0, 4).map((post, index) => {
                console.log("index data", index);
                const blogs = post.blogs;
                return (
                  <div
                    key={blogs.id}
                    className="card card-compact bg-base-100 shadow-xl pb-10 mx-auto w-full max-w-xs"
                  >
                    <Image
                      src={
                        blogs.galleries.find((g) => g.type === "cover")
                          ?.imageUrl || ""
                      }
                      className="w-full"
                      alt="Album"
                      width={250}
                      height={250}
                    />
                    <div className="card-body">
                      <h2 className="card-title text-lg">{blogs.title}</h2>
                      <p>
                        {blogs.contents
                          .find((content) => content.type === "text")
                          ?.body.slice(0, 100)}
                      </p>
                      <div className="flex  justify-between w-full items-center pt-10">
                        <div className="flex justify-start">
                          <div className="flex flex-wrap gap-1 pl-2">
                            <div className="-mt-1">
                              <Image
                                src="/images/love.png"
                                width={20}
                                height={20}
                                alt={blogs.title}
                              />
                            </div>
                            <span>{blogs.popularity}</span>
                          </div>
                        </div>
                        <div className="flex">
                          <Link
                            href={`/blog_post/${blogs.slug}`}
                            className=" text-sm text-slate-500"
                          >
                            ReadMore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
