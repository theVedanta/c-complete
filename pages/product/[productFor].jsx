import { useRouter } from "next/router";
import Benefits from "../../components/product/Benefits";
import Header from "../../components/product/Header";
import { useState, useEffect } from "react";

const Product = () => {
    const router = useRouter();
    const { productFor } = router.query;
    const [indi, setIndi] = useState("check");

    useEffect(() => {
        productFor === "indi" ? setIndi(true) : setIndi(false);
    }, [productFor]);

    return (
        <>
            <Header indi={indi} />
            <Benefits indi={indi} />
        </>
    );
};

export default Product;
