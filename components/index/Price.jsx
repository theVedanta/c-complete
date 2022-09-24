import Image from "next/image";
import { useState } from "react";
import Container from "../Container";
import coach from "../../public/price/coach.svg";
import enterprise from "../../public/price/enterprise.svg";
import indi from "../../public/price/indi.svg";
import gold from "../../public/price/gold.svg";
import Link from "next/link";

const Price = () => {
    const [pick, setPick] = useState("org");

    return (
        <Container
            className="w-full nav-section py-32 flex flex-col items-center bg-gray text-black blap:py-20 lap:py-16 tab:py-14"
            id="pricing"
        >
            <h4
                data-aos="fade-down"
                className="text-5xl z-10 text-center font-semibold text-blue lap:text-4xl tab:text-4xl ph:text-2xl"
            >
                Simple, Straight Pricing
            </h4>
            <div
                data-aos="fade-down"
                className="price-picker flex justify-center w-full my-14 blap:my-10 lap:my-8"
            >
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

            {pick === "org" ? <Org /> : <Indi />}
        </Container>
    );
};

const Org = () => {
    return (
        <div className="price-boxes flex w-full justify-center items-stretch ph:flex-col">
            <div className="price-box relative">
                <Image alt="coach" src={coach} width={60} height={60} />
                <h4 className="text-2xl font-medium mt-10 lap:mt-6 lap:text-xl">
                    Coaches and Facilitators
                </h4>
                <p className="my-5 lap:text-sm">
                    For Coaches and Facilitators we offer a telescopic pricing
                    Model.
                </p>
                <div className="lap:text-sm">
                    1-10 users: USD 29.99
                    <br />
                    11-25 users: USD 24.49;
                    <br />
                    26-50 users: USD 22.49,
                    <br />
                    51-100 users: USD 19.99
                </div>

                <Link href="/contact-us">
                    <a className="btn btn-primary mt-8 ph:mt-12">Purchase</a>
                </Link>
            </div>

            <div className="price-box relative !bg-darkBlue text-white">
                <Image alt="coach" src={enterprise} width={60} height={60} />
                <h4 className="text-2xl font-medium mt-10 lap:mt-6 lap:text-xl">
                    Enterprise
                </h4>
                <p className="my-5 lap:text-sm ph:mb-20">
                    Are you an Organization with a large number of employees for
                    whom you would like to initiate a multi rater?
                </p>

                <Link href="/contact-us">
                    <a className="btn btn-primary absolute bottom-10 mt-6">
                        Contact us
                    </a>
                </Link>
            </div>
        </div>
    );
};

const Indi = () => {
    return (
        <div className="price-boxes flex w-full justify-center items-stretch ph:flex-col">
            <div className="price-box relative">
                <Image alt="coach" src={indi} width={80} height={80} />
                <h4 className="text-2xl font-medium  mt-10">
                    Individual Basic
                </h4>
                <h5 className="text-xl mt-3 font-bold">USD 24.99</h5>
                <p className="my-5">
                    A complete multi rater assessment on Managerial Competencies
                    – depending on whether you are in Junior Management, Middle
                    or Senior Management Roles
                </p>

                <Link href="/contact-us">
                    <a className="btn btn-primary mt-8 ph:mt-12">Purchase</a>
                </Link>
            </div>

            <div className="price-box relative !bg-darkBlue text-white">
                <Image alt="coach" src={gold} width={80} height={80} />
                <h4 className="text-2xl font-medium  mt-10">Individual Gold</h4>
                <h5 className="text-xl mt-3 font-bold">USD 24.99</h5>
                <p className="my-5">
                    Multi Rater assessment on your Functional Competencies as
                    well as Managerial abilities. Get a composite picture of
                    yourself, based on how others view you, in your role.
                </p>

                <Link href="/contact-us">
                    <a className="btn btn-primary mt-8 ph:mt-12">Purchase</a>
                </Link>
            </div>
        </div>
    );
};

export default Price;
