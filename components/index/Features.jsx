import Image from "next/image";
import Container from "../Container";
import feat1 from "../../public/feats/feat-1.svg";
import feat2 from "../../public/feats/feat-2.svg";
import feat3 from "../../public/feats/feat-3.svg";
import feat4 from "../../public/feats/feat-4.svg";
import feat5 from "../../public/feats/feat-5.svg";
import feat6 from "../../public/feats/feat-6.svg";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

const Features = () => {
    const feats = [
        {
            img: feat1,
            title: "Customizable competency models",
            desc: "Pre populated Competency Models to help in initiating feedback cycles, quickly. Also feature to create own competency models.",
        },
        {
            img: feat2,
            title: "Customizable competency models",
            desc: "Different Rating scales for varied needs; with scope to create and define new rating scales for specific needs.",
        },
        {
            img: feat5,
            title: "Personalized communication",
            desc: "Personalize your mail content at the start of the feedback cycle and also the intra cycle reminders.",
        },
        {
            img: feat4,
            title: "Multilingual",
            desc: "Want to roll out in different languages to different sets of people? Use C-Complete’s multi lingual capabilities.",
        },
        {
            img: feat3,
            title: "Mobile enabled",
            desc: "Provide feedback on multiple devise formats. Mobile enablement capabilities help CxO to give feedback on the go.",
        },
        {
            img: feat6,
            title: "Comprehensive reports",
            desc: "Extensive reports along multiple dimensions helping in better and more objective analysis for the individual.",
        },
    ];

    return (
        <>
            <section
                className="index-feat nav-section w-screen py-16 lap:py-14"
                id="features"
            >
                <Container className="flex flex-col items-center">
                    <h3
                        data-aos="fade-up"
                        className="index-feat-heading text-5xl text-white font-semibold text-center lap:text-4xl"
                    >
                        Features
                    </h3>
                    <h3
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="text-3xl font-light text-center px-32 text-white mt-20 leading-normal blap:text-2xl lap:px-14 lap:mt-14 lap:text-xl tab:text-lg ph:px-0"
                    >
                        C-Complete is a feature rich platform, which provides
                        for a number of value added aspects across the
                        multi-rater feedbak value chain.
                    </h3>
                    <Link href="/">
                        <a className="btn btn-dark flex items-center mt-6">
                            <span className="text-2xl">
                                <AiOutlineDownload />
                            </span>
                            &nbsp;&nbsp;Download sample report
                        </a>
                    </Link>
                </Container>
            </section>

            <Container className="feats w-full bg-gray py-32 flex flex-wrap blap:py-20 lap:py-14 tab:flex-col tab:py-10 ph:px-5">
                {feats.map((feat, i) => (
                    <div
                        className="feat text-black flex w-1/2 my-6 tab:w-full ph:my-3"
                        key={i}
                    >
                        <div
                            data-aos="fade-right"
                            className="feat-img relative w-1/3"
                        >
                            <Image
                                alt="feat"
                                loading="eager"
                                src={feat.img}
                                layout="fill"
                            />
                        </div>

                        <div
                            data-aos="fade-left"
                            className="feat-content w-2/3 flex flex-col py-5 pr-10 lap:px-4 tab:pl-5 ph:pl-4 ph:pr-0"
                        >
                            <h4 className="text-xl font-semibold mb-3 lap:text-base tab:text-xl">
                                {feat.title}
                            </h4>
                            <p className="lap:text-xs tab:text-lg ph:text-xs">
                                {feat.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </Container>
        </>
    );
};

export default Features;
