import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sample from "../../public/case.svg";
import { FiPlay } from "react-icons/fi";

const Cases = () => {
    const cases = [
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
        {
            title: "C-Complete for Training needs analysis",
            pic: sample,
            url: "/",
        },
    ];

    return (
        <section className="cases py-32 bg-blue lap:py-20" id="case-studies">
            <Container className="flex flex-col items-center">
                <h3
                    data-aos="fade-up"
                    className="index-feat-heading text-5xl text-white font-semibold text-center mb-32 lap:text-4xl tab:text-3xl tab:mb-20"
                >
                    Our Latest Case Studies
                </h3>
            </Container>

            <Container className="px-56">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    autoplay
                    loop
                    pagination={{ clickable: true }}
                    className="px-32"
                >
                    {cases.map((cas, i) => (
                        <SwiperSlide key={i} className="flex justify-center">
                            <Case cas={cas} key={i} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

const Case = ({ cas }) => {
    return (
        <div className="case w-full mb-20 bg-white rounded-lg">
            <div className="case-img rounded-t-lg w-full overflow-hidden relative flex items-center justify-center">
                <div className="case-img-overlay z-0 absolute top-0 left-0 w-full h-full bg-darkBlue opacity-0 transition-all duration-200 flex items-center">
                    <p className="case-img-overlay-text text-lg text-white px-8 py-6 translate-y-28 opacity-0 transition-all duration-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, adipisci. Aut distinctio nemo iure, deserunt dicta
                        repellat ducimus ab animi magni odio optio vitae quas
                        praesentium ullam dolorem quae at!
                    </p>
                </div>

                <Image
                    alt="the"
                    src={cas.pic}
                    objectFit="cover"
                    width={1000}
                    height={500}
                />
            </div>

            <div className="case-content w-full px-8 pb-8 pt-3 flex flex-col items-start justify-center">
                <h4 className="text-black text-xl font-medium py-2">
                    {cas.title}
                </h4>
                <button className="btn btn-primary w-auto flex items-center mt-3 text-light">
                    <FiPlay />
                    &nbsp;&nbsp;Watch now
                </button>
            </div>
        </div>
    );
};

export default Cases;
