import { useLocation, useNavigate } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const {poem} = useLocation().state;
  const navigate = useNavigate();

  const { author, linecount, title } = poem;

  const content = "Why is this not rendering? ..... 😅";

  return (
    <div className="detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <div className="content">{content}
        <p>bc i give up</p>
      </div>
      <p className="lines">{linecount}</p>
    </div>
  );
};

export default Detail;
