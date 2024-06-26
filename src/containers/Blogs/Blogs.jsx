import React from "react";
import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogSection } from "../../Portfolio";
import { Fade } from "react-awesome-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map(blog => {
            return (
              <BlogCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}