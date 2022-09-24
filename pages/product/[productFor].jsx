import { useRouter } from "next/router";
import Benefits from "../../components/product/Benefits";
import Header from "../../components/product/Header";
import { useState, useEffect } from "react";
import Meta from "../../components/Meta";

const Product = () => {
    const router = useRouter();
    const { productFor } = router.query;
    const [indi, setIndi] = useState("check");

    useEffect(() => {
        productFor === "individual" ? setIndi(true) : setIndi(false);
    }, [productFor]);

    return (
        <>
            <Meta
                title="C-Complete - Customer"
                description="Competency management and development professionals are
                    constantly faced with the need to accurately evaluate
                    behavioral attributes. Whether as part of performance
                    management, training needs analysis, leadership development
                    or succession planning - C-Complete offers you a platform
                    for objectively capturing the picture of each individual as
                    perceived by the many stakeholders. C-Complete lets you see
                    the complete picture."
                keywords="c-complete, organizations, organisations, individual, individuals, unitol, competency management, c complete, see complete, hyderabad, training"
            />
            <Header indi={indi} />
            <Benefits indi={indi} />
        </>
    );
};

export default Product;
