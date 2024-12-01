"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    ),
  },
  {
    title: "AI Technologies",
    id: "ai frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>Pandas</li>
        <li>Numpy</li>
        <li>Matplotlib</li>
        <li>Scikit-Learn</li>
        <li>Tensorflow</li>
        <li>Open-CV</li>
        <li>LangChain</li>
      </ul>
    ),
  },
  {
    title: "Web Technologies",
    id: "web",
    content: (
      <ul className="list-disc pl-2">
        <li>TailwindCss</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>ExpressJs</li>
        <li>NodeJs</li>
        <li>Prisma</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center mt-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="hero" width={500} height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m an AI engineer and full-stack web developer with a passion for creating impactful and scalable solutions. With expertise spanning machine learning, deep learning, and web development, I specialize in building intelligent systems and end-to-end applications. Currently, I continue to expand my knowledge at the intersection of AI and software engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ai frameworks")}
              active={tab === "ai frameworks"}
            >
              {" "}
              AI Framework{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              {" "}
              Web Technologies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          <br></br>
          <p className="text-base lg:text-lg">
          Outside of work, I'm interested in following the developments of science. I also play a lot of video games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
