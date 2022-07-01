import Image from "next/image";
import Link from "next/link";
import indiImg from "../../public/indi.svg";
import orgImg from "../../public/org.svg";
import placeholder from "../../public/place.png";
import { FiFileText, FiMonitor } from "react-icons/fi";

const Header = ({ indi }) => {
    return (
        <section className="flex w-full bg-gray text-black items-center py-48">
            <div className="header-text w-1/2 pl-32">
                <h3 className="text-5xl text-darkBlue font-medium leading-snug mb-4 pr-10">
                    How C-Complete helps{" "}
                    {indi ? "Individuals" : "Organizations"}
                </h3>
                {indi ? (
                    <p className="w-5/6 leading-relaxed">
                        The process of reflection and introspection triggered by
                        using a Multi Rater or a 360° Feedback, enables
                        individuals to grow, by addressing their ‘gaps’ and
                        leveraging on their strengths.
                        <br />
                        <br />
                        Individuals, wanting to truly grow and develop, seek
                        periodic feedback from those who matter and then act
                        upon it.
                    </p>
                ) : (
                    <p className="w-5/6 leading-relaxed">
                        Organizations across the world today are using Multi
                        Rater or 360° Feedback process for various aspects along
                        the HR Value Chain. Multi-rater feedback is a powerful
                        tool in every situation that requires demonstration or
                        assessment of competencies.
                    </p>
                )}
                <div className="flex mt-10">
                    <Link href="/">
                        <a className="btn btn-dark mr-5 flex items-center text-white">
                            <FiFileText />
                            &nbsp; View Process
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-primary flex items-center">
                            <FiMonitor />
                            &nbsp; View Presentation
                        </a>
                    </Link>
                </div>
            </div>

            <div className="header-img w-1/2 flex justify-center items-center">
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
