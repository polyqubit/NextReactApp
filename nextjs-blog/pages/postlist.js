import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'

export default function PostList() {
    return <>
        <Head>
            <title>Post List</title>
        </Head>
        <ul>
            <li><Link className={styles.entry} href="http://localhost:3000/posts/post-1">Post 12</Link></li>
        </ul>
        <Link href="/">Back</Link>
    </>
}