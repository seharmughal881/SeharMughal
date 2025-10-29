import React from "react";

import Tilt from "react-parallax-tilt";
import { Motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import jj from "../assets/jj.png";
import medi from "../assets/medi.jpeg";
import bul from "../assets/bul.png";
import lms from "../assets/lms.png";
import last from "../assets/last.png";
import p from "../assets/p.png";
// Data (JSX / plain JavaScript version of your TProject[])
const projects = [
 
  {
    name: "Medical Website",
    description: "A complete healthcare website built with Next.js, Tailwind CSS, and MongoDB. It lets users book appointments, manage data, and enjoy a smooth experience on any device.",
      tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: medi,
    sourceCodeLink: "https://github.com/seharmughal881",
    Link: "https://medicalproject-teal.vercel.app/"
  },
  {
    name: "LMS",
    description:
      // "Built a full-featured LMS with Admin, Teacher, Student, and Staff modules.Implemented course management, quizzes, and attendance tracking with a responsive UI designed in Tailwind CSS and secure role-based access using Node.js and MongoDB.",
   "Full-featured LMS with Admin, Teacher, Student, and Staff modules. Includes course management, quizzes, and attendance , with a responsive Tailwind CSS using Node.js & MongoDB.",
      tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: lms,
    sourceCodeLink: "https://github.com/seharmughal881",
    Link: "https://learning-management-system-one-ruby.vercel.app/"
  },
  {
    name: "Real Estate Platform",
    description:
"A modern and responsive platform to explore, buy, or rent properties. Built with Next.js and Tailwind CSS for a fast, smooth, and user-friendly experience.",    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      // { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: bul,
    sourceCodeLink: "https://github.com/seharmughal881",
    Link: "https://bluepeakeng.com/"
  },
   {
    name: "E-commerce Website",
    description:
      "I built the J. Jamshad website from scratch using Next.js and Tailwind CSS. It’s fully responsive, smooth, and designed with a clean, modern look that reflects a personal brand.",
    tags: [
      { name: "React.js ", color: "blue-text-gradient" },
      // { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: jj,
        // imageSrc: '/images/jj.png',

    sourceCodeLink: "https://github.com/seharmughal881",
    Link: "https://j-jamshad-website.vercel.app/"
  },
  {
    name: "Portfolio Website",
    description:
"A sleek, modern, and fully responsive personal portfolio built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience in a clean and interactive way.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      // { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
    ],
    image: p,
    sourceCodeLink: "https://github.com/seharmughal881",
    Link: "#"
  },
  {
    name: "Soon",
    description:
"A modern, responsive shopping cart feature built with Next.js and Tailwind CSS. Smooth, fast, and user-friendly – stay tuned!",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      // { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
    ],
    image: last,
    sourceCodeLink: "https://github.com/",
    Link: "#"
  },
];

// Small reusable ProjectCard component (JSX)

function ProjectCard({ index, name, description, tags, image, sourceCodeLink ,Link}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        glarePosition="all"
        glareMaxOpacity={0.45}
        scale={1.05}
        transitionSpeed={450}
        className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] shadow-lg hover:shadow-xl transition"
        style={{ backgroundColor: "#291F38" }}

      >
  
 <div
 className="relative h-[230px] w-full  cursor-pointer"
  onClick={() => window.open(Link, "_blank")}
  >
     <img
       src={image} 
    alt={name}
    className="h-full w-full rounded-2xl object-cover"
                />



           <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
              src="/images/github.png"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFGpZnJNxyBhEiG30YadL3pIeBhuwEF_UfF8YtbQrGY95JFXQbZzNNf8eLKVIrMUaLiA&usqp=CAU"
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
        </div>    


        <div className="mt-5">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-400 mt-2 text-sm">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`${tag.color} text-xs`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

// Main page component that renders everything in one place
export default function ProjectsPage() {
  return (
  
    <motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="p-6 max-w-7xl mx-auto my-20"
>
  <header className="mb-8">
    <motion.h2 variants={fadeIn("", "", 0.1, 1)} className="text-6xl font-bold">
      My Projects
    </motion.h2>
  <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-6 max-w-3xl text-[16px] leading-[28px] text-gray-200 tracking-wide bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] p-5 rounded-xl  shadow-lg hover:shadow-xl transition duration-300"
>
  Following projects showcase my skills and experience through real-world examples of my work.
  Each project is briefly described with links to code repositories and live demos.
  It reflects my ability to solve complex problems, work with different technologies,
  and manage projects effectively.
</motion.p>


  </header>

  <div className="mt-6 flex flex-wrap gap-7">
    {projects.map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
    ))}
  </div>
</motion.section>

  );
}
