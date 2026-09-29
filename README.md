# 📝 Blog Dashboard

A React blog management dashboard built with hooks, custom hooks, memoization, and Redux Toolkit for scalable state management.

## Features
- Reusable components: Header, SearchBar, BlogCard, BlogList, BlogStats
- Custom hook (`useFilteredBlogs`) with `useMemo` for efficient search/category filtering
- Performance optimization using `React.memo` and `useCallback`
- `useRef` to auto-focus the search input on page load
- Redux Toolkit for centralized state: blogs, search text, category, loading, and error states
- Async data loading simulated with `createAsyncThunk`, including loading and error UI states
- Add, delete, and favorite/unfavorite blogs
- Responsive, clean UI

## Tech Stack
- React (Hooks, Context-free architecture)
- Redux Toolkit + React Redux
- Vite
- JavaScript (ES6+)
- CSS

## Run Locally

\`\`\`bash
git clone https://github.com/HASANMUKHTAR17/blog-dashboard.git
cd blog-dashboard
npm install
npm run dev
\`\`\`

## Live Demo
Coming soon