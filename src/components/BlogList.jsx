import BlogCard from "./BlogCard";

function BlogList({ blogs, onDelete, onToggleFeatured }) {
  if (blogs.length === 0) return <p className="empty">No blogs found.</p>;

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={onDelete}
          onToggleFeatured={onToggleFeatured}
        />
      ))}
    </div>
  );
}
export default BlogList;