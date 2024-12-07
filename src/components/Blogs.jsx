import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Loading from "./Loading";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  // Handle loading state
  if (loading) {
    return (
      <div className="max-w-[950px] mr-40 items-center justify-center mt-24">
        <Loading />
      </div>
    );  
  }

  // Handle when there are no posts
  if (posts.length === 0) {
    return (
      <div className="flex flex-col gap-y-10 max-w-[950px]mx-auto justify-center mt-20 pb-24">
        <p className="text-center font-bold text-3xl">No Blogs Found!</p>
      </div>
    );
  }

  // Render posts when data is available
  return (
    <div className="flex flex-col gap-y-10 max-w-[950px]mx-auto justify-center mt-12 pb-24">
      {posts.map((post) => (
        <BlogDetails key={post.id} post={post} />
      ))}
    </div>
  );
}
