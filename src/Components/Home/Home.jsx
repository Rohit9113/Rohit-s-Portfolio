import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import Banner from '../../assets/banner1.jpg';
import ContentList from './ContentList';

function Home() {
    return (
        <>
            <div>
                <div className="relative w-full h-[530px]">
                    {/* <img className="w-full h-full object-cover" src={Banner} alt="Website Banner" /> */}

                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center px-10 md:px-20">
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.h1
                                className="text-4xl md:text-5xl font-bigShoulders font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Rohit Lohra
                            </motion.h1>

                            <motion.p
                                className="mt-3 text-lg md:text-xl font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Passionate Front-End Developer | React.js | Tailwind CSS | Node.js | MongoDB
                            </motion.p>

                            <motion.div
                                className="mt-4 flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                {[
                                    { icon: FaGithub, link: "https://github.com/Rohit9113", color: "gray-300" },
                                    { icon: FaLinkedin, link: "https://www.linkedin.com/in/rohit-lohra-442103219/", color: "blue-400" },
                                ].map(({ icon: Icon, link, color }, index) => (
                                    <motion.a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`text-2xl hover:text-${color} transition duration-300`}
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>


                </div>

                <ContentList />
            </div>
        </>
    );
}

export default Home;
