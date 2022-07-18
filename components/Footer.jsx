import Link from "next/link";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="flex justify-between bg-darkBlue w-screen px-32 py-20 lap:px-20 tab:flex-col tab:py-14 ph:px-10">
            <div className="foot-left w-1/2 blap:w-1/3 tab:w-full tab:mb-16">
                <h1 className="text-4xl font-bold">C-Complete</h1>
                <p className="mt-10 pr-48 blap:pr-20 blap:text-xs blap:leading-loose lap:pr-5 tab:text-sm tab:leading-loose ph:px-0 ph:mt-6">
                    C-Complete is a part of the product offerings from UniTol
                    Training Solutions. The product, C-Complete has been
                    improved over a period spanning more than 10 years and today
                    apart from boosting of marque clients, is also known for its
                    comprehensiveness and flexibility. We continue to delight
                    our clients and customers across the globe.
                </p>
            </div>

            <div className="foot-right w-1/2 flex flex-col blap:w-2/3 tab:w-full">
                <div className="foot-right-top w-full flex justify-between ph:flex-col">
                    <div className="foot-col flex flex-col lap:items-center tab:items-start ph:mb-10">
                        <Link href="mailto:contact@unitol.in">
                            <a className="font-semibold mb-12 flex items-center lap:text-sm ph:mb-4 ph:text-base">
                                <FiMail />
                                &nbsp;&nbsp; contact@unitol.in
                            </a>
                        </Link>
                        {[
                            ["Features", "/#features"],
                            ["Case Studies", "/#case-studies"],
                            ["Pricing", "/#pricing"],
                            ["Offerings", "/#offerings"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8 underline lap:text-sm lap:mb-6 tab:mb-4">
                                    {title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col lap:items-center tab:items-start ph:mb-10">
                        <Link href="mailto:contact@unitol.in">
                            <a className="font-semibold mb-12 flex items-center lap:text-sm ph:mb-4 ph:text-base">
                                <FiMapPin />
                                &nbsp; Secunderabad
                            </a>
                        </Link>
                        {[
                            ["Contact Us", "/contact-us"],
                            ["Organization", "/product/organization"],
                            ["Individual", "/product/individual"],
                            ["Privacy Policy", "/"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8 underline lap:text-sm lap:mb-6 tab:mb-4">
                                    {title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col lap:items-center tab:items-start ph:mb-10">
                        <h4 className="font-semibold mb-12 flex items-center lap:text-sm ph:mb-4 ph:text-base">
                            <FiClock />
                            &nbsp; Opening Hours
                        </h4>
                        <p className="w-full lap:text-sm">
                            Mon - Sat: 09:30 am - 06:30 pm
                            <br />
                            <br />
                            Sun: Closed
                        </p>
                    </div>
                </div>
                <div className="foot-right-bottom w-full mt-20 ph:text-center ph:mt-10">
                    UniTol © 2011 - 2022 All Right Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
