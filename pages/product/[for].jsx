import { useRouter } from "next/router";
import Header from "../../components/product/Header";

const Product = () => {
    const router = useRouter();
    const { productFor } = router.query;

    return <Header productFor={productFor} />;
};

export default Product;
