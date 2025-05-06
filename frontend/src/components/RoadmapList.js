import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RoadmapList = () => {
  const [roadmaps, setRoadmaps] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/roadmaps`)
      .then(response => setRoadmaps(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>B.Tech Roadmaps</h1>
      <ul>
        {roadmaps.map((roadmap, index) => (
          <li key={index}>
            <Link to={`/roadmap/${roadmap.specialization}`}>
              {roadmap.specialization}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapList;
