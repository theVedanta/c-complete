import Image from "next/image";
import Link from "next/link";
import dash from "../../public/index/dash.png";

const Header = () => {
    return (
        <section className="flex w-full items-center my-48">
            <div className="header-text w-1/2 pl-20">
                <h3 className="text-5xl leading-snug mb-12 pr-10">
                    Welcome to C-Complete, a Flexible and Comprehensive Multi
                    Rater.
                </h3>
                <p className="w-5/6 leading-relaxed pr-12">
                    Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture.
                </p>
                <div className="btns mt-16">
                    <Link href="/">
                        <a className="btn btn-dark mr-5">Get started</a>
                    </Link>
                    <Link href="/">
                        <a className="btn btn-line">Learn more</a>
                    </Link>
                </div>
            </div>

            <div className="header-img w-1/2 flex justify-end">
                <Image
                    src={dash}
                    placeholder="blur"
                    alt="dash"
                    width={1040}
                    height={728}
                />
            </div>
        </section>
    );
};

export default Header;
