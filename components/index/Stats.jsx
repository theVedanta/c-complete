import Image from "next/image";
import Container from "../Container";
import stat from "../../public/stat.svg";

const Stats = () => {
    return (
        <section className="index-stats py-20 bg-darkBlue pt-10">
            <Container className="flex w-full px-60 justify-between items-stretch">
                <div className="img-stat flex justify-start items-center w-1/2 relative">
                    <Image alt="stat" src={stat} layout="fill" />
                </div>

                <div className="stat-cards flex w-1/2 py-12 justify-end flex-wrap">
                    {[
                        {
                            stat: "69",
                            name: "Competencies",
                        },
                        {
                            stat: "489",
                            name: "Competencies",
                        },
                        {
                            stat: "3826",
                            name: "Competencies",
                        },
                        {
                            stat: "1697",
                            name: "Reports Generated",
                        },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card w-4/12 m-3 h-1/2 py-10 flex flex-col items-center justify-center rounded-lg shadow-lg bg-white"
                        >
                            <h5 className="font-bold text-5xl text-blue">
                                {stat.stat}
                            </h5>
                            <h6 className="font-semibold text-lg text-blue mt-4">
                                {stat.name}
                            </h6>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
