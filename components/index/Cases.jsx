import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sample from "../../public/case.png";
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
        <section className="cases py-32 bg-blue">
            <Container className="flex flex-col items-center">
                <h3 className="index-feat-heading text-5xl text-white font-semibold text-center mb-32">
                    Our latest case studies
                </h3>
            </Container>

            <Container className="px-56">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
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
            <div className="case-img rounded-lg w-full overflow-hidden relative">
                <Image
                    alt="the"
                    src={cas.pic}
                    objectFit="cover"
                    width={1000}
                    height={500}
                    placeholder="blur"
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
