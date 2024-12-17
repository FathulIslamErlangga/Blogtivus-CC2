"use client";
import NavAside from "@/components/BlogsPost/section/NavAside";
import React, { useState } from "react";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";

import Blog from "@/components/BlogsPost/section/Blog";

const BlogPost = () => {
  const { blogs, categories, isLoading } = useGlobalStateContext();
  const [filters, setFilters] = useState(blogs);
  const hendleSearch = (query: string) => {
    if (!query) {
      setFilters(blogs);
    } else {
      const searchData = blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(query.toLowerCase());
      });
      console.log(searchData);
      setFilters(searchData);
    }
  };
  const handleFilterCategory = (categoryId: number) => {
    const filteredData = blogs.filter(
      (blog) => blog.category.id === categoryId
    );
    setFilters(filteredData);
  };
  return (
    <>
      <section className="lg:flex">
        <NavAside
          onSearch={hendleSearch}
          categories={categories}
          onFilterCategory={handleFilterCategory}
          populer={blogs}
        />
        <div className="lg:flex-1 lg:w-full lg:p-6">
          <Blog isLoading={isLoading} blogs={filters} />
        </div>
      </section>
    </>
  );
};
export default BlogPost;
