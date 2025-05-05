import React from "react";
import { motion } from "framer-motion";
import deg from "../../assets/Degree.webp";
import cuLogo from "../../assets/CU.png";
import ysmLogo from "../../assets/ysm.jpg";

const educationData = [
  {
    logo: cuLogo,
    degree: "MCA - Master of Computer Applications",
    institution: "Chandigarh University Mohali",
    duration: "2021 - 2023",
    result: "CGPA: 6.6",
    details: [
      "Studied core subjects like Data Structures, Algorithms, DBMS, and Operating Systems.",
      "Completed courses on Full Stack Development.",
      "Worked on projects involving modern web technologies and software engineering best practices."
    ],
    website: "https://www.cuchd.in/"
  },
  {
    logo: ysmLogo,
    degree: "BCA - Bachelor of Computer Applications",
    institution: "YSM College Dhruwa Ranchi Jharkhand",
    duration: "2018 - 2021",
    result: "Percentage: 78.48%",
    details: [
      "Learned programming languages like Java, JavaScript, and C/C++.",
      "Developed foundational knowledge in networking.",
      "Engaged in practical web development projects and software applications."
    ],
    website: "#"
  },
  {
    logo: ysmLogo,
    degree: "I.COM - Intermediate",
    institution: "YSM College Dhruwa Ranchi Jharkhand",
    duration: "2016 - 2018",
    result: "Percentage: 51%",
    details: [
      "Studied commerce-related subjects and business fundamentals.",
      "Participated in extracurricular activities and academic projects."
    ],
    website: "#"
  }
];

function Educations() {
  return (
    <>
      <div className="p-6 shadow-md">
        <div className="flex items-center justify-center">
          <motion.img
            src={deg}
            alt="Degree"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="p-6">
        <motion.p
          className="text-4xl font-bigShoulders font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Degrees Received
        </motion.p>

        <div className="py-5 space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-blue-100 p-6 rounded-lg shadow-md gap-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={edu.logo} alt={edu.institution} className="w-48 h-48 rounded-full shadow-lg" />
              <div className="flex-1">
                <p className="text-2xl font-semibold text-blue-900">{edu.institution}</p>
                <p className="text-lg font-medium text-blue-700">{edu.degree}</p>
                <p className="text-gray-600">{edu.duration} | {edu.result}</p>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-green-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-800"
                >
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Educations;