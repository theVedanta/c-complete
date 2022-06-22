import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

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
