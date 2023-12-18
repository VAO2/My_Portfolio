"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        {/* <li>PostgreSQL</li>
        <li>Sequelize</li> */}
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>MongoDB.js</li>
        <li>Express.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> <p>2021-2025</p>Pursuing B.Tech in Computer Science and Engineering from NIT Silchar</li>
        <li> <p>2021</p>COMPLETED MY 10+2 FROM Hindustani Kendriya Vidyalaya, Guwahati (CBSE BOARD)</li>
        <li> <p>2019</p>COMPLETED MY 10TH FROM Carmel High School, Jorhat (ICSE BOARD)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Stack Web Development Course (CodeHelp) [2023]</li>
        <li> <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_7WkTJqrC9ftAD78Dg_1688976318807_completion_certificate.pdf"> JP Morgan Chase & Co. Software Engineering Virtual Experience Program:  Forage</Link></li>
        <li> <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_7WkTJqrC9ftAD78Dg_1687254122060_completion_certificate.pdf"> Goldman Sachs Software Engineering Virtual Experience Program:  Forage</Link></li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li> AIR 812 in Codekaze 2023 conducted by Coding Ninjas</li>
        <li> Under 150 rank in college in GFG</li>
        <li> Solved 750+ Letcode DSA Problems</li>
        <li> Runner Up at Soft CodeHack 1.0-May,2023</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express,
             HTML, CSS, MongoDb, Mongoose, Git and Github. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
