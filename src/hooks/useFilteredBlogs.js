import { useMemo } from "react";

export function useFilteredBlogs(blogs, searchText, category) {
  return useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = category === "All" || blog.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchText, category]);
}