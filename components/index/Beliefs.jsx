import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sample from "../../public/case.svg";
import Link from "next/link";

const Beliefs = () => {
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
        {
            title: "Professionalism the journey begins",
            desc: `Now that we have agreed Professionalism is a Habit and a continuous process (our article on 360o the Key to Professionalism).`,
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
            title: "Designing the Questionnaire for the Engagement Survey",
            desc: `Employee Engagement survey is often conducted to assess the employees ownership for the Organization.`,
            pic: sample,
            time: "2015-02-01 17:44:44",
            link: "/",
        },
    ];

    return (
        <section className="beliefs py-32 bg-gray text-black lap:py-20 ph:pb-5">
            <Container className="flex flex-col items-center">
                <h3 className="text-5xl text-blue font-semibold text-center lap:text-4xl">
                    Our Thoughts
                </h3>
                <p className="text-xl my-10 mb-16 px-20 text-center leading-relaxed tab:px-4 ph:px-0 ph:text-sm ph:my-6">
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
                            className="flex justify-center px-10 tab:px-2"
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
            <a className="bel w-full mb-28 bg-white shadow-xl text-black rounded-lg h-full ph:shadow ph:mb-16">
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

export default Beliefs;
