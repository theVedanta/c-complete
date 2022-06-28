import Link from "next/link";
import Container from "../Container";
import { motion } from "framer-motion";
import { FiUser, FiUsers } from "react-icons/fi";

const For = () => {
    return (
        <section className="index-for py-32 pt-48">
            <Container>
                <motion.h3
                    initial={{
                        opacity: 0,
                        y: -100,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="font-medium text-4xl text-center px-32 text-black mt-32 mb-16 leading-normal"
                >
                    C-Complete allows both{" "}
                    <span className="font-semibold text-blue">Individuals</span>{" "}
                    and
                    <span className="font-semibold text-blue">
                        {" "}
                        Organizations
                    </span>{" "}
                    to see the complete picture.
                </motion.h3>

                <div className="for-cards flex justify-between px-20 items-stretch w-full">
                    <Link href="/individual">
                        <a className="for-card">
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6">
                                <span className="text-5xl">
                                    <FiUsers />
                                </span>
                                &nbsp;&nbsp; For Organizations
                            </h3>
                            <p>
                                Organizations across the world today are using
                                Multi Rater or 360° Feedback process for various
                                aspects along the HR Value Chain. Multi-rater
                                feedback is a powerful tool in every situation
                                that requires demonstration or assessment of
                                competencies.
                                <br />
                                <br />
                                Internal and External, Coaches & Mentors use
                                Multi Rater feedback for providing impactful
                                results.
                            </p>
                        </a>
                    </Link>
                    <Link href="/org">
                        <a className="for-card">
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6">
                                <span className="text-5xl">
                                    <FiUsers />
                                </span>
                                &nbsp;&nbsp; For Individuals
                            </h3>
                            <p>
                                Individuals, wanting to truly grow and develop,
                                seek periodic feedback from those who matter and
                                then act upon it. The act of seeking structured
                                feedback is a clear indication on taking
                                initiative and being proactive.
                                <br />
                                <br />
                                In the era where most performance and
                                recruitment discussions center around competency
                                demonstration - a multi-rater feedback report is
                                the most objective way of demonstrating
                                competencies, consistently
                            </p>
                        </a>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default For;
