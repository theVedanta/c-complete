import Container from "../components/Container";
import { useEffect } from "react";
import { useRouter } from "next/router";

const error = () => {
    return (
        <Container className="error w-screen h-screen flex flex-col justify-center items-center bg-blue">
            <h4 className="text-3xl font-light">
                404 <span className="text-darkBlue font-light">|</span> Page
                does not exist
            </h4>
            <span className="font-thin text-xl mt-4">Redirecting back...</span>

            <Redirect />
        </Container>
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
