import Image from "next/image";
import Link from "next/link";
import dash from "../../public/dash.png";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <section className="flex w-full items-center my-48">
            <div className="header-text w-1/2 pl-32">
                <motion.h3
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                    }}
                    className="text-4xl  leading-snug mb-12 pr-10"
                >
                    Welcome to C-Complete, a Flexible and Comprehensive Multi
                    Rater.
                </motion.h3>
                <motion.p
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.6,
                    }}
                    className="w-5/6 leading-relaxed"
                >
                    Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture.
                </motion.p>
                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 2,
                    }}
                    className="btns mt-16"
                >
                    <Link href="/">
                        <a className="btn btn-dark mr-5">Get started</a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-line">Learn more</a>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                }}
                className="header-img w-1/2 flex justify-end"
            >
                <Image
                    src={dash}
                    placeholder="blur"
                    alt="dash"
                    width={950}
                    height={670}
                    priority
                />
            </motion.div>
        </section>
    );
};

export default Header;
