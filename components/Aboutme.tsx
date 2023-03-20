import React from 'react';

import Image from 'next/image';
import MyPhoto from "../public/pfp.png";

import { isMobile } from 'react-device-detect';

export const Aboutme = () => {
  return (
    <div
      className="sm:p-52 my-52 sm:my-0 flex flex-col sm:flex-row justify-evenly sm:justify-between items-center sm:gap-4 h-screen"
      id="about-me"
    >
      <div className="text-center sm:text-left">
        <h1 className="font-black text-xl sm:text-4xl">About me</h1>
        <p className="text-md sm:text-xl px-5 sm:px-0 sm:pl-2 w-full sm:w-1/2">
          I&apos;m Pijus Serapinas. Currently a part-time developer{' '}
          <a href="https://spectrocoin.com/" className="link text-blue-500 ">
            SpectroFinance
          </a>{' '}
         , I am a self-motivated and self-thought React and React-native developer.
          I&apos;m currently 17 years old, and have been programming since 2018.
          I love what I&apos;m doing. And to be honest, ever since first trying
          out programming, I&apos;ve been hooked. Now I&apos;m trying to
          find some extra work, that could maybe help me improve in my desired field
          <br />
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <a
            href="https://docs.google.com/document/d/1fZ5La5uFaqn3-uEMSNKLHyXQ1ZiwuTz_hJM-k-RVfrs/edit?usp=sharing"
            className="link text-blue-500 w-auto "
            target="_blank"
            rel="noreferrer"
          >
            <p className="link text-blue-500">Resume</p>
          </a>
        </p>
      </div>
      <div className="p-10 sm:p-0">
        <Image
          className="rounded-xl resize-none"
          src={MyPhoto}
          alt="Photo"
          height={!isMobile ? 2500 : 750}
          width={!isMobile ? 2000 : 250}
        />
      </div>
    </div>
  );
};
