import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <Outlet />
            <footer className="bg-white text-white py-10 px-6 shadow-t-lg shadow-black">
                <div className="text-center text-gray-500 text-lg font-bold">
                    Made by ROHIT LOHRA
                </div>
            </footer>
        </>
    );
};

export default Footer;