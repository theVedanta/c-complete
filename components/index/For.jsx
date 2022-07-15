import Link from "next/link";
import Container from "../Container";
import { FiUser, FiUsers } from "react-icons/fi";

const For = () => {
    return (
        <section
            id="for"
            className="index-for pb-32 pt-36 blap:pt-20 blap:pb-24 lap:pt-12 lap:pb-16 tab:pt-10 tab:pb-10 ph:pt-40 ph:pb-6"
        >
            <Container>
                <h3
                    data-aos="fade-down"
                    className="font-medium text-4xl text-center px-32 text-black mt-32 mb-16 leading-normal lap:text-2xl tab:px-0 tab:mb-12 ph:text-xl ph:mb-6 ph:mt-36"
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

                <div className="for-cards flex justify-between px-20 items-stretch w-full blap:px-0 tab:flex-col ph:px-0">
                    <Link href="/product/individual">
                        <a
                            data-aos="fade-right"
                            delay="600"
                            className="for-card"
                        >
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6 lap:text-xl ph:text-xl ph:mb-4">
                                <span className="lap:text-2xl ph:text-2xl">
                                    <FiUsers />
                                </span>
                                &nbsp;&nbsp; For Organizations
                            </h3>
                            <p className="lap:text-xs">
                                Organizations across the world today are using
                                Multi Rater or 360° Feedback process for various
                                aspects along the HR Value Chain. Multi-rater
                                feedback is a powerful tool in every situation
                                that requires demonstration or assessment of
                                competencies.
                            </p>
                        </a>
                    </Link>
                    <Link href="/product/organization">
                        <a
                            data-aos="fade-left"
                            delay="600"
                            className="for-card"
                        >
                            <h3 className="font-semibold flex items-center text-blue text-3xl mb-6 lap:text-xl ph:text-xl ph:mb-4">
                                <span className="lap:text-2xl ph:text-2xl">
                                    <FiUser />
                                </span>
                                &nbsp;&nbsp; For Individuals
                            </h3>
                            <p className="lap:text-xs">
                                Individuals, wanting to truly grow and develop,
                                seek periodic feedback from those who matter and
                                then act upon it. The act of seeking structured
                                feedback is a clear indication on taking
                                initiative and being proactive.
                            </p>
                        </a>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default For;
