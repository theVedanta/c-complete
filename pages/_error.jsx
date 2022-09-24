import Container from "../components/Container";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../components/Meta";

const error = () => {
    return (
        <>
            <Meta
                title="C-Complete - Error"
                description="Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture."
                keywords=""
            />
            <Container className="error w-screen h-screen flex flex-col justify-center items-center bg-blue">
                <h4 className="text-3xl font-light">
                    404 <span className="text-darkBlue font-light">|</span> Page
                    does not exist
                </h4>
                <span className="font-thin text-xl mt-4">
                    Redirecting back...
                </span>

                <Redirect />
            </Container>
        </>
    );
};

const Redirect = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.back();
        }, 3000);
    }, [router]);

    return <></>;
};

export default error;
