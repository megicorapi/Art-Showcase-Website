import { Link } from 'react-router-dom';

const styles = {
  blogcard: {
    width: "80%",
    margin: "2% 10%",
    height: "auto",
    background: "white",
    borderRadius: "4px",
    boxShadow: "0px 20px 50px #D9DBDF", 
    marginBottom: "20px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "4px",
  },
  h1: {
    padding: "10px 0 0 20px",
    textAlign: "left",
    fontSize: "1.25rem",
    margin: "0",
    lineHeight: "1.4",
    color: "#333",
  },
  h2: {
    textAlign: "left", 
    padding: "5px 0 0 20px",
    fontFamily: "'Open Sans', sans-serif",
    color: "#555",
    lineHeight: "1.2",
    fontSize: "1rem", 
    fontWeight: "400",
  },
  p: {
    fontSize: "0.95rem", 
    lineHeight: "1.6",
    color: "#666",
    flex: "1", 
    padding: "0 0 10px 20px", 
    margin: "0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center", 
    padding: "0 10px 10px 0", 
    marginTop: "auto", 
    width: "100%", 
    flexShrink: 0, 
  },
  btn: {
    backgroundColor: "#ffffff",
    border: "1px solid rgb(209, 213, 219)",
    borderRadius: "0.5rem",
    color: "#111827",
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.25rem",
    padding: "0.5rem 1rem", 
    textAlign: "center",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    userSelect: "none",
    touchAction: "manipulation",
    margin: "0 20px 10px 0",
    transition: "background-color 0.2s ease, outline 0.2s ease",
    maxWidth: "auto", 
    boxSizing: "border-box", 
  },


  '@media (max-width: 768px)': { 
    blogcard: {
      height: "auto", 
      padding: "0 10px",
    },
    img: {
      height: "40%", 
    },
    h1: {
      fontSize: "1.1rem", 
      padding: "10px 0",
    },
    h2: {
      fontSize: "0.9rem", 
    },
    p: {
      fontSize: "0.85rem", 
      padding: "0 0 10px 10px", 
    },
    btn: {
      fontSize: "0.75rem", 
      padding: "0.5rem 0.75rem",
    },
  },

  '@media (max-width: 480px)': {  
    blogcard: {
      height: "auto", 
      padding: "0 5px", 
    },
    img: {
      height: "35%",
    },
    h1: {
      fontSize: "1rem", 
      padding: "10px 0",
    },
    h2: {
      fontSize: "0.85rem", 
    },
    p: {
      fontSize: "0.8rem", 
      padding: "0 0 10px 5px", 
    },
    btn: {
      fontSize: "0.75rem", 
      padding: "0.5rem 0.75rem", 
    },
  },
};

const BlogSection = ({ id, image, altText, date, title, intro }) => {
  return (
    <div style={styles.blogcard}>
      <img src={image} alt={altText} style={styles.img} />
      <h2 style={styles.h2}>{date}</h2>
      <h1 style={styles.h1}>{title}</h1>
      <p style={styles.p}>{intro}</p>
      <div style={styles.btnContainer}>
        <Link to={`/fullblog/${id}`}>
          <button style={styles.btn}>
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
