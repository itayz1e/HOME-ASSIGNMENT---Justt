import "../style/About.scss";
import VideoSVG from "../assets/VideoSVG.svg";
import GitHubSVG from "../assets/GitHubSVG.svg";
import LinkedInSVG from "../assets/LinkedInSVG.svg";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="title">About Me</h2>
      <div className="linksContainer">
        <a
          href="https://www.linkedin.com/in/itay-amosi/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img
            className="icon"
            src={LinkedInSVG}
            alt="Video"
            width="40"
            height="40"
          />
          LinkedIn
        </a>

        <a
          href="https://github.com/itayz1e"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img
            className="icon"
            src={GitHubSVG}
            alt="Video"
            width="40"
            height="40"
          />
          GitHub
        </a>

        <a
          href="https://drive.google.com/file/d/1umWXdBLAVuoZLktU4YsIvZ7W42cB9qWu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <img
            className="icon"
            src={VideoSVG}
            alt="Video"
            width="40"
            height="40"
          />
          Video
        </a>
      </div>
    </div>
  );
};

export default About;
