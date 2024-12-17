import Image from "next/image";
import Link from "next/link";
import { IBlogPost } from "@/utils/components/ApiTypes";
import SkeletonBlogPost from "@/utils/components/skeleton/SkeletonBlogPost";
interface BlogProps {
  isLoading: boolean;
  blogs: IBlogPost[];
}
const Blog = ({ blogs, isLoading }: BlogProps) => {
  if (isLoading) {
    return (
      <section className="pt-16 lg:pt-8">
        <div className="container lg:mx-auto lg:px-10">
          <div className="grid grid-cols-2 pb-5 px-4  lg:grid-cols-3 gap-6">
            {[...Array(10)].map((_, index) => (
              <SkeletonBlogPost key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="pt-5 lg:pt-8">
      <div className="container lg:mx-auto lg:px-10">
        <div className="grid grid-cols-2 pb-5 px-4  lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card card-compact bg-base-100 shadow-xl mx-auto w-full max-w-xs"
            >
              <Image
                src={
                  blog.galleries.find((g) => g.type === "cover")?.imageUrl || ""
                }
                className="w-full"
                alt="Album"
                width={250}
                height={250}
              />
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>
                  {blog.contents
                    .find((content) => content.type === "text")
                    ?.body.slice(0, 100)}
                  ....
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
