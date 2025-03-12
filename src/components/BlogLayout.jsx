export const styles = {
  blogpost: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  img: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  blogmeta: {
    fontSize: '0.9em',
    color: 'gray',
    marginTop: '5px',
  },
  bt: {
    fontSize: '2em',
    marginTop: '10px',
  },
  bs: {
    fontSize: '1.2em',
    color: '#555',
    marginTop: '5px',
  },
  bp: {
    fontSize: '1em',
    lineHeight: '1.6',
    marginTop: '15px',
  }
};
const BlogLayout = ({ image, altText, date, title, subtitle, content }) => {
  return (
    <div style={styles.blogpost}>
      <img src={image} alt={altText} style={styles.img} />
      <div>
        <span style={styles.blogmeta}>{date}</span>
      </div>
      <h1 style={styles.bt}>{title}</h1>
      <h2 style={styles.bs}>{subtitle}</h2>
      <div style={styles.bp}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;


  
