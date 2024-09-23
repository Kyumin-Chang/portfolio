import React from 'react';
import styled from 'styled-components';

const Project4 = () => (
    <ProjectDetail>
        <h2>Project 4 - Illustration</h2>
        <p>This project includes a set of icons designed for a weather app. The focus was on creating clear and visually appealing icons.</p>
        <img src="path-to-project4-image" alt="Project 4" />
    </ProjectDetail>
);

export default Project4;

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
