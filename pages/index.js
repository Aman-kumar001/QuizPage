import Head from 'next/head';
import Image from 'next/image';
import Page1 from '../components/Page1';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Page1 />
		</div>
	);
}
