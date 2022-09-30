import { useEffect } from "react";
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
import Meta from "../components/Meta";

const Index = ({ setCurr }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.location.pathname === "/" && setCurr("");
        });
    }, [setCurr]);

    return (
        <>
            <div className="hidden">
                <h1>C-Complete</h1>
                <h1>C - Complete</h1>
                <h1>C Complete</h1>
                <h1>UniTol</h1>
                <h1>Training</h1>
                <h1>Competency managment</h1>
            </div>
            <Meta
                title="C-Complete - UniTol"
                description="Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture."
                keywords="c-complete, c complete, c, complete, unitol, competency, solutions, unitol solutions, c - complete, c- complete, c -complete, competency management, c complete, see complete, hyderabad, training"
            />
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
