import Container from "../Container";

const Features = () => {
    return (
        <section className="index-feat w-screen py-16">
            <Container className="flex flex-col items-center">
                <h3 className="index-feat-heading text-5xl text-white font-semibold text-center">
                    Features
                </h3>
                <h3 className="text-3xl font-light text-center px-32 text-white mt-20 leading-normal">
                    C-Complete is a feature rich platform, which provides for a
                    number of value add aspects across the multi-rater feedbak
                    value chain.
                </h3>
            </Container>
        </section>
    );
};

export default Features;
