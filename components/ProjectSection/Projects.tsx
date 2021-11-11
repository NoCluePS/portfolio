import React from 'react';

import { Project } from './Project';

import projectData from '../../data/projectData.json';

export const Projects = () => {
  return (
    <div
      className="h-auto sm:h-screen w-screen text-center flex flex-col sm:justify-center items-center mt-10"
      id="projects"
    >
      <h1 className="font-black text-3xl">Some of my work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-7">
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
