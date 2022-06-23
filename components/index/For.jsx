import Link from "next/link";
import Container from "../Container";

const For = () => {
    return (
        <section className="index-for py-20 pt-48">
            <Container>
                <h3 className="font-medium text-5xl text-center px-32 text-black mt-32 mb-10 leading-normal">
                    C-Complete allows both{" "}
                    <span className="font-semibold text-blue">Individuals</span>{" "}
                    and
                    <span className="font-semibold text-blue">
                        {" "}
                        Organizations
                    </span>{" "}
                    to see the complete picture.
                </h3>

                <div className="for-cards flex justify-center items-center w-full">
                    <Link href="/individual">
                        <a className="for-card">
                            <h3 className="font-semibold text-blue text-3xl mb-6">
                                For organizations
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
                            <h3 className="font-semibold text-blue text-3xl mb-6">
                                For organizations
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
                </div>
            </Container>
        </section>
    );
};

export default For;
