import Form from "../components/contact/Form";
import Map from "../components/contact/Map";

const Contact = () => {
    return (
        <main className="contact pl-32 bg-gray h-screen flex items-center lap:pl-16 tab:pl-10 ph:flex-col ph:pl-0">
            <Form />
            <Map />
        </main>
    );
};

export default Contact;
