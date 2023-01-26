import Layout from "../comopnents/Layout/Layout";

const TempApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default TempApp;