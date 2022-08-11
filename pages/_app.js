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
// import { RotateLoader } from "react-spinners";

function App({ Component, pageProps }) {
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        // AOS
        AOS.init({
            duration: 600,
            delay: 300,
            once: true,
        });

        // window.addEventListener("load", function () {
        //     setLoading(false);
        // });
    }, []);

    return (
        <>
            {/* {loading ? (
                <div className="load w-screen h-screen flex items-center justify-center">
                    <RotateLoader color={"#fff"} />
                </div>
            ) : (
                <>
                    <Nav />
                    <Component {...pageProps} />
                    <Footer />
                </>
            )} */}
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
