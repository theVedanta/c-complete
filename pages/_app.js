import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
    const [curr, setCurr] = useState("");

    useEffect(() => {
        // AOS
        AOS.init({
            duration: 400,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <>
            <Nav curr={curr} setCurr={setCurr} />
            <Component setCurr={setCurr} {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
