import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between bg-darkBlue w-screen px-20 py-20">
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
                            <a className="font-semibold mb-12">
                                contact@unitol.in
                            </a>
                        </Link>
                        {[
                            ["Contact Us", "/"],
                            ["Contact Us", "/"],
                            ["Contact Us", "/"],
                            ["Contact Us", "/"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8">{title}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col">
                        <Link href="mailto:contact@unitol.in">
                            <a className="font-semibold mb-12">
                                contact@unitol.in
                            </a>
                        </Link>
                        {[
                            ["Contact Us", "/"],
                            ["Contact Us", "/"],
                            ["Contact Us", "/"],
                        ].map(([title, href], i) => (
                            <Link href={href} key={i}>
                                <a className="mb-8">{title}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="foot-col flex flex-col">
                        <h4 className="font-semibold mb-12">opening hours</h4>
                        <p className="w-1/2">
                            Mon - Sat : 09:30 am - 06:30 pm Sun : Closed
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