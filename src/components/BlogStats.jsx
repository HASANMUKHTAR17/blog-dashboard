function BlogStats({ blogs }) {
  const total = blogs.length;
  const featured = blogs.filter((b) => b.featured).length;
  const totalMinutes = blogs.reduce((sum, b) => sum + b.readingTime, 0);

  return (
    <div className="stats">
      <div className="stat-box">Total Blogs: <strong>{total}</strong></div>
      <div className="stat-box">Featured: <strong>{featured}</strong></div>
      <div className="stat-box">Total Reading Time: <strong>{totalMinutes} min</strong></div>
    </div>
  );
}
export default BlogStats;