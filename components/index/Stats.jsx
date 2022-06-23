import Image from "next/image";
import Container from "../Container";
import stat from "../../public/stat.png";

const Stats = () => {
    return (
        <section className="index-stats py-16 bg-darkBlue">
            <Container className="flex w-full">
                <div className="img-stat flex justify-center items-center w-1/2">
                    <Image alt="stat" src={stat} width={450} height={425} />
                </div>

                <div className="stat-cards flex w-1/2 justify-center flex-wrap">
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
                            className="stat-card w-4/12 m-4 flex flex-col items-center justify-center rounded-lg shadow bg-white"
                        >
                            <h5 className="font-bold text-5xl text-blue">
                                {stat.stat}
                            </h5>
                            <h6 className="font-semibold text-lg text-blue mt-5">
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
