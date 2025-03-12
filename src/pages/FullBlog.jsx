import { useParams } from 'react-router-dom';
import fullblog from '../data/fullblog.json';
import BlogLayout from '../components/BlogLayout';

const FullBlog = () => {
  const { id } = useParams();
  const blog = fullblog.find((blog) => blog.id === id); 
  

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="full-blog">
      <BlogLayout
        image={blog.image}
        altText={blog.altText}
        date={blog.date}
        title={blog.title}
        subtitle={blog.subtitle}
        content={blog.content}
      />
    </div>
  );
};

export default FullBlog;
