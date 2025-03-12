import React, {useRef} from "react";

const styles = {
  artBox: {
    width: "350px",
    height: "450px",
    background: "white",
    borderRadius: "4px",
    boxShadow: "0px 20px 50px #D9DBDF",
    transition: "all 0.3s ease",
    marginBottom: "20px",
    overflow: "hidden",
    paddingBottom: "20px"


  }
  ,
  img: {
    borderRadius: "4px",
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
    fontSize: "24px",
  },
  h2: {
    textAlign: "justify",
    padding: "0 30px",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "12px",
    color: "#C8C8C8",
    lineHeight: "18px",
  },
};

const ArtBox = ({ image, altText, title, year, medium, onImageClick }) => {
  const imgRef = useRef(null)
  return (
    <div style={styles.artBox}
    onMouseEnter={(e) => {imgRef.current.style.transform = "scale(1.1)";}}
    onMouseLeave={(e) => {imgRef.current.style.transform = 'scale(1)';}}
    >
      <img
      ref={imgRef}
        src={image}
        alt={altText}
        style={styles.img}
        onClick={() => onImageClick(image, title)} 
      />
      <h1 style={styles.h1}>{title}</h1>
      <h2 style={styles.h2}>{year}</h2>
      <h2 style={styles.h2}>{medium}</h2>
    </div>
  );
};

export default ArtBox;
