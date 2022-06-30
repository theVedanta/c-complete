import Image from "next/image";
import Link from "next/link";
import dash from "../../public/dash.svg";

const Header = () => {
    return (
        <section className="flex w-full items-center my-48">
            <div className="header-text w-1/2 pl-32">
                <h3
                    data-aos="fade-up"
                    className="text-4xl  leading-snug mb-12 pr-10"
                >
                    Welcome to C-Complete, a Flexible and Comprehensive Multi
                    Rater.
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-delay="600"
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
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="900"
                    className="btns mt-16"
                >
                    <Link href="/">
                        <a className="btn btn-dark mr-5">Get started</a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-line">Learn more</a>
                    </Link>
                </div>
            </div>

            <div
                data-aos="fade-left"
                className="header-img w-1/2 flex justify-end"
            >
                <Image
                    src={dash}
                    alt="dash"
                    width={1000}
                    height={630}
                    priority
                    leading="eager"
                    className="scale-105 translate-x-28"
                />
            </div>
        </section>
    );
};

export default Header;
