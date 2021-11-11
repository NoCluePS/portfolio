import React from 'react';

type ProjectProps = {
  project: {
    name: string;
    githubUrl: string;
    backgroundImage: string;
    shortDescription: string;
  };
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner ">
        <div className="flip-card-front ">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={project.backgroundImage}
            alt="Avatar"
            className="flip-image object-cover"
          />
        </div>
        <div
          className="flip-card-back flex flex-col"
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
        >
          <div className="bg-gray-700 bg-opacity-90 h-full flex flex-col justify-center items-center rounded-xl">
            <h1 className="font-black text-2xl">{project.name}</h1>
            <p className="p-4">{project.shortDescription}</p>
            <a
              href={`${project.githubUrl}`}
              className="mt-2"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                GitHub repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
