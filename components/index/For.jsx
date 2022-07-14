import Link from "next/link";
import Container from "../Container";
import { FiUser, FiUsers } from "react-icons/fi";

const For = () => {
    return (
        <section className="index-for pb-32 pt-48 lap:pt-36 tab:pb-10 ph:pt-32 ph:pb-6">
            <Container>
                <h3
                    data-aos="fade-down"
                    className="font-medium text-4xl text-center px-32 text-black mt-32 mb-16 leading-normal lap:text-3xl tab:px-0 tab:mb-12 ph:text-xl"
                >
                    C-Complete allows both{" "}
                    <span className="font-semibold text-blue">Individuals</span>{" "}
                    and
                    <span className="font-semibold text-blue">
                        {" "}
                        Organizations
                    </span>{" "}
                    to see the complete picture.
                </h3>

                <div className="for-cards flex justify-between px-20 items-stretch w-full blap:px-10 tab:flex-col ph:px-0">
                    <Link href="/product/individual">
                        <a
                            data-aos="fade-right"
                            delay="600"
                            className="for-card"
                        >
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6 lap:text-2xl ph:text-xl ph:mb-4">
                                <span className="lap:text-3xl ph:text-2xl">
                                    <FiUsers />
                                </span>
                                &nbsp;&nbsp; For Organizations
                            </h3>
                            <p className="lap:text-sm ph:text-xs">
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
                    <Link href="/product/organization">
                        <a
                            data-aos="fade-left"
                            delay="600"
                            className="for-card"
                        >
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6 lap:text-2xl ph:text-xl ph:mb-4">
                                <span className="lap:text-3xl ph:text-2xl">
                                    <FiUser />
                                </span>
                                &nbsp;&nbsp; For Individuals
                            </h3>
                            <p className="lap:text-sm ph:text-xs">
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
