import React from "react";
import Title from "../components/Title";
import allBlogs from "../components/AllBlogs";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
