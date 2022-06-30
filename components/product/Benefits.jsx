import Container from "../Container";
import { orgBenefits, indiBenefits } from "../../data";
import { useEffect, useState } from "react";
import Image from "next/image";

const Benefits = ({ indi }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        indi ? setData(indiBenefits) : setData(orgBenefits);
    }, [indi]);

    return (
        <Container className="benefits py-20 bg-blue flex flex-col items-center">
            <h3 className="index-feat-heading text-5xl text-white font-semibold text-center">
                Benefits
            </h3>

            <div className="benefit-cards flex flex-wrap justify-between items-center mt-20">
                {data !== null &&
                    data.map((benefit, i) => (
                        <BenefitCard key={i} benefit={benefit} />
                    ))}
            </div>
        </Container>
    );
};

const BenefitCard = ({ benefit }) => {
    return (
        <div className="benefit mb-20 bg-white text-black rounded-lg">
            <div className="case-img h-32 rounded-t-lg w-full overflow-hidden relative">
                <Image
                    alt="the"
                    src={benefit.img}
                    objectFit="cover"
                    layout="fill"
                />
            </div>

            <div className="case-content w-full px-8 pt-5 pb-4 flex flex-col items-start justify-center">
                <h4 className="text-xl font-semibold flex items-center text-blue py-2">
                    {benefit.icon}&nbsp;{benefit.title}
                </h4>
                <p className="my-3 text-sm">{benefit.desc}</p>
            </div>
        </div>
    );
};

export default Benefits;
