import Image from "next/image";
import Link from "next/link";
import indiImg from "../../public/indi.svg";
import orgImg from "../../public/org.svg";
import placeholder from "../../public/place.png";
import { FiFileText, FiMonitor } from "react-icons/fi";

const Header = ({ indi }) => {
    return (
        <section className="flex w-full bg-gray text-black items-center py-48 relative lap:py-40 tab:flex-col tab:pt-28 tab:mb-0 ph:pb-14">
            <div className="header-text w-1/2 pl-32 lap:pl-14 tab:w-full tab:px-16 tab:mb-14 ph:px-10">
                <h3
                    data-aos="fade-up"
                    className="text-5xl text-darkBlue font-medium leading-snug mb-4 pr-10 lap:text-3xl lap:pr-0 lap:mb-8 tab:text-center tab:pr-0 ph:text-left ph:mb-4"
                >
                    How C-Complete helps{" "}
                    {indi ? "Individuals" : "Organizations"}
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="w-5/6 leading-relaxed lap:w-full tab:text-center ph:text-left"
                >
                    {indi ? (
                        <>
                            The process of reflection and introspection
                            triggered by using a Multi Rater or a 360° Feedback,
                            enables individuals to grow, by addressing their
                            ‘gaps’ and leveraging on their strengths.
                            <br />
                            <br />
                            Individuals, wanting to truly grow and develop, seek
                            periodic feedback from those who matter and then act
                            upon it.
                        </>
                    ) : (
                        `Organizations across the world today are using Multi
                        Rater or 360° Feedback process for various aspects along
                        the HR Value Chain. Multi-rater feedback is a powerful
                        tool in every situation that requires demonstration or
                        assessment of competencies.`
                    )}
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className="flex mt-10 tab:w-full tab:flex tab:justify-center ph:justify-start ph:mt-6 ph:flex-col"
                >
                    <Link href="/">
                        <a className="btn btn-dark mr-5 flex items-center text-white ph:mb-3 ph:self-start">
                            <FiFileText />
                            &nbsp; View Process
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-primary flex items-center ph:self-start">
                            <FiMonitor />
                            &nbsp; View Presentation
                        </a>
                    </Link>
                </div>
            </div>

            <div
                className="header-img w-1/2 flex justify-center items-center blap:px-28 lap:px-20 tab:px-0 ph:w-full ph:px-10"
                data-aos="fade-left"
                data-aos-delay="600"
            >
                <Image
                    src={
                        indi === "check" ? placeholder : indi ? indiImg : orgImg
                    }
                    alt="dash"
                    width={600}
                    height={450}
                    loading="eager"
                />
            </div>
        </section>
    );
};

export default Header;
