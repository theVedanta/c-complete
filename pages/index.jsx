import Beliefs from "../components/index/Beliefs";
import Cases from "../components/index/Cases";
import FAQ from "../components/index/FAQ";
import Features from "../components/index/Features";
import For from "../components/index/For";
import Header from "../components/index/Header";
import Logos from "../components/index/Logos";
import Price from "../components/index/Price";
import Solution from "../components/index/Solution";
import Stats from "../components/index/Stats";
import Test from "../components/index/Test";

const Index = () => {
    return (
        <>
            <Header />
            <For />
            <Stats />
            <Features />
            <Solution />
            <FAQ />
            <Price />
            <Test />
            <Logos />
            <Cases />
            <Beliefs />
        </>
    );
};
export default Index;
