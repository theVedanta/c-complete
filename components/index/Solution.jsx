import Container from "../Container";

const Solution = () => {
    const sols = [
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
        {
            title: "Management Complete",
            desc: "Want to build a more effective management cadre? Assess the Managerial capability of your employees through Management Complete. Our General Management competency repository can be used to identify the development requirements in your staff. By selecting the appropriate competencies to suit your requirement, you will be able to help build those capabilities in your people and thus build the organization in the long run.",
        },
    ];

    return (
        <>
            <section className="index-feat sol-feat w-screen py-16">
                <Container className="flex flex-col items-center">
                    <h3 className="index-feat-heading text-5xl text-white font-semibold text-center">
                        What We Offer
                    </h3>
                    <h3 className="text-3xl font-light text-center px-32 text-white mt-20 leading-normal">
                        Standardized Competency Based Questionnaires for your
                        various requirements.
                    </h3>
                </Container>
            </section>
            <div className="sol-cards-hold w-full bg-gray py-16">
                <Container className="flex justify-center items-center">
                    <div className="sol-cards w-9/12 flex justify-between flex-wrap">
                        {sols.map((sol, i) => (
                            <div
                                key={i}
                                className="sol-card px-10 py-8 bg-white text-black rounded-xl mb-6"
                            >
                                <h3 className="font-semibold text-blue text-3xl mb-6">
                                    {sol.title}
                                </h3>
                                <p>{sol.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Solution;
