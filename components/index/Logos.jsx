import Container from "../Container";
import Image from "next/image";
import { useEffect } from "react";

const Logos = () => {
    const logos = [
        "/logos/tata.svg",
        "/logos/acacia.svg",
        "/logos/advanta.svg",
        "/logos/bengal.svg",
        "/logos/dcm.svg",
        "/logos/ofcc.svg",
        "/logos/reddy.svg",
        "/logos/ggk.svg",
        "/logos/hr footprints.svg",
        "/logos/iclean.svg",
        "/logos/isb.svg",
    ];

    return (
        <section className="py-20 bg-gray blap:py-24 lap:py-16 tab:py-20 tab:pb-10">
            <Container className="flex flex-col items-center">
                <h3
                    data-aos="fade-up"
                    className="text-5xl text-blue font-semibold text-center mb-16 blap:mb-14 lap:text-4xl tab:mb-10"
                >
                    Our Clients
                </h3>
            </Container>

            <div className="logos-container overflow-x-hidden">
                <div className="logos px-10 flex items-center justify-start flex-shrink-0">
                    {logos.map((logo, i) => (
                        <div
                            className="logo flex-shrink-0 relative mx-6 tab:mx-0"
                            key={i}
                        >
                            <Image
                                src={logo}
                                alt="the"
                                objectFit="cover"
                                width={220}
                                height={110}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
