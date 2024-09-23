import React from 'react';
import styled from 'styled-components';

const Project1 = () => (
    <ProjectDetail>
        <h2>Project 1 - Product Design</h2>
        <p>This project is a redesign concept for a social media app. It focuses on improving user experience and visual appeal.</p>
        <img src="path-to-project1-image" alt="Project 1" />
    </ProjectDetail>
);

export default Project1;

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
