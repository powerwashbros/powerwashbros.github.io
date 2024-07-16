import './Projects.css';
import heroData from '../data/heroimages.json';

const Projects = () => {
  const hero = heroData.find(h => h.name === 'projects');

  return (
    <section className={`project-section ${hero?.shade === "dark" ? "black" : "white"}`} id="projects">
      {hero && (
        <img className="background" src={hero.src} alt={hero.alt} style={{ display: 'none' }} /> // Hide background image if not needed
      )}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/g-imP1Bwhwo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Projects;