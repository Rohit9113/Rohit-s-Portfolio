import React from "react";
import { motion } from "framer-motion";
import projectbn from '../../assets/Projects.jpg'

const projects = [
    {
        title: "Find Movies",
        description: "This project is a React-based website that displays the movies using the Top 100 Movies API from RapidAPI. It features a home page listing movies and a detailed page for each movie using React and Tailwind CSS.",
        github: "https://github.com/Rohit9113/FindMovies"
    },
    {
        title: "File Sharing Web App",
        description: "The Fire Reporting System is a web application developed using the Django framework. It provides a platform for users to report fire incidents and enables the management of these incidents by authorized personnel.",
        github: "https://github.com/Rohit9113/FSWebApp"
    },
    {
        title: "Quiz Project",
        description: "The Quiz Project is a web-based application that allows users to take quizzes on various topics. It is built using JavaScript, HTML/CSS, and Bootstrap for a responsive and user-friendly interface.",
        github: "https://github.com/Rohit9113/CodingQuizMenia.github.io"
    },
    {
        title: "CRUD API",
        description: "This is a simple RESTful API that performs CRUD operations (Create, Read, Update, Delete) on a collection in a MongoDB database. The API is built using Node.js, Express.js, and MongoDB. It provides endpoints to manage items in the database.",
        github: "https://github.com/Rohit9113/CRUD-API"
    },
    {
        title: "MERN Stack Chat Application",
        description: "A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to engage in seamless messaging with a sleek and responsive UI.",
        github: "https://github.com/Rohit9113/Mern-Chat-App"
    },
    {
        title: "Portfolio Website",
        description: "Designed a personal portfolio website showcasing projects, skills, and experience.",
        github: "https://github.com/Rohit9113/Portfolio"
    }
];

function Projects() {
    return (
        <>
            <div className="p-6 shadow-md">
                <div className="flex items-center justify-center">
                    <motion.img
                        src={projectbn}
                        alt="Degree"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
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
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                            >
                                View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a
                        href="https://github.com/Rohit9113"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
                    >
                        See More Projects on GitHub
                    </a>
                </div>
            </div>
        </>
    );
}

export default Projects;