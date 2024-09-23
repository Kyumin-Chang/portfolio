import React from 'react';
import styled from 'styled-components';

const Project2 = () => (
    <ProjectDetail>
        <h2>Project 2 - Web Development</h2>
        <p>This project involved creating a landing page for a fictional company. The goal was to build a responsive and modern website.</p>
        <img src="path-to-project2-image" alt="Project 2" />
    </ProjectDetail>
);

export default Project2;

const ProjectDetail = styled.section`
  padding: 60px 20px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 32px;
  }

  p {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
