import React, {useRef} from "react";

const styles = {
  artBox: {
    width: "300px",
    height: "400px",
    background: "white",
    border: '1px solid rgba(0, 0, 0, 0.71)',
    transition: "all 0.3s ease",
    marginBottom: "20px",
    overflow: "hidden"
  }
  ,
  img: {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer", 
    transition: "transform 0.3s ease",
  },

  h1: {
    margin: "auto",
    padding: "0 30px",
    textAlign: "left",
    marginTop: "24px",
    fontSize: "12px",
  },
  h2: {
    textAlign: "justify",
    padding: "0 30px",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "10px",
    color: "#C8C8C8",
    lineHeight: "12px",
  },
};

const BlogCard = ({ image, altText, date, title }) => {
  const imgRef = useRef(null)
  return (
    <div style={styles.artBox}>
      <img
      ref={imgRef}
        src={image}
        alt={altText}
        style={styles.img}
      />
      <h2 style={styles.h2}>{date}</h2>
      <h1 style={styles.h1}>{title}</h1>
    </div>
  );
};

export default BlogCard;