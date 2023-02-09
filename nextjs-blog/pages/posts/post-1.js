import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function Post() {
    return <Layout>
        <Head>
            <title>Post 1</title>
        </Head>
        <h1>
            <em>post 1</em>
        </h1>
        <Link href="/postlist">Back</Link>
    </Layout>;
}