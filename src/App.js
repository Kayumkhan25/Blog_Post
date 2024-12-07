import "./App.css"
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";

export default function App() {
  const { fetchBlogPosts, posts, loading, page } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [homePageLoaded, setHomePageLoaded] = useState(false);

  // Trigger fetch only for initial homepage load, and then subsequent search-based fetch
  useEffect(() => {
    const query = searchParams.get("query")?.toLowerCase();
    const currentPage = searchParams.get('page') ?? 1;
    
    if (query) {
      fetchBlogPosts(Number(currentPage), null, null, query); // Fetch based on query
    } else if (location.pathname !== "/" && !loading && posts.length === 0) {
      fetchBlogPosts(Number(currentPage)); // Fetch based on page or search params
    }

    if (location.pathname === "/" && !homePageLoaded) {
      fetchBlogPosts(Number(currentPage)); // Fetch data for homepage
      setHomePageLoaded(true); // Set to true after initial data fetch
    }


  }, [searchParams, location.pathname, homePageLoaded, fetchBlogPosts, posts, loading]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
