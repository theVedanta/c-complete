import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {/* <link rel="icon" href="" type="image/x-icon" /> */}
            <title>{title}</title>
        </Head>
    );
};

export default Meta;
