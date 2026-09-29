import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogList from "./components/BlogList";
import BlogStats from "./components/BlogStats";
import AddBlogForm from "./components/AddBlogForm";
import { useFilteredBlogs } from "./hooks/useFilteredBlogs";
import {
  fetchBlogs, deleteBlog, toggleFeatured, setSearchText, setCategory,
} from "./blogSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { blogs, searchText, selectedCategory, loading, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);
  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const handleDelete = useCallback((id) => dispatch(deleteBlog(id)), [dispatch]);
  const handleToggleFeatured = useCallback((id) => dispatch(toggleFeatured(id)), [dispatch]);
  const handleSearch = useCallback((text) => dispatch(setSearchText(text)), [dispatch]);
  const handleCategory = useCallback((cat) => dispatch(setCategory(cat)), [dispatch]);

  return (
    <div className="container">
      <Header />

      <button onClick={() => dispatch(fetchBlogs(true))}>Simulate Error</button>
      <button onClick={() => dispatch(fetchBlogs())}>Reload Blogs</button>

      {loading && <p className="message">⏳ Loading blogs...</p>}
      {error && <p className="message error">❌ {error}</p>}

      {!loading && !error && (
        <>
          <BlogStats blogs={blogs} />
          <AddBlogForm />
          <SearchBar
            searchText={searchText}
            onSearchChange={handleSearch}
            category={selectedCategory}
            onCategoryChange={handleCategory}
            categories={categories}
          />
          <BlogList
            blogs={filteredBlogs}
            onDelete={handleDelete}
            onToggleFeatured={handleToggleFeatured}
          />
        </>
      )}
    </div>
  );
}
export default App;