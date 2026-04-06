import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Example icons (replace these with your own imports)
// import meta from "../assets/meta.png";
// import shopify from "../assets/shopify.png";
// import tesla from "../assets/tesla.png";
import heap from "../assets/heapware-logo.webp";

// ========== Experience Data ==========
const experiences = [
  {
    title: "Full Stack Developer",
    companyName: "Musa Soft Services",
    icon: heap,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Architected and developed full-stack applications using React.js/Next.js (frontend), Node.js/Express (backend), and MongoDB (database).",
      "Onsite position at Arfa Tower, Lahore",
    ],
  },
  {
    title: "Instructor of MERN Stack Developer",
    companyName: "Ideoversity",
    icon: heap,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Sep 2024",
    points: [
      "Delivering comprehensive training in MongoDB, Express.js, React.js, and Node.js.",
      "Covering RESTful APIs, authentication (JWT), database design, and deployment.",
      "Located in Wapda Town, Lahore",
    ],
  },
  {
    title: "MERN Stack Developer",
    companyName: "Heapware",
    icon: heap,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Designed and implemented RESTful APIs and endpoints with Express.js enabling efficient data communication between services.",
      "Error handling, authentication (JWT), and role-based access control (RBAC) in Node.js backend, enhancing app security.",
      "Built dynamic, mobile-responsive UIs using React.js, Context API, TailwindCSS, and Material UI.",
      "Integrated API responses into frontend with Axios and React Query, optimizing for performance with caching and lazy loading.",
      "Mentored junior developers on full-stack best practices, code structure.",
    ],
  },
  // {
  //   title: "Full Stack Developer",
  //   companyName: "Meta",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing full-stack web applications using React, Node.js, and MongoDB.",
  //     "Designing RESTful APIs and integrating frontend with backend.",
  //     "Collaborating with teams in agile sprints.",
  //     "Implementing authentication, optimization, and testing.",
  //   ],
  // },
];

// ========== Experience Card Component ==========
const ExperienceCard = ({
  title,
  companyName,
  icon,
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          {icon ? (
            <img
              src={icon}
              alt={companyName}
              className="h-[60%] w-[60%] object-contain"
            />
          ) : (
            <span className="text-white text-xs">No Icon</span>
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-[20px] font-bold text-white">{title}</h3>
        <p className="text-secondary text-[14px] font-semibold m-0">
          {companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li
            key={index}
            className="text-gray-300 text-[13px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// ========== Main Experience Component ==========
export default function Experience() {
  return (
    <div id="experience"  className="text-white p-10 mt-20">
      <h1 className="text-6xl font-bold text-left mb-10">
        Work Experience
      </h1>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
}
