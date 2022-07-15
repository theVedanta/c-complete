import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "../../data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Beliefs = () => {
    const [beliefs, setBeliefs] = useState([]);

    useEffect(() => {
        setBeliefs(blogs);
    }, []);

    return (
        <section className="beliefs py-32 bg-gray text-black blap:py-24 lap:py-20 ph:pb-5">
            <Container className="flex flex-col items-center">
                <h3 className="text-5xl text-blue font-semibold text-center lap:text-4xl">
                    Our Thoughts
                </h3>
                <p className="text-xl my-10 mb-16 px-20 text-center leading-relaxed lap:text-lg lap:mb-10 lap:mt-4 tab:px-4 ph:px-0 ph:text-sm ph:my-6">
                    We at C-Complete believe that it is important to provide
                    services that reflect our Thought Leadership. Our Content &
                    Research team publishes insightful reports, blogs and other
                    thought provoking information.
                </p>
            </Container>

            <Container className="px-28">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1440: { slidesPerView: 3 },
                    }}
                    loop
                    pagination={{ clickable: true }}
                    className="blue-nav cursor-grab"
                >
                    {beliefs.map((bel, i) => (
                        <SwiperSlide
                            key={i}
                            className="flex justify-center px-10 blap:px-4 tab:px-2"
                        >
                            <Belief bel={bel} key={i} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

const Belief = ({ bel }) => {
    return (
        <Link href={`/blog/${bel.id}`}>
            <a className="bel w-full mb-28 bg-white shadow-xl text-black rounded-lg h-full ph:shadow ph:mb-16">
                <div className="bel-img w-full mb-6 rounded-t-lg overflow-hidden relative lap:mb-3">
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
                    <h4 className="text-xl font-medium lap:text-lg">
                        {bel.title}
                    </h4>
                    <p className="my-5 mb-8 lap:text-sm lap:my-2 lap:mb-6 tab:mb-4">
                        {bel.mini}
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default Beliefs;
