import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <motion.nav
            initial={{
                y: "-100%",
            }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6 }}
            className="nav px-32 bg-gray flex justify-between items-center border-b-2 border-b-slate-300 fixed top-0 left-0 w-screen z-40 lap:px-10 ph:px-6 ph:bg-white ph:border-none"
        >
            <div className="logo-hold flex items-center w-3/12 ph:w-1/3 ph:z-40">
                <Link href="/">
                    <a className="font-bold text-xl text-blue">C-Complete</a>
                </Link>
            </div>
            <div className="links w-9/12 flex justify-end ph:w-screen ph:flex-col ph:z-30">
                {[
                    ["Features", "/"],
                    ["Case Studies", "/"],
                    ["Pricing", "/"],
                    ["Contact", "/"],
                    ["Organization", "/"],
                    ["Individual", "/"],
                    ["About", "/"],
                ].map(([title, url]) => (
                    <Link key={title} href={url}>
                        <a className="py-5 pl-12 inline-block transition-all duration-200 ease-in-out mx-1 lap:px-4 lap:py-4 lap:text-sm tab:px-2 tab:text-xs text-black">
                            {title}
                        </a>
                    </Link>
                ))}
            </div>
            <div
                className="ham w-1/3 hidden justify-end items-center h-full ph:flex ph:z-40"
                onClick={() => {
                    document
                        .querySelector(".ham")
                        .classList.toggle("ham-active");
                    document
                        .querySelector(".links")
                        .classList.toggle("links-active");
                }}
            >
                <div className="line"></div>
            </div>
        </motion.nav>
    );
};

export default Nav;
