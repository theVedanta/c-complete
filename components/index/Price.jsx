import Image from "next/image";
import { useState } from "react";
import Container from "../Container";
import coach from "../../public/price/coach.svg";
import enterprise from "../../public/price/enterprise.svg";

const Price = () => {
    const [pick, setPick] = useState("org");
    return (
        <Container
            className="w-full py-32 flex flex-col items-center bg-gray text-black tab:py-14"
            id="pricing"
        >
            <h4 className="text-5xl z-10 font-semibold text-blue text-center ph:text-2xl">
                Simple,Straight Pricing
            </h4>
            <div className="price-picker my-14">
                <button
                    className="org-pick btn btn-round mx-3"
                    data-selected={pick === "org" && "selected"}
                    onClick={() => setPick("org")}
                >
                    Organisation
                </button>
                <button
                    className="indi-pick btn btn-round mx-3"
                    data-selected={pick === "indi" && "selected"}
                    onClick={() => setPick("indi")}
                >
                    Individual
                </button>
            </div>

            <div className="price-boxes flex w-full justify-center items-stretch">
                <div className="price-box relative">
                    <Image alt="coach" src={coach} width={80} height={80} />
                    <h4 className="text-2xl font-medium  mt-10">
                        Coaches and Facilitators
                    </h4>
                    <p className="my-5">
                        For Coaches and Facilitators we offer a telescopic
                        pricing Model.
                    </p>
                    <div>
                        1-10 users: USD 29.99
                        <br />
                        11-25 users: USD 24.49;
                        <br />
                        26-50 users: USD 22.49,
                        <br />
                        51-100 users: USD 19.99
                    </div>

                    <button className="btn btn-primary mt-8">Purchase</button>
                </div>

                <div className="price-box relative">
                    <Image
                        alt="coach"
                        src={enterprise}
                        width={80}
                        height={80}
                    />
                    <h4 className="text-2xl font-medium  mt-10">Enterprise</h4>
                    <p className="my-5">
                        Are you an Organization with a large number of employees
                        for whom you would like to initiate a multi rater?
                    </p>

                    <button className="btn btn-primary absolute bottom-10 mt-6">
                        Contact us
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Price;
