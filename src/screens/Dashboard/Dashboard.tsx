import { useSelector } from "react-redux";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const poems = useSelector((state) => state.poems);
  console.log(poems);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {/*poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => onViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))*/}
      </div>
      <button onClick={() => navigate('/form')}>Create Poem</button>
    </div>
  );
};

export default Dashboard;
