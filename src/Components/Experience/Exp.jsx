import React from "react";
import { motion } from "framer-motion";
import assignerLogo from "../../assets/theassigner02_logo.jpeg";
import solarSecureLogo from "../../assets/solar-secure-logo.png";
import WorkExp from '../../assets/WorkExp.avif';
import SSIntership from '../../assets/SolerSecure.pdf';
import TheAS from '../../assets/TheAssignerI.pdf';

const experienceData = [
    {
        logo: assignerLogo,
        role: "Frontend Developer Intern",
        company: "The Assigner, Karnal",
        duration: "Nov 2023 – Feb 2024",
        details: [
            "Developed key employee management pages for an HRMS, including attendance tracking, leave records, salary breakdowns, and performance monitoring.",
            "Implemented features for Team Leaders to manage their teams, add/remove employees, and track team performance.",
            "Worked on the administrative dashboard, integrating attendance and performance graphs to provide insights into employee productivity.",
            "Utilized React.js and Tailwind CSS for frontend development and integrated APIs provided by the backend team to ensure seamless data flow."
        ],
        certificate: TheAS,
    },
    {
        logo: solarSecureLogo,
        role: "Full Stack Development Intern",
        company: "Solar Secure Solution",
        duration: "Sep 2023 – Nov 2023",
        details: [
            "Developed a secure, user-friendly restaurant website, incorporating MySQL for database management, PayPal for payment processing, and robust user management features.",
            "Engineered dynamic product displays with seamless payment integration using HTML/CSS, Bootstrap, and Node.js, enhancing the user experience and operational efficiency.",
            "Oversaw the comprehensive management of users, products, payments, and orders, ensuring seamless and secure web operations."
        ],
        certificate: SSIntership,
    }
];

function Exp() {
    return (
        <>
            <div className="p-6 shadow-md">
                <div className="flex items-center justify-center">
                    <motion.img
                        src={WorkExp}
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
                    Experience & Internships
                </motion.p>

                <div className="py-5 space-y-6">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md gap-10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={exp.logo} alt={exp.company} className="w-40 h-40 rounded-full shadow-lg" />
                            <div className="flex-1">
                                <p className="text-2xl font-semibold text-gray-900">{exp.company}</p>
                                <p className="text-lg font-medium text-gray-700">{exp.role}</p>
                                <p className="text-gray-600">{exp.duration}</p>
                                <ul className="list-disc pl-5 text-gray-700 mt-2">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                                <a
                                    href={exp.certificate}
                                    download="Intership_Certificate.pdf"
                                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                                >
                                    Download Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Exp;