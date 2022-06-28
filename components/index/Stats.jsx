import Image from "next/image";
import Container from "../Container";
import stat from "../../public/stat.svg";
import { motion } from "framer-motion";

const Stats = () => {
    return (
        <section className="index-stats py-20 bg-darkBlue pt-10">
            <Container className="flex w-full px-52 justify-between items-stretch">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="img-stat flex justify-start items-center w-1/2 relative"
                >
                    <Image alt="stat" src={stat} layout="fill" />
                </motion.div>

                <div className="stat-cards flex w-1/2 py-12 justify-end flex-wrap">
                    {[
                        {
                            stat: "69",
                            name: "Incompetencies",
                        },
                        {
                            stat: "489",
                            name: "Competencies",
                            delay: 0.6,
                        },
                        {
                            stat: "3826",
                            name: "Competencies",
                        },
                        {
                            stat: "1697",
                            name: "Reports Generated",
                            delay: 0.6,
                        },
                    ].map((stat, i) => (
                        <motion.div
                            initial={{
                                y: 200,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: stat.delay ? stat.delay : 0.4,
                            }}
                            viewport={{ once: true }}
                            key={i}
                            className="stat-card w-4/12 m-3 h-1/2 py-10 flex flex-col items-center justify-center rounded-lg shadow-lg bg-white"
                        >
                            <h5 className="font-bold text-5xl text-blue">
                                {stat.stat}
                            </h5>
                            <h6 className="font-semibold text-lg text-blue mt-4">
                                {stat.name}
                            </h6>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
