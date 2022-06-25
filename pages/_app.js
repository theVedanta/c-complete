import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
