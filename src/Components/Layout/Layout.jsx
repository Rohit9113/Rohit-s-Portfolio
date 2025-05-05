import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-transparent py-4 px-20 text-white flex justify-between items-center gap-6 shadow-md z-50">
                <motion.h1
                    className="font-brandName text-2xl tracking-wide text-black cursor-pointer transition duration-300 hover:text-slate-950"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/")}
                >
                    {"< Rohit Lohra />"}
                </motion.h1>
                <motion.div
                    className="flex font-bigShoulders font-bold gap-6 text-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {[
                        { name: "Home", path: "/" },
                        { name: "Education", path: "/education" },
                        { name: "Experience", path: "/Experience" },
                        { name: "Projects", path: "/Projects" },
                        { name: "Certificates", path: "/Certifications" }
                    ].map(({ name, path }) => (
                        <Link
                            key={path}
                            className={`relative transition duration-300 cursor-pointer px-2 py-1 ${location.pathname === path ? 'underline decoration-blue-800 decoration-2' : ''
                                } hover:text-blue-700`}
                            to={path}
                        >
                            {name}
                        </Link>
                    ))}
                </motion.div>
            </nav>
            <motion.div
                className="p-4 mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Outlet />
            </motion.div>
        </div>
    );
}

export default Layout;
