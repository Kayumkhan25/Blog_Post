import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useState({ query: null, category: null, tag: null });

  // Function to fetch posts based on sentence matching
  const fetchBlogPosts = async (currentPage = 1, query = null, category = null, tag = null) => {
    setLoading(true);
    let url = `${baseUrl}?page=${currentPage}`;
    if (category) url += `&category=${category}`;
    if (tag) url += `&tag=${tag}`;
    if (query) url += `&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.posts || data.posts.length === 0) throw new Error("No posts found");
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  // Handle page changes, keeping search parameters intact
  const handlePageChange = (newPage) => {
    setPage(newPage); 
    fetchBlogPosts(newPage, searchParams.query, searchParams.category, searchParams.tag); 
  };

  // Update search params for query, category, and tag
  const updateSearchParams = (query, category, tag) => {
    setSearchParams({ query, category, tag });
  };

  // The logic for searching blog posts based on the query
  const searchPosts = (query) => {
    const queryWords = query.split(" ").map(word => word.toLowerCase());

    // Filter posts based on category, tag, or blog content (title, body)
    const filteredPosts = posts.filter(post => {
      // Check if any query word matches the category or tag
      const categoryMatch = queryWords.some(word => post.category.toLowerCase().includes(word));
      const tagMatch = queryWords.some(word => post.tags.some(tag => tag.toLowerCase().includes(word)));
      
      // Check if any query word matches title or body content
      const contentMatch = queryWords.some(word => post.title.toLowerCase().includes(word) || post.body.toLowerCase().includes(word));

      return categoryMatch || tagMatch || contentMatch;
    });

    // Return the filtered posts
    return filteredPosts;
  };

  const value = {
    posts,
    loading,
    page,
    totalPages,
    fetchBlogPosts,
    handlePageChange,
    updateSearchParams,
    searchPosts, // Add search function to context
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
