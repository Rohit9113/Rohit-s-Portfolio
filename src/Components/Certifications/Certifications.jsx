import React from "react";
import { motion } from "framer-motion";
import cert from '../../assets/Certifications.png';
import reactcert from '../../assets/Certificates/CN_React.pdf'
import Nodejscert from '../../assets/Certificates/CN_BackEnd.pdf'
import JavaCert from '../../assets/Certificates/CN_JAVA.pdf'

const certifications = [
    {
        title: "React",
        organization: "Coding Ninjas",
        date: "April 2023 to June 2023",
        certificateLink: reactcert
    },
    {
        title: "Back End in Node.js",
        organization: "Coding Ninjas",
        date: "February 2023 to April 2023",
        certificateLink: Nodejscert
    },
    {
        title: "Introduction to JAVA",
        organization: "Coding Ninjas",
        date: "August 2022 to September 2022",
        certificateLink: JavaCert
    },
    {
        title: "Networking Basics",
        organization: "Cisco",
        date: "August 13, 2024",
        certificateLink: "https://www.credly.com/badges/553c7618-0fd3-4227-9012-1e4b770a140a/public_url"
    },
    {
        title: "React(Basics)",
        organization: "hackerrank",
        date: "August 16, 2023",
        certificateLink: "https://www.hackerrank.com/certificates/df61979088c8"
    },
    {
        title: "JavaScript(Basics)",
        organization: "hackerrank",
        date: "August 16, 2023",
        certificateLink: "https://www.hackerrank.com/certificates/9deb722a2a5c"
    }
];

function Certifications() {
    return (
        <>
            <div className="shadow-md">
                <div className="">
                    <motion.img
                        src={cert}
                        alt="Degree"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-md w-full h-96"
                    />
                </div>
            </div>

            <div className="p-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                            <p className="text-gray-700 mt-1">{cert.organization}</p>
                            <p className="text-gray-600 text-sm">{cert.date}</p>
                            <a
                                href={cert.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                            >
                                View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Certifications;