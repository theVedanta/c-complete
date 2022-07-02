import Link from "next/link";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="flex justify-between bg-darkBlue w-screen px-32 py-20">
            <div className="foot-left w-1/2">
                <h1 className="text-4xl font-bold">C-Complete</h1>
                <p className="mt-10 pr-48">
                    C-Complete is a part of the product offerings from UniTol
                    Training Solutions. The product, C-Complete has been
                    improved over a period spanning more than 10 years and today
                    apart from boosting of marque clients, is also known for its
                    comprehensiveness and flexibility. We continue to delight
                    our clients and customers across the globe.
                </p>
            </div>
            <div className="foot-right w-1/2 flex flex-col">
                <div className="foot-right-top w-full flex justify-between">
                    <div className="foot-col flex flex-col">
                        <Link href="mailto:contact@unitol.in">
                            <a className="font-semibold mb-12 flex items-center">
                                <FiMail />
                                &nbsp;&nbsp; contact@unitol.in
                            </a>
                        </Link>
                        {[
                            ["Features", "/#features"],
                            ["Case Studies", "/#case-studies"],
                            ["Pricing", "/#pricing"],
                            ["Contact Us", "/contact-us"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8">{title}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col">
                        <Link href="mailto:contact@unitol.in">
                            <a className="font-semibold mb-12 flex items-center">
                                <FiMapPin />
                                &nbsp; Secunderabad
                            </a>
                        </Link>
                        {[
                            ["Organization", "/product/organization"],
                            ["Individual", "/product/individual"],
                            ["Privacy Policy", "/"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8">{title}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col">
                        <h4 className="font-semibold mb-12 flex items-center">
                            <FiClock />
                            &nbsp; Opening Hours
                        </h4>
                        <p className="w-full">
                            Mon - Sat: 09:30 am - 06:30 pm
                            <br />
                            <br />
                            Sun: Closed
                        </p>
                    </div>
                </div>
                <div className="foot-right-bottom w-full mt-20">
                    UniTol © 2011 - 2022 All Right Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
