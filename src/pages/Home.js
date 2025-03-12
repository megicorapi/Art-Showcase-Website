import React from 'react';
import './Home.css'; 
import heroImage from '../images/hero.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.JPG';
import BlogCard from "../components/BlogCard";
import data from "../data/homeblog.json";



const Home = () => {
  return (
    <div className="container-body">
  
      <section className="hero">
      <img src={heroImage} alt="Van Gogh Artwork" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to the Van Gogh Showcase!</h1>
          <p>Explore the life and masterpieces of Vincent Van Gogh.</p>
        </div>
      </section>

    <section className="framework">

    <div className="divider"></div> 
      
      <div className="framework-content">
      <div className="image-grid">
        <img src={img1} alt="Van Gogh Artwork"/>
        <img src={img2} alt="Van Gogh Artwork"/>
        <img src={img3} alt="Van Gogh Artwork"/>
      </div>

  
    <div className="framework-text">
      <h2>Discover Van Gogh's Masterpieces</h2>
      <p>Immerse yourself in the world of Van Gogh's breathtaking artwork, showcasing vivid colors, bold brushstrokes, and emotional depth.</p>
      <button  onClick={() => window.location.href = '/gallery'}>Explore the Gallery</button>
    </div>
   </div>
   <div className="divider"></div>
    </section>

    <section className="about">
      
  <div className="about-text">
    
    <h2>About Vincent Van Gogh</h2>
    <p>Vincent van Gogh was a Dutch Post-Impressionist painter, who is among the most famous and influential figures in the history of Western art. Despite creating over 2,100 artworks, including about 860 oil paintings, he was virtually unknown during his lifetime and struggled with mental illness.</p>
    <button onClick={() => window.location.href = '/about'}>Learn More About Van Gogh</button> 
  </div>
  
  <img className="img4" src={img4} alt="Van Gogh Portrait" />

</section>

<div className="divider"></div>
<section className="blog">
  <div className="blog-container">
    <h2 className="blog-title">Explore our Blog</h2> 
    <div className="blog-cards">
      {data.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          altText={blog.altText}
          date={blog.date}
          title={blog.title}
        />
      ))}
    </div>

    <button className="btn" onClick={() => window.location.href = '/blog'}>
      View Blogs
    </button> 
  </div>
</section>
<div className="divider"></div>



</div>   
  );
};

export default Home;