import React from 'react';
import styled from 'styled-components';

const Project3 = () => (
    <ProjectDetail>
        <h2>Project 3 - Mobile App Design</h2>
        <p>This project is a UI kit for a food delivery app. It emphasizes usability and accessibility for a wide range of users.</p>
        <img src="path-to-project3-image" alt="Project 3" />
    </ProjectDetail>
);

export default Project3;

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
