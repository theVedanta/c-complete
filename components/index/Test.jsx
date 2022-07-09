import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import coach from "../../public/price/coach.svg";
import { Navigation, Pagination, Autoplay } from "swiper";

const Test = () => {
    const tests = [
        {
            desc: `“ C-Complete, the cloud based 360° feedback tool has been used by company. We have worked with the team at UniTol to customize the feedback questionnaire to suit our specific requirement. We found the whole experience of working with UniTol to be delightful – their service, commitment and technology are really good and have meet all our requirements. Strongly recommend them to anyone wanting to use 360° tool for any of the HR processes.”`,
            name: "Ajase hussain - Founder & CEO, 360° Learnings",
        },
        {
            desc: `“C-Complete, the cloud based 360° feedback tool has been used by company. We have worked with the team at UniTol to customize the feedback questionnaire to suit our specific requirement. We found the whole experience of working with UniTol to be delightful – their service, commitment and technology are really good and have meet all our requirements. Strongly recommend them to anyone wanting to use 360° tool for any of the HR processes.”`,
            name: "Vikas Puri - DGM HR, DCM Engineering Ltd",
        },
        {
            desc: `“We have utilized C-Complete Portal of UniTol for 360° feedback survey assignment for some of our clients. We found C-Complete easy to set-up, administer and generate report with ease. The portal has pre-defined Competency based questionnaires apart from the customizable option. Team is very supportive and friendly. We certainly look forward to utilizing their services in the future.”`,
        },
        {
            desc: `“We have been working with UniTol Training Solutions for the past eight plus years, using their multi rater feedback platform, C-Complete for our Performance Management System (PMS). We have found team from UniTol to be professional and service oriented. We have also found the tool, its reports and analytics to be very useful in our rating and performance evaluation process. We continue to work with them.”`,
            name: "Pratap Singh - G. M. (HR & Admin), DCM Textiles",
        },
        {
            desc: `“UniTol Training Solutions worked with us for driving the learning and people development initiative at Acacia. They helped design a multi-rater feedback which was administered to determine the soft skill related development requirements for our senior team. Their team, their approach and their post roll out support was really impressive. We look forward to working with them in future ”`,
            name: "Dr. N Srinivasan - CEO, Acacia",
        },
        {
            desc: `“ We have used C-Complete, the multi rater feedback tool of UniTol Training Solutions for our Leadership Training process. We worked with them from the questionnaire setting process, for different grades of people to defining the rating scales needed. The roll out was important for us, since we had external customers also participating in the feedback process. They supported us throughout the life cycle. We appreciate their team for their professional approach and service orientation. Look forward to working with them in future, as well.”`,
            name: "Ram Dayal Tiwari - Vice President (HR & Admin), Bengal Energy",
        },
    ];

    return (
        <section className="testimonials py-32 bg-darkBlue tab:py-20 tab:pb-10">
            <Container className="flex flex-col items-center">
                <h3
                    data-aos="fade-up"
                    className="index-feat-heading text-5xl text-white font-semibold text-center mb-32 lap:text-4xl tab:mb-20"
                >
                    Testimonials
                </h3>
            </Container>

            <Container className="px-56 tab:px-2 ph:px-0">
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
                            className="flex justify-center pb-16 ph:px-4"
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
        <div className="testimonial w-4/5 bg-white text-black px-14 py-12 rounded-xl shadow-lg cursor-grab tab:px-12 tab:py-10 ph:p-8">
            <p className="mb-10 text-lg tab:text-base tab:mb-6">{test.desc}</p>

            <div className="tester flex items-center">
                <Image alt="pfp" width={45} height={45} src={coach} />
                <h4 className="font-medium pl-6 text-xl tab:text-base ph:pl-3 ph:text-sm">
                    {test.name}
                </h4>
            </div>
        </div>
    );
};

export default Test;
