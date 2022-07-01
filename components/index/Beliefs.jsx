import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sample from "../../public/case.svg";
import Link from "next/link";

const Beliefs = () => {
    const beliefs = [
        {
            title: "Why is a new Professional, still Unprofessional?",
            desc: `Different international studies have found that companies end up investing huge monies on development of soft skills. Analyst firms, such as Bersin & Associates`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
        {
            title: "Why is a new Professional, still Unprofessional?",
            desc: `Different international studies have found that companies end up investing huge monies on development of soft skills. Analyst firms, such as Bersin & Associates`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
        {
            title: "Why is a new Professional, still Unprofessional?",
            desc: `Different international studies have found that companies end up investing huge monies on development of soft skills. Analyst firms, such as Bersin & Associates`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
        {
            title: "Why is a new Professional, still Unprofessional?",
            desc: `Different international studies have found that companies end up investing huge monies on development of soft skills. Analyst firms, such as Bersin & Associates`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
        {
            title: "Why is a new Professional, still Unprofessional?",
            desc: `Different international studies have found that companies end up investing huge monies on development of soft skills. Analyst firms, such as Bersin & Associates`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
    ];

    return (
        <section className="cases py-32 bg-gray text-black">
            <Container className="flex flex-col items-center">
                <h3 className="text-5xl text-blue font-semibold text-center">
                    Our Thoughts
                </h3>
                <p className="text-xl my-10 mb-16 px-20 text-center leading-relaxed">
                    We at C-Complete believe that it is important to provide
                    services that reflect our Thought Leadership. Our Content &
                    Research team publishes insightful reports, blogs and other
                    thought provoking information.
                </p>
            </Container>

            <Container className="px-48">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay
                    loop
                    pagination={{ clickable: true }}
                    className="blue-nav"
                >
                    {beliefs.map((bel, i) => (
                        <SwiperSlide
                            key={i}
                            className="flex justify-center px-10"
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
        <Link href={bel.link}>
            <a className="bel w-full mb-28 bg-white shadow-xl text-black rounded-lg">
                <div className="bel-img w-full h-1/2 rounded-lg overflow-hidden relative">
                    <Image
                        alt="the"
                        src={bel.pic}
                        width={1000}
                        height={500}
                        objectFit="cover"
                    />
                </div>

                <div className="bel-content w-full h-1/2 px-6 flex flex-col items-start justify-center">
                    <span className="bel-time my-2">{bel.time}</span>
                    <h4 className="text-xl font-medium">{bel.title}</h4>
                    <p className="my-5 mb-14">{bel.desc}</p>
                </div>
            </a>
        </Link>
    );
};

export default Beliefs;
