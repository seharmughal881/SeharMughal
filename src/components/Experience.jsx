// // import React from "react";
// // import {
// //   VerticalTimeline,
// //   VerticalTimelineElement,
// // } from "react-vertical-timeline-component";
// // import "react-vertical-timeline-component/style.min.css";

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";


// // ====== Example imports (replace these paths with your actual ones) ======
// import { SectionWrapper } from "../hoc/SectionWrapper";
// // import { Header } from "../atoms/Header";
// // import { config } from "../../constants/config";

// // ====== Example icons (replace with your actual imported images) ======
// // import starbucks from "../../assets/starbucks.png";
// // import tesla from "../../assets/tesla.png";
// // import shopify from "../../assets/shopify.png";
// // import meta from "../../assets/meta.png";

// // ====== Experiences Data ======
// const experiences = [
//   {
//     title: "React.js Developer",
//     companyName: "Starbucks",
//     // icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     companyName: "Tesla",
//     // icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining mobile and web applications using React Native.",
//       "Working closely with UI/UX designers to deliver user-friendly mobile experiences.",
//       "Debugging and optimizing performance for smooth mobile operation.",
//       "Participating in sprint reviews and contributing to team discussions.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     companyName: "Shopify",
//     // icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Building and maintaining eCommerce dashboards using modern frontend tools.",
//       "Collaborating with backend developers to integrate APIs and enhance functionality.",
//       "Ensuring responsive and accessible design across all devices.",
//       "Performing quality assurance and writing documentation.",
//     ],
//   },
//   {
//     title: "Full Stack Developer",
//     companyName: "Meta",
//     // icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing full-stack web applications using React, Node.js, and MongoDB.",
//       "Designing RESTful APIs and integrating frontend with backend efficiently.",
//       "Collaborating in agile sprints with designers, PMs, and engineers.",
//       "Implementing authentication, performance optimization, and testing.",
//     ],
//   },
// ];

// // ====== Experience Card ======
// const ExperienceCard = ({ title, companyName, icon, iconBg, date, points }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={date}
//       iconStyle={{ background: iconBg }}
//       icon={
//         <div className="flex h-full w-full items-center justify-center">
//           <img
//             src={icon}
//             alt={companyName}
//             className="h-[60%] w-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-[24px] font-bold text-white">{title}</h3>
//         <p
//           className="text-secondary text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {companyName}
//         </p>
//       </div>

//       <ul className="ml-5 mt-5 list-disc space-y-2">
//         {points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-white-100 pl-1 text-[14px] tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// // ====== Main Experience Component ======
// // const Experience = () => {
// //   return (
// //     <>
// //       {/* <Header useMotion={true} {...config.sections.experience} /> */}

// //       <div className="mt-20 flex flex-col">
// //         <VerticalTimeline>
// //           {experiences.map((experience, index) => (
// //             <ExperienceCard key={index} {...experience} />
// //           ))}
// //         </VerticalTimeline>
// //       </div>
// //     </>
// //   );
// // };
// export default function Experience() {
//   return (
//     <div className="text-white p-10">
//       <h2>Testing Timeline</h2>
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           date="2024 - Present"
//           iconStyle={{ background: "#4CAF50", color: "#fff" }}
//         >
//           <h3>Timeline Works ✅</h3>
//           <p>If you see this, the library is fine.</p>
//         </VerticalTimelineElement>
//       </VerticalTimeline>
//     </div>
//   );
// }
// // export default Experience;
// // const WrappedExperience = SectionWrapper( "work");
// // export default WrappedExperience;


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
import heap from "../assets/heap.jpg";

// ========== Experience Data ==========
const experiences = [
  {
    title: "Frontend Developer",
    companyName: "Heapware",
    icon: heap,
    iconBg: "#383E56",
    date: "Jan 2023 – Jun 2023",
    points: [
      "Built responsive and interactive user interfaces using React.js and TailwindCSS.",
      "Implemented reusable components and optimized rendering for performance.",
      "Ensured cross-browser compatibility and mobile-first design.",
      "Collaborated with designers to translate Figma/Sketch designs into pixel-perfect UI.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "Heapware",
    icon: heap,
    iconBg: "#E6DEDD",
    date: "Jul 2023 – Dec 2023",
    points: [
      "Designed and developed RESTful APIs using Node.js and Express.",
      "Implemented database schemas and managed MongoDB collections.",
      "Built authentication, authorization, and secure data handling.",
      "Optimized server-side logic for speed and scalability.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Heapware",
    icon: heap,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Integrated frontend React apps with backend APIs to create seamless workflows.",
      "Managed end-to-end project deployment.",
      "Implemented performance optimizations and error handling across the stack.",
      "Collaborated across teams to deliver features from design to production.",
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
