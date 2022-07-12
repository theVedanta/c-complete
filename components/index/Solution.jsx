import Container from "../Container";
import { FiUserCheck } from "react-icons/fi";
import {
    AiOutlineStock,
    AiOutlineStar,
    AiOutlineFileText,
} from "react-icons/ai";
import { IoFemaleOutline } from "react-icons/io5";
import { TbCrown } from "react-icons/tb";

const Solution = () => {
    const sols = [
        {
            icon: <FiUserCheck />,
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },

        {
            icon: <IoFemaleOutline />,
            title: "Women Lead Complete",
            desc: "Want to grow a fair gender leadership pipeline? Want to assess the Leadership competencies of Women? Women Lead Complete has an exhaustive set of competencies related to Women Leadership. Use Women Lead Complete or customize as per your requirements to drive development of Women Leaders in the Organization.",
        },

        {
            icon: <TbCrown />,
            title: "Lead Complete",
            desc: "Want to identify potential leaders? Building a leadership pipeline? Based on various Leadership Development models and theories we have developed an exhaustive list of leadership competencies and elements to design your own questionnaire.",
        },
    ];
    const sols2 = [
        {
            icon: <AiOutlineStock />,
            title: "Sales Complete",
            desc: "Drawing up specific development initiatives for your high power Sales force? Developing your Sales team in general into a high performance Sales Force? Drive Sales by identifying competency gaps and drawing up appropriate development roadmaps. C-Complete have a unique and exhaustive database of questions covering all critical aspects of Sales. You could use this questionnaire, or customize it to meet any specific development requirement of your Sales team.",
        },
        {
            icon: <AiOutlineStar />,
            title: "Change Complete",
            desc: "Driving a Change initiative? Identifying Change champions? Use Change-Complete; the most exhaustive database of parameters regarding Change Management in organizations.",
        },
        {
            icon: <AiOutlineFileText />,
            title: "Project Complete",
            desc: "Grappling with Project Management issues? Want to identify areas of improvement in the Project Management Team? Project-Complete has mapped all the critical elements along the Project Value Chain and based on the same, developed a comprehensive questionnaire to help ascertain areas of strengths and improvement in your Project Management Team. Using this instrument or customizing it to your specific requirements, you can drive Project Management competency in your organization and ensure steady growth in capability maturity.",
        },
    ];

    return (
        <>
            <section className="index-feat sol-feat w-screen py-16">
                <Container className="flex flex-col items-center">
                    <h3
                        data-aos="fade-up"
                        className="index-feat-heading text-5xl text-white font-semibold text-center lap:text-4xl"
                    >
                        What We Offer
                    </h3>
                    <h3
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="text-3xl font-light text-center px-32 text-white mt-20 leading-normal blap:text-2xl lap:px-10 tab:text-lg ph:px-0"
                    >
                        Standardized Competency Based Questionnaires for your
                        various requirements.
                    </h3>
                </Container>
            </section>

            <div className="sol-cards-hold w-full flex justify-center items-center bg-gray py-32 lap:py-20 ph:py-10">
                <Container className="flex w-10/12 justify-center items-start lap:w-full ph:flex-col">
                    <div className="sol-cards flex flex-col w-full items-center">
                        {sols.map((sol, i) => (
                            <div
                                key={i}
                                data-aos="fade-right"
                                className="sol-card px-10 py-8 bg-white text-black rounded-xl mb-6"
                            >
                                <h3 className="font-semibold flex items-center text-blue text-2xl mb-6 tab:text-xl">
                                    <span className="text-4xl ph:text-2xl">
                                        {sol.icon}
                                    </span>
                                    &nbsp;&nbsp;
                                    {sol.title}
                                </h3>
                                <p className="lap:text-sm">{sol.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="sol-cards flex flex-col w-full items-center">
                        {sols2.map((sol, i) => (
                            <div
                                key={i}
                                data-aos="fade-left"
                                className="sol-card px-10 py-8 bg-white text-black rounded-xl mb-6"
                            >
                                <h3 className="font-semibold flex items-center text-blue text-2xl mb-6 tab:text-xl">
                                    <span className="text-4xl">{sol.icon}</span>
                                    &nbsp;&nbsp;
                                    {sol.title}
                                </h3>
                                <p className="lap:text-sm">{sol.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Solution;
