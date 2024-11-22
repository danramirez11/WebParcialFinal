import { useSelector } from "react-redux";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { Poem } from "../../types/poems";
import { Store } from "../../store/store";

const Dashboard = () => {
  const navigate = useNavigate();
  const poems: Poem[] = useSelector((state: Store) => state.poems.poems);

  

  //yo la vdd me rendí hace mucho

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines[0]}...</p>
            <button className="poem-button" onClick={() => navigate('/detail', {state: {poem: poem}})}>
              Read More
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/form')}>Create Poem</button>
    </div>
  );
};

export default Dashboard;
