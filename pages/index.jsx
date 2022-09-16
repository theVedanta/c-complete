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

const Index = () => {
    return (
        <>
            <Meta
                title="C-Complete"
                description="Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture."
                keywords="c-complete, unitol, competency management, c complete, see complete"
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
