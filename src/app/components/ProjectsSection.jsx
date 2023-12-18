"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digi X EduHub Ecommerce Website using MERN Stack",
    description: "Some key features of this project are:- User can create account as STUDENT or INSTRUCTIOR, INSTRUCTOR can create courses and see his/her overall analytics., STUDENT Can buy courses, watch the content in them., STUDENT can review the courses., Payment integration is there through RAZORPAY.",
    image: "/images/projects/1.png",
    // tag: ["All","Web"],
    tag: ["All"],
    gitUrl: "https://github.com/VAO2",
    previewUrl: "https://github.com/VAO2",
  },
  {
    id: 2,
    title: "Contact Handler",
    description: "This is a react based real time Contact handling site where one can save contacts edit and call saved contacts effortlessly in a few clicks. With real time search functionality and accuracy say bye to endless scrolling.",
    image: "/images/projects/9.png",
    tag: ["All"],
    gitUrl: "https://github.com/VAO2/Contact-Handler",
    previewUrl: "https://github.com/VAO2",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "This is a react based one stop shopping website to select your favourite outfits, accessories and put them in your wishlist/cart just in few clicks.",
    image: "/images/projects/8.png",
    tag: ["All"],
    gitUrl: "https://github.com/VAO2/Shopping-Cart",
    previewUrl: "https://jolly-khapse-6c878f.netlify.app/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "This is my portfolio website by through this website you can connect with me and you also watch my Tech journey. In this project we are using HTML, CSS, JAVASCRIPT, REACT.JS, NODE.JS.",
    image: "/images/projects/7.png",
    // tag: ["All", "Web"],
    tag: ["All"],
    gitUrl: "https://github.com/VAO2",
    previewUrl: "https://github.com/VAO2",
  },
  {
    id: 5,
    title: "Razorpay Website Clone",
    description: "Secure Payment Processing, User-Friendly interface, Responsive Design, Seamless integration, Animations",
    image: "/images/projects/5.png",
    // tag: ["All","Web"],
    tag: ["All"],
    gitUrl: "https://github.com/VAO2",
    previewUrl: "https://github.com/VAO2",
  },
  {
    id: 6,
    title: "Weather-App",
    description: "A Weather forcasting Website that takes Location from the users and tells the weather of that location. It is also able to find the weather forcast of any location thats given by the user",
    image: "/images/projects/6.png",
    // tag: ["All", "Web"],
    tag: ["All"],
    gitUrl: "https://github.com/VAO2/WeatherApp",
    previewUrl: "https://github.com/VAO2/WeatherApp",
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
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
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