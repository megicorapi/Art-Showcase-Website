import React from "react";
import BlogSection from "../components/BlogSection";
import data from "../data/blogcard.json";

const Blog = () => {
  const handleImageClick = (image, title) => {
    
    console.log(`Image clicked
      : ${title}`, image);
  };

  return (
    <div className="blog-container">
      <div style={style.header}> 
        <h1 style = {style.headerTitle}> Blog </h1>
        <p style = {style.headerText}>Insights, stories, and inspiration-dive into our latest posts.</p>
      </div>
      {data.map((blogItem, index) => (
  <BlogSection
    key={index}
    id={blogItem.id}
    image={blogItem.image}
    altText={blogItem.altText}
    date={blogItem.date}
    title={blogItem.title}
    intro={blogItem.intro}
  />
))}

    </div>
  );
};

const style = {
  header: {
    backgroundColor: "#f7f7f7",
    padding: "40px 0",
    textAlign: "center",
    marginBottom: "20px",
    width:"100%"
  },
  headerTitle: {
    fontSize: "36px",
    marginBottom: "10px",
  }
}

export default Blog;
