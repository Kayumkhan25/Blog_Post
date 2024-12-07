import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className='max-w-[800px] mx-auto p-2 flex flex-col justify-center'>
        <span className="text-xl font-semibold text-blue-950">{post.title}</span>
      <p className="font-medium">
        By
        <span className="italic text-blue-800"> {post.author} </span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline text-indigo-700"> {post.category} </span>
        </NavLink>
      </p>
      <p className="text-sm">Posted on <span className="italic">{post.date}</span></p>
      <p className="text-[16px] ">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-red-900"> {`#${tag}`} </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
