import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 300,
            once: true,
        });
    }, []);

    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
