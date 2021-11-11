import React from 'react';
import Particles from 'react-particles-js';
import { particleConfig } from '../config/particle-config';

export const Background: React.FC = ({ children }) => {
  return (
    <div className="h-screen hidden sm:block">
      <Particles params={particleConfig as any}></Particles>
    </div>
  );
};
