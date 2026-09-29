import { memo } from "react";

function BlogCard({ blog, onDelete, onToggleFeatured }) {
  console.log("Rendering card:", blog.title);

  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>Category: <span className="tag">{blog.category}</span></p>
      <p>Author: {blog.author}</p>
      <p>Reading Time: {blog.readingTime} min</p>
      <p className={blog.featured ? "featured" : "not-featured"}>
        {blog.featured ? "⭐ Featured" : "Not Featured"}
      </p>
      <div className="card-buttons">
        <button onClick={() => onToggleFeatured(blog.id)}>
          {blog.featured ? "Unfavorite" : "Favorite"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(blog.id)}>Delete</button>
      </div>
    </div>
  );
}

export default memo(BlogCard);