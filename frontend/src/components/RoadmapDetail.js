import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RoadmapDetail = () => {
  const { specialization } = useParams();
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/roadmaps/${specialization}`)
      .then(response => setRoadmap(response.data))
      .catch(err => console.log(err));
  }, [specialization]);

  if (!roadmap) return <div>Loading...</div>;

  return (
    <div>
      <h1>{roadmap.specialization} Roadmap</h1>
      <p>Semester {roadmap.semester}</p>
      <h2>Subjects</h2>
      <ul>
        {roadmap.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {roadmap.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Projects</h2>
      <ul>
        {roadmap.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <h2>Certifications</h2>
      <ul>
        {roadmap.certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapDetail;