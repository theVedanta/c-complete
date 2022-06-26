import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import sample from "../../public/case.svg";

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
            <div className="case-img w-full h-2/3 overflow-hidden relative">
                <Image alt="the" src={cas.pic} />
            </div>

            <div className="case-content w-full h-1/3 pl-6 flex flex-col items-start justify-center">
                <h4 className="text-black text-xl font-medium">{cas.title}</h4>
                <button className="btn btn-primary w-auto mt-3 text-light">
                    Watch now
                </button>
            </div>
        </div>
    );
};

export default Cases;