import { useNavigate } from "react-router-dom";
import "./intro.css";

const Intro = ( ) => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <h1 className="intro-title">Welcome to PoemWorld</h1>
      <p className="intro-description">
        Discover, read, and share beautiful poems from around the world. Let
        your imagination flow like verses of poetry.
      </p>
      <button className="intro-button" onClick={() => navigate('/dashboard')}>
        Next
      </button>
    </div>
  );
};

export default Intro;
