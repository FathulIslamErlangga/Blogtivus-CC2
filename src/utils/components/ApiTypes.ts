export interface IBlogPost {
  id: number;
  title: string;
  created_at: number;
  slug: string;
  popularity: number;
  isPopuler: boolean;
  isFeatured: boolean;
  category: ICategory;
  contents: IContent[];
  authors: IAuthor;
  galleries: IGallery[];
}
export interface IBlogPostId {
  blogs: IBlogPost; // Objek Blog
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  created_at: number;
  blog_post_id: IBlogPostId[];
}
export interface IGallery {
  id: number;
  type: string;
  imageUrl: string;
  created_at: number;
  blog_post_id: IBlogPost[];
}

export interface IContent {
  id: number;
  type: string;
  body: string;
  created_at: number;
  blog_post_id: IBlogPost[];
}

export interface IAuthor {
  id: number;
  name: string;
  slug: string;
  created_at: number;
  blog_post_id: IBlogPostId[];
}
