import Image from "next/image";
import Link from "next/link";
import dash from "../../public/dash.svg";
import dashMob from "../../public/dash-mob.svg";

const Header = () => {
    return (
        <section className="flex w-full items-center mt-20 relative blap:mt-36 blap:mb-12 lap:my-28 lap:mb-0 tab:flex-col tab:mt-28 tab:mb-0 ph:mb-4">
            <div className="header-text w-1/2 pl-32 lap:pl-14 tab:w-full tab:px-16 tab:mb-14 ph:px-10 ph:mb-10 sph:px-4">
                <h2
                    data-aos="fade-up"
                    className="text-5xl font-semibold mb-4 blap:text-4xl lap:text-3xl tab:text-center ph:text-left"
                >
                    Seeing Completely.
                </h2>
                <h3
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-4xl leading-snug mb-8 pr-10 blap:text-2xl blap:mb-4 lap:text-xl lap:mb-4 tab:text-center tab:pr-0 ph:text-left ph:mb-4"
                >
                    Welcome to C-Complete, a Flexible and Comprehensive Multi
                    Rater.
                </h3>
                <p
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className="w-5/6 leading-relaxed blap:w-full lap:text-xs tab:text-center ph:text-left ph:text-sm"
                >
                    Whether as part of performance management, training needs
                    analysis, leadership development or succession planning -
                    C-Complete offers you a platform for objectively capturing
                    the picture of each individual as perceived by the many
                    stakeholders. C-Complete lets you see the complete picture.
                </p>
                <div
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="btns mt-16 blap:mt-10 lap:mt-8 tab:w-full tab:flex tab:justify-center ph:justify-start ph:my-6"
                >
                    <Link href="/contact-us">
                        <a className="btn btn-dark mr-5">Get started</a>
                    </Link>
                    <button
                        onClick={() => {
                            document
                                .querySelector("#for")
                                .scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn btn-line"
                    >
                        Learn more
                    </button>
                </div>
            </div>

            <div
                data-aos="fade-left"
                className="header-img w-1/2 flex justify-center tab:w-full tab:px-20 ph:hidden"
            >
                <Image
                    src={dash}
                    alt="dash"
                    objectFit="contain"
                    width={930}
                    height={690}
                    priority
                    loading="eager"
                    className="lap:scale-110 tab:scale-100 tab:translate-x-0"
                />
            </div>
            <div
                data-aos="fade-left"
                className="header-img w-1/2 justify-center hidden ph:flex ph:px-0 ph:w-screen ph:absolute ph:top-full"
            >
                <Image
                    src={dashMob}
                    alt="dash"
                    objectFit="contain"
                    width={930}
                    height={690}
                    priority
                    loading="eager"
                    className="lap:scale-110 tab:scale-100 tab:translate-x-0 ph:translate-x-3 ph:scale-105"
                />
            </div>
        </section>
    );
};

export default Header;
