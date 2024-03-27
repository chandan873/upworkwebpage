import React from "react";
import './Blog.css'

const BlogCard = () => {
  return (
    <div className="blog_card    rounded-2xl p-5 my-5">
      <div className="proflie_bog flex flex-row">
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bordered avatar"
        />
        <div className="profile_name flex flex-col pl-3">
          <h6 className="text-xs font-bold">Johan Doe</h6>
          <p className="text-xs">Web Designer</p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="blog_img w-full h-36 py-3"
      />

      <div className="blog_content w-full">
        <h4 className="title font-bold pb-2">AI is new world tech</h4>
        <p className="subtitle text-xs">
          Lorem ipsumdfds dolor ssafsait amet consectetur adipisicing elit dfge
          vt sdfd.
        </p>
      </div>

      <button className=" border-indigo-700 rounded-2xl mt-3 text-xs px-3 py-2">Read More</button>
    </div>
  );
};

export default BlogCard;
