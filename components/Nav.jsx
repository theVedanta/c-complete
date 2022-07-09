import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <motion.nav
            initial={{
                y: "-100%",
            }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="nav px-32 bg-white flex justify-between items-center border-b-2 border-b-slate-300 fixed top-0 left-0 w-screen z-40 lap:px-14 ph:px-8 ph:bg-white ph:border-none"
        >
            <div className="logo-hold flex items-center w-2/12 tab:w-1/3 tab:z-40 tab:py-3 ph:w-1/2">
                <Link href="/">
                    <a className="font-bold text-xl text-blue">C-Complete</a>
                </Link>
            </div>
            <div className="links w-10/12 flex justify-end tab:w-screen tab:flex-col tab:z-30 tab:pt-16">
                {[
                    ["Features", "/#features"],
                    ["Case Studies", "/#case-studies"],
                    ["Pricing", "/#pricing"],
                    ["Contact", "/contact-us"],
                    ["Organization", "/product/organization"],
                    ["Individual", "/product/individual"],
                ].map(([title, url]) => (
                    <Link key={title} href={url}>
                        <a className="nav-link">{title}</a>
                    </Link>
                ))}
            </div>
            <div
                className="ham w-1/3 hidden justify-end items-center h-full tab:flex tab:z-40"
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
