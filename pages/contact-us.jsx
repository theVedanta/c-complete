import Form from "../components/contact/Form";
import Map from "../components/contact/Map";
import Meta from "../components/Meta";

const Contact = () => {
    return (
        <>
            <Meta
                title="C-Complete - Contact Us"
                description="Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture."
                keywords="c-complete, contact us, contact, unitol, competency management, c complete, see complete, hyderabad, training"
            />
            <main className="contact pl-32 bg-gray h-screen flex items-center lap:pl-16 tab:pl-10 ph:flex-col ph:pl-0">
                <Form />
                <Map />
            </main>
        </>
    );
};

export default Contact;
