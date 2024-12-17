"use client";

import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
import { useParams } from "next/navigation";

import Image from "next/image";

const BlogDetail = () => {
  const { slug } = useParams();
  const { blogs } = useGlobalStateContext();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-center pt-36">Blog not found.</div>;
  }

  return (
    <>
      <section className="flex">
        <div className="lg:flex-1 lg:w-full lg:p-6">
          <div className="w-[60%] lg:mx-auto lg:px-10 justify-center">
            {blog.galleries.map((img) => {
              if (img.type === "cover") {
                return (
                  <div key={img.id} className="pt-14 p-14">
                    <Image
                      src={img.imageUrl}
                      alt={blog.title}
                      width={350}
                      height={350}
                    />
                  </div>
                );
              }
            })}

            {blog.contents.map((content) => {
              return (
                <h1
                  key={content.id}
                  className={`text-justify leading-9 tracking-wide ${
                    content.type === "title"
                      ? "text-2xl font-semibold text-primaryDark py-10"
                      : "text-lg text-slate-800"
                  }`}
                >
                  {content.body}
                </h1>
              );
            })}
            <div className="pt-20 mx-auto">
              <div className="flex flex-wrap">
                <div>
                  <Image
                    src="/images/hero.webp"
                    className="rounded-full"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="m-2 pl-5 p-1">
                  <h1>{blog.authors.name}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
