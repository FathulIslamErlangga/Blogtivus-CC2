"use client";
import { createContext, useContext, useEffect, useState } from "react";
// import { IElements } from "@/utils/components/elements";
import { StateOnClick } from "@/utils/State/StateOnClick";
import { IAuthor, IBlogPost, ICategory } from "@/utils/components/ApiTypes";
import { fetchAuthor, fetchBlogPost } from "@/utils/services/ServicesBlog";
import { fetchCategory } from "../utils/services/ServicesBlog";

interface GlobalStateProviderProps {
  blogs: IBlogPost[];
  authors: IAuthor[];
  categories: ICategory[];
  isOpen: boolean;
  isOpenModal: boolean;
  isLoading: boolean;
  onClick: () => void;
  onClickModal: () => void;
  fetchAllData: () => Promise<void>;
}

const GlobalStateContext = createContext<GlobalStateProviderProps | undefined>(
  undefined
);
export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [blogsData, categoriesData, authorsData] = await Promise.all([
        fetchBlogPost(),
        fetchCategory(),
        fetchAuthor(),
      ]);
      setBlogs(blogsData);
      setCategories(categoriesData);
      setAuthors(authorsData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  const { isOpen, isOpenModal, onClick, onClickModal } = StateOnClick();

  return (
    <GlobalStateContext.Provider
      value={{
        isOpen,
        isLoading,
        isOpenModal,
        onClick,
        onClickModal,
        blogs,
        categories,
        authors,
        fetchAllData,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider"
    );
  }
  //   console.log(context);
  return context;
};
