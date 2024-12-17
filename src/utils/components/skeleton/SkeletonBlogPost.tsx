import React from "react";

const SkeletonBlogPost = () => {
  return (
    <div className="card card-compact bg-gray-200 animate-pulse mx-auto w-full max-w-xs shadow-xl">
      {/* Skeleton untuk gambar */}
      <div className="w-full h-40 bg-gray-300"></div>

      {/* Skeleton untuk konten */}
      <div className="card-body">
        {/* Skeleton Judul */}
        <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>
        {/* Skeleton Deskripsi */}
        <div className="h-4 bg-gray-300 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
        {/* Skeleton Tombol */}
        <div className="flex justify-end pt-5">
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonBlogPost;
