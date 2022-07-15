import { Pagination, Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import needs from "../../public/case/needs.jpeg";
import index from "../../public/case/in.jpeg";
import lead from "../../public/case/lead.jpeg";
import { FiPlay } from "react-icons/fi";

const Cases = () => {
    const cases = [
        {
            title: "C-Complete for Training needs analysis",
            over: `A prominent local hospital was seeking to address the dual need to identify and groom potential leaders who could manage their expanding scope of operations and also to ensure all staff was equipped to deliver the best patient care and experience. C-Complete partnered with them to deliver Individual reports and a detailed Training Needs Analysis report.`,
            pic: needs,
            url: "/",
        },
        {
            title: "C-Complete for Leadership Development",
            pic: lead,
            over: `C-Complete was the assessment partner during an intense, multi-year, leadership development initiative for a global pharmaceutical giant.`,
            url: "/",
        },
        {
            title: "C-Complete and performance potential Index",
            over: `C-Complete has been the performance assessment partner for a Textile major for over a decade aiding evaluation of potential across employees. Click to see how C-Complete support long term and sustainable Organizational growth.`,
            pic: index,
            url: "/",
        },
    ];

    return (
        <section
            className="cases py-32 bg-blue blap:py-24 lap:py-16"
            id="case-studies"
        >
            <Container className="flex flex-col items-center">
                <h3
                    data-aos="fade-up"
                    className="index-feat-heading text-5xl text-white font-semibold text-center mb-32 lap:text-4xl lap:mb-20 tab:text-3xl tab:mb-20"
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
                    className="px-32 cursor-grab"
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
                    <p className="case-img-overlay-text text-lg text-white px-8 py-6 translate-y-28 opacity-0 transition-all duration-300 blap:text-base lap:text-sm tab:text-xs">
                        {cas.over}
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

            <div className="case-content w-full px-8 pb-8 pt-3 flex flex-col items-start justify-center lap:px-6 lap:pt-2 lap:pb-6">
                <h4 className="text-black text-xl font-medium py-2 lap:text-base">
                    {cas.title}
                </h4>
                <button className="btn btn-primary w-auto flex items-center mt-3 text-light lap:mt-2">
                    <FiPlay />
                    &nbsp;&nbsp;Watch now
                </button>
            </div>
        </div>
    );
};

export default Cases;
