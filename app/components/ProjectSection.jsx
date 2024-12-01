"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 2,
  //   title: "Potography Portfolio Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A.R.I.A",
    description: "A chatbot that helps answer from given images or pdfs",
    image: "/images/projects/4.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/SiddheshDeshmukh2212/A.R.I.A",
    previewUrl: "https://ariabot.streamlit.app/",
  },
  {
    id: 5,
    title: "GestureAI",
    description: "American Sign Language Dectection Website",
    image: "/images/projects/5.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AI Pathfinder",
    description: "An A* visulizer for finding paths",
    image: "/images/projects/6.png",
    // image: "/images/projects/7.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/SiddheshDeshmukh2212/Pathfinding",
    previewUrl: "https://github.com/SiddheshDeshmukh2212/Pathfinding/blob/main/images/A-star.gif",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "Ai"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
