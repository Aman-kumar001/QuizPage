import styles from '../styles/Page1.module.css';
import Header from './Header';
import card1 from '../public/cards/card1.svg';
import card2 from '../public/cards/card2.svg';
import card3 from '../public/cards/card3.svg';
import Image from 'next/dist/client/image';
import wave from '../public/head/waves.svg';
import { useEffect, useState } from 'react';
const Page1 = () => {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<div className={styles.container}>
			{/* header */}
			<Header />

			{/* content */}
			<div className={styles.content}>
				<div style={{ width: 'auto' }}>
					<h1>
						Live Quiz
						<span
							style={{ color: 'rgba(254, 88, 38, 1)', position: 'relative' }}
						>
							.<div className={styles.blurSpot5}></div>
						</span>
					</h1>
					<h4>take quiz from anywhere, anytime</h4>

					<button> TAKE QUIZ </button>
				</div>
			</div>

			{/* styling elements */}
			{ready && window.innerWidth > 800 && (
				<>
					<div className={styles.blurSpot1}></div>
					<div className={styles.blurSpot2}></div>
					<div className={styles.blurSpot3}></div>
					<div className={styles.blurSpot4}></div>
					<div className={styles.bg}></div>
					<div className={styles.bg2}></div>
					<div className={styles.waves}>
						<Image src={wave} />
					</div>
				</>
			)}
		</div>
	);
};

export default Page1;
