import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import coach from "../../public/price/coach.svg";
import { Navigation, Pagination, Autoplay } from "swiper";

const Test = () => {
    const tests = [
        {
            desc: `Our clients and partners, alike love us. It is our commitment to the highest standards of service that enthralls our Clients – most of whom have been with us, once they sign-up. We work with our partners, on the supply side, creating a truly win-win situation. Our endeavor is to support them to delight their clients, in various Employee Learning Development Processes.`,
            name: "John Doe - Trainer at UniTol",
        },
        {
            desc: `Our clients and partners, alike love us. It is our commitment to the highest standards of service that enthralls our Clients – most of whom have been with us, once they sign-up. We work with our partners, on the supply side, creating a truly win-win situation. Our endeavor is to support them to delight their clients, in various Employee Learning Development Processes.`,
            name: "John Doe - Trainer at UniTol",
        },
        {
            desc: `Our clients and partners, alike love us. It is our commitment to the highest standards of service that enthralls our Clients – most of whom have been with us, once they sign-up. We work with our partners, on the supply side, creating a truly win-win situation. Our endeavor is to support them to delight their clients, in various Employee Learning Development Processes.`,
            name: "John Doe - Trainer at UniTol",
        },
        {
            desc: `Our clients and partners, alike love us. It is our commitment to the highest standards of service that enthralls our Clients – most of whom have been with us, once they sign-up. We work with our partners, on the supply side, creating a truly win-win situation. Our endeavor is to support them to delight their clients, in various Employee Learning Development Processes.`,
            name: "John Doe - Trainer at UniTol",
        },
    ];

    return (
        <section className="testimonials py-32 bg-darkBlue">
            <Container className="flex flex-col items-center">
                <h3 className="index-feat-heading text-5xl text-white font-semibold text-center mb-32">
                    Testimonials
                </h3>
            </Container>

            <Container className="px-56">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    loop
                    navigation
                    pagination={{ clickable: true }}
                >
                    {tests.map((test, i) => (
                        <SwiperSlide
                            key={i}
                            className="flex justify-center pb-16"
                        >
                            <Testimonial test={test} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

const Testimonial = ({ test }) => {
    return (
        <div className="testimonial w-4/5 bg-white text-black px-14 py-12 rounded-xl shadow-lg cursor-grab">
            <p className="mb-10 text-lg">{test.desc}</p>

            <div className="tester flex items-center">
                <Image alt="pfp" width={45} height={45} src={coach} />
                <h4 className="font-medium pl-6 text-xl">{test.name}</h4>
            </div>
        </div>
    );
};

export default Test;
