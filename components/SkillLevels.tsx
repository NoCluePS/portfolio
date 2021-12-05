import React, { useEffect, useRef, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const SkillLevels = () => {
  const [value, setValue] = useState(0);
  const domRef: any = useRef();

  useEffect(() => {
    const setValues = (value: number) => {
      setTimeout(() => {
        setValue(value);
      }, 1000);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setValues(1) : setValues(0);
      });
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className="w-full my-52 flex flex-col items-center justify-center "
    >
      <h1 className="font-black text-3xl my-5 sm:my-10">Skills</h1>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0">
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <h1>React</h1>
          <div className="w-1/3">
            <CircularProgressbar
              value={value * 85}
              text={"85%"}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "#404040",
              })}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <h1>React-native</h1>
          <div className="w-1/3">
            <CircularProgressbar
              value={value * 76}
              text={"76%"}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "#404040",
              })}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <h1>Machine learning</h1>
          <div className="w-1/3">
            <CircularProgressbar
              value={value * 20}
              text={"20%"}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "#404040",
              })}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <h1>Node.js</h1>
          <div className="w-1/3">
            <CircularProgressbar
              value={value * 50}
              text={"50%"}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "#404040",
              })}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <h1>People-skills</h1>
          <div className="w-1/3">
            <CircularProgressbar
              value={value * 10}
              text={"10%"}
              styles={buildStyles({
                textColor: "white",
                pathColor: "white",
                trailColor: "#404040",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
