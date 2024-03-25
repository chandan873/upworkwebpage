import React from "react";
import BlogCard from './BlogCard'
import "./Blog.css";

const Blog = () => {
  return (
    <div className="pt-20">
      <h2 className="head-text">
        My Creative <span>Blogs</span>{" "}
      </h2>
<div className="blog_cards p-10 flex flex-wrap justify-between .grid-container  ">
  <BlogCard/>
  <BlogCard/>
  <BlogCard/>
  <BlogCard/>
  <BlogCard/>
</div>
      
    </div>
  );
};

export default Blog;
