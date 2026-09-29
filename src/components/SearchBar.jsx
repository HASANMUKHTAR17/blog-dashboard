import { useEffect, useRef } from "react";

function SearchBar({ searchText, onSearchChange, category, onCategoryChange, categories }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search blogs by title..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
export default SearchBar;