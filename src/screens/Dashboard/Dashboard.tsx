import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { getPoems } from "../../services/poetry";
import { useEffect } from "react";
import { setPoems } from "../../store/slices/poems";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  useEffect(() => {
    const poems = getPoems();
    dispath(setPoems(poems));
  }, []);

  //yo la vdd me rendí hace mucho

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
