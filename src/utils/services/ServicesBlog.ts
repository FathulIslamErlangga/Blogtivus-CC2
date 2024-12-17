import { IAuthor, IBlogPost, ICategory } from "../components/ApiTypes";
import { FetchApi } from "./Api";

const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:llrD0G6l";

export const fetchBlogPost = async (): Promise<IBlogPost[]> => {
 return FetchApi(`${BASE_URL}/blog_post`);
 
};
export const fetchCategory = async (): Promise<ICategory[]> => {
  return FetchApi(`${BASE_URL}/category`);
};
export const fetchAuthor = async (): Promise<IAuthor[]> => {
  return FetchApi(`${BASE_URL}/author`);
};
