import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import sample from "../../public/case.svg";

const MoreBlogs = () => {
    const beliefs = [
        {
            title: "Multi Rate Systems & 360° Feedback Part-1",
            desc: `While 360° feedback and other forms of multi-rater feedback systems are growing in popularity.`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
        {
            title: "Multi Rater Systems & 360° Feedback Part-2",
            desc: `Our performance at work is influenced by our own level of expertise, experience, motivation, nature of the work.`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
    ];

    return (
        <div className="more-blogs -z-30 bg-blue pt-32 -translate-y-32">
            <Container className="flex flex-col pt-20 items-center">
                <h3
                    data-aos="fade-up"
                    className="index-feat-heading text-5xl text-white font-semibold text-center mb-32 lap:text-4xl tab:mb-20"
                >
                    More Blogs
                </h3>
            </Container>

            <Container className="flex flex-wrap justify-between items-stretch px-96">
                {beliefs.map((bel, i) => (
                    <Belief bel={bel} key={i} />
                ))}
            </Container>
        </div>
    );
};

const Belief = ({ bel }) => {
    return (
        <Link href={bel.link}>
            <a className="more-bel mb-0 bg-white shadow-xl text-black rounded-lg h-full ph:shadow ph:mb-16">
                <div className="bel-img w-full mb-6 rounded-t-lg overflow-hidden relative">
                    <Image
                        alt="the"
                        src={bel.pic}
                        width={1000}
                        height={500}
                        objectFit="cover"
                        className="transition-all duration-300"
                    />
                </div>

                <div className="bel-content w-full h-1/2 px-6 flex flex-col items-start justify-center">
                    <span className="bel-time my-2">{bel.time}</span>
                    <h4 className="text-xl font-medium">{bel.title}</h4>
                    <p className="my-5 mb-8 tab:mb-4">{bel.desc}</p>
                </div>
            </a>
        </Link>
    );
};

export default MoreBlogs;
