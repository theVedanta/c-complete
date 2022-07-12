import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { blogs } from "../../data";

const MoreBlogs = ({ id }) => {
    const [beliefs, setBeliefs] = useState([]);

    useEffect(() => {
        const getMultipleRandom = (arr, num) => {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        };

        const rand = getMultipleRandom(blogs, 2);
        setBeliefs(rand);
    }, [id]);

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
        <Link href={`/blog/${bel.id}`}>
            <a className="more-bel mb-0 bg-white shadow-xl text-black rounded-lg h-full ph:w-full ph:mb-4 ph:shadow">
                <div className="bel-img w-full mb-6 rounded-t-lg overflow-hidden relative">
                    <Image
                        alt="the"
                        src={bel.cover}
                        width={1000}
                        height={500}
                        objectFit="cover"
                        className="transition-all duration-300"
                    />
                </div>

                <div className="bel-content w-full h-1/2 px-6 flex flex-col items-start justify-center">
                    <span className="bel-time my-2">{bel.time}</span>
                    <h4 className="text-xl font-medium">{bel.title}</h4>
                    <p className="my-5 mb-8 tab:mb-4">{bel.mini}</p>
                </div>
            </a>
        </Link>
    );
};

export default MoreBlogs;
