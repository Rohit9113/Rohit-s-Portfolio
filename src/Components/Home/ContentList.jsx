import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone,FaStar, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import myphoto from '../../assets/Pic.jpg';
import CV from '../../assets/MyCV.pdf';

function ContentList() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <motion.div
                className='flex flex-col md:flex-row bg-white drop-shadow-2xl rounded-xl p-10 w-[90%] max-w-8xl'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Profile Image */}
                <motion.div
                    className='flex-1 flex justify-center items-center'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={myphoto} alt="Profile" className='w-72 h-72 border-2 border-gray-800 rounded-full' />
                </motion.div>

                {/* Contact Details */}
                <motion.div
                    className='flex-1 px-6 md:px-10'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bigShoulders font-bold mb-6 text-gray-900">Contact Me</h2>
                    <p className="flex items-center text-gray-600 text-lg mb-2"><FaEnvelope className="mr-3 text-blue-600" /> rohitlohra3036@gmail.com</p>
                    <p className="flex items-center text-gray-600 text-lg mb-4"><FaPhone className="mr-3 text-green-600" /> +91 9113130488</p>
                    <div className="flex space-x-6 text-2xl">
                        <a href="https://github.com/Rohit9113" className="text-gray-600 hover:text-black transition-all duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rohit-lohra-442103219/" className="text-gray-600 hover:text-blue-600 transition-all duration-300">
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* <div className="mt-8 flex flex-col items-start">
                        <h2 className="text-xl font-semibold">Please rate my portfolio:</h2>
                        <div className="flex mt-2">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <motion.button
                                        key={index}
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-3xl text-yellow-500 cursor-pointer transition duration-300"
                                    >
                                        <FaStar className={ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'} />
                                    </motion.button>
                                );
                            })}
                        </div>
                        {rating > 0 && <p className="mt-2 text-lg font-medium">Thank You for your {rating} stars!</p>}
                    </div> */}

                    <div className="mt-6 flex justify-start">
                        <motion.a
                            href={CV}
                            download="Rohit_Lohra_CV.pdf"
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-lg font-medium hover:bg-gray-800 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaDownload /> Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default ContentList;
