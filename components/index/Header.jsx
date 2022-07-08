import Image from "next/image";
import Link from "next/link";
import dash from "../../public/dash.svg";

const Header = () => {
    return (
        <section className="flex w-full items-center my-48 relative lap:my-40 tab:flex-col tab:mt-28 tab:mb-0">
            <div className="header-text w-1/2 pl-32 lap:pl-14 tab:w-full tab:px-16 tab:mb-14 ph:px-10">
                <h3
                    data-aos="fade-up"
                    className="text-4xl leading-snug mb-12 pr-10 blap:text-3xl lap:text-xl lap:mb-8 tab:text-center tab:pr-0 ph:text-left ph:mb-4"
                >
                    Welcome to C-Complete, a Flexible and Comprehensive Multi
                    Rater.
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="w-5/6 leading-relaxed blap:w-full lap:text-sm tab:text-center ph:text-left ph:text-xs"
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
                    className="btns mt-16 lap:mt-10 tab:w-full tab:flex tab:justify-center ph:justify-start ph:mt-6"
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
                className="header-img w-1/2 flex justify-end tab:w-full tab:px-20 ph:px-6 ph:w-screen ph:absolute ph:-bottom-2/3"
            >
                <Image
                    src={dash}
                    alt="dash"
                    width={1000}
                    height={630}
                    priority
                    leading="eager"
                    className="scale-105 translate-x-28 lap:scale-110 tab:scale-100 tab:translate-x-0"
                />
            </div>
        </section>
    );
};

export default Header;
