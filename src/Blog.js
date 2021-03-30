import React, { useEffect, useState } from "react";
import axios from "./axios";
import { toast } from "react-toastify";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/blogs");
      console.log(res.data);
      alert(JSON.stringify(res.data));
      setBlogs(res.data.blogs);
    } catch (err) {
      toast.error("Error fetching blogs, please try again later!");
      console.error("Error fetching blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog">
      {blogs.map((blog) => (
        <div className="blog__container">
          <div className="blog__blogTitle">{blog.title}</div>
          <div className="blog__blogContent">{blog.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
