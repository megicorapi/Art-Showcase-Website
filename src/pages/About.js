import React from 'react';
import img5 from '../images/img5.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="header">
        <h1 className="header-title">Vincent Willem van Gogh</h1>
        <p className="header-text">Discover the life and legacy of Vincent Willem van Gogh, the visionary artist whose iconic works continue to inspire the world with their beauty, emotion, and brilliance. </p>
      </div>
      <section className="bio-header">
        <div className="bio-content">
          <h2>BIOGRAPHY</h2>
          <p className="bio-subtitle">
            A visionary artist whose passion and perseverance transformed struggles into masterpieces, leaving an indelible mark on the world of art.
          </p>
          <div className="divider"></div>
          <div className="bio-description-wrapper">
            <p className="bio-description">
              Vincent van Gogh (born March 30, 1853, Zundert, Netherlands—died July 29, 1890, Auvers-sur-Oise, near Paris, France) was a Dutch painter, generally considered the greatest after Rembrandt van Rijn, and one of the greatest of the Post-Impressionists. The striking color, emphatic brushwork, and contoured forms of his work powerfully influenced the current of Expressionism in modern art. Van Gogh’s art became astoundingly popular after his death, especially in the late 20th century, when his work sold for record-breaking sums at auctions around the world and was featured in blockbuster touring exhibitions. In part because of his extensive published letters, van Gogh has also been mythologized in the popular imagination as the quintessential tortured artist.
            </p>
            <img className="bio-image" src={img5} alt="Vincent van Gogh" />
          </div>

          <div>
            <h1 className="bio-content">Early Life and Education</h1>
            <p className="bio-description">
              Vincent Willem van Gogh was born on March 30, 1853, in the small Dutch village of Zundert. He was the eldest of six children in a religious and middle-class family. His father, Theodorus van Gogh, was a minister, and his mother, Anna Cornelia Carbentus, was an artistically inclined woman who inspired Vincent's early interest in drawing. As a child, Van Gogh displayed an intense and moody personality, which would later manifest in his art.
              Van Gogh's formal education was sporadic. He attended several schools but struggled to find his place in the world. In 1869, at the age of 16, he began working at the art dealership Goupil & Cie in The Hague, which introduced him to the art world and exposed him to contemporary artists. However, his dissatisfaction with the commercial aspects of art led him to leave the firm after several years.
            </p>

            <h1 className="bio-content">Early Career and Religious Pursuits</h1>
            <p className="bio-description">
              After leaving Goupil & Cie, Van Gogh pursued a career in the church. He briefly worked as a teacher and missionary in Belgium's coal-mining region, where he empathized deeply with the miners' suffering and poverty. His compassionate but unorthodox approach to missionary work ultimately led to his dismissal. This period of struggle and self-discovery profoundly influenced his artistic vision.
              It was during this time that Van Gogh decided to dedicate his life to art. Encouraged by his brother, Theo van Gogh, who supported him financially and emotionally, Vincent began studying art seriously. His early works depicted the harsh realities of peasant life, with dark tones and somber themes, inspired by artists like Jean-François Millet.
            </p>

            <h1 className="bio-content">The Transition to Impressionism</h1>
            <p className="bio-description">
              In 1886, Van Gogh moved to Paris to live with Theo, who was working as an art dealer. There, he was introduced to the works of the Impressionists and Post-Impressionists, including Claude Monet, Camille Pissarro, and Paul Gauguin. The vibrant colors and loose brushwork of these artists profoundly influenced Van Gogh, leading to a significant transformation in his style.
            </p>

            <h1 className="bio-content">Arles and the Sunflower Period</h1>
            <p className="bio-description">
              In 1888, seeking a more tranquil and inspiring environment, Van Gogh moved to Arles in the south of France. The bright landscapes and rural surroundings inspired some of his most famous works, including his series of sunflower paintings. He envisioned establishing an artists' community in Arles and invited Paul Gauguin to join him.
            </p>

            <h1 className="bio-content">Struggles with Mental Health</h1>
            <p className="bio-description">
              Van Gogh's mental health deteriorated further, leading to several hospitalizations in psychiatric institutions. Despite his struggles, he continued to produce an astonishing number of masterpieces, including "Starry Night," painted during his stay at the Saint-Rémy-de-Provence asylum. His work during this period reflected his emotional turmoil, with swirling skies and expressive, intense colors.
            </p>

            <h1 className="bio-content">Final Years and Death</h1>
            <p className="bio-description">
              In May 1890, Van Gogh moved to Auvers-sur-Oise, near Paris, under the care of Dr. Paul Gachet, who was both a physician and an amateur painter. During this time, he painted feverishly, producing over 70 works in just a few months. His paintings from this period, such as "Wheatfield with Crows," reflect his increasing despair and emotional turmoil.
            </p>

            <h1 className="bio-content">Legacy and Influence</h1>
            <p className="bio-description">
              Today, Van Gogh's paintings are among the most celebrated and valuable in the world. His works are housed in major museums, including the Van Gogh Museum in Amsterdam, which is dedicated to preserving his legacy. His influence extends beyond the art world, inspiring literature, film, and popular culture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;