import styles from '../styles/Page1.module.css';
import Header from './Header';
import card1 from '../public/cards/card1.svg';
import card2 from '../public/cards/card2.svg';
import card3 from '../public/cards/card3.svg';
import Image from 'next/dist/client/image';
import wave from '../public/head/waves.svg';
const Page1 = () => {
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
			<div className={styles.blurSpot1}></div>
			<div className={styles.blurSpot2}></div>
			<div className={styles.blurSpot3}></div>
			<div className={styles.blurSpot4}></div>
			<div className={styles.bg}></div>
			<div className={styles.bg2}></div>
			<div className={styles.waves}>
				<Image src={wave} />
			</div>

			{/* cards */}
			{/* not reponsive yet*/}
			<div className={styles.features}>
				{/* <div style={{ zIndex: '0' }}>
					<span className={styles.blur}></span>
					<hr />
					<span className={styles.blur2}></span>
				</div> */}
				<div className={styles.cards}>
					<div className={styles.card}>
						<div style={{ flex: 5 }}>
							<Image src={card1} height='95' width='160' />
						</div>
						<div style={{ flex: 3 }}>
							<p>Practice and learn anytime, anywhere</p>
						</div>
					</div>
					<div className={styles.card}>
						<div style={{ flex: 5 }}>
							<Image src={card2} height='95' width='160' />
						</div>
						<div style={{ flex: 3 }}>
							<p>Get rewards based on performance</p>
						</div>
					</div>
					<div className={styles.card}>
						<div style={{ flex: 5 }}>
							<Image src={card3} height='95' width='160' />
						</div>
						<div style={{ flex: 3 }}>
							<p>Redeem great Scoreplus courses</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page1;
