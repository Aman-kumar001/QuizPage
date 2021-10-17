import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Page1 />
			<Page2 />

			<Footer />
		</div>
	);
}
