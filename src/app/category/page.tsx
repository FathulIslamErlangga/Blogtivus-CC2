"use client";
import Categories from "@/components/category/section/Categories";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
import React from "react";

const Category = () => {
  const { categories } = useGlobalStateContext();
  return (
    <>
      <section>
        <Categories categories={categories} />
      </section>
    </>
  );
};
export default Category;
