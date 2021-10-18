import styles from '../styles/Page2.module.css';
import Header from './Header';
import card1 from '../public/cards/card1.svg';
import card2 from '../public/cards/card2.svg';
import card3 from '../public/cards/card3.svg';
import Image from 'next/image';
import waves from '../public/waves2.svg';
import waves4 from '../public/waves4.svg';
import waves3 from '../public/waves3.svg';
import ilus1 from '../public/body/ilus1.png';
import ilus2 from '../public/body/ilus2.png';
import line1 from '../public/body/connect1.svg';
import line2 from '../public/body/line2.svg';

import { useEffect, useState } from 'react';
const Page2 = () => {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<div className={styles.container}>
			{ready && window.innerWidth > 800 && <span className={styles.b1}></span>}
			<div className={styles.features}>
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
			{ready && window.innerWidth > 800 && (
				<div
					style={{
						width: '100%',
						overflow: 'hidden',
						position: 'relative',
						top: '10rem',
						float: 'initial',
						zIndex: 1,
						opacity: '0.6',
					}}
				>
					<Image src={waves} />
				</div>
			)}
			<div className={styles.para}>
				<p
					style={{
						textAlign: 'center',
						fontSize: '3rem',
						fontWeight: '700',
						wordWrap: 'normal',
					}}
				>
					Practive. Improve. Grow
				</p>
				<p
					style={{
						width: '80%',
						margin: 'auto',
						textAlign: 'center',
						fontWeight: '300',
						fontSize: '1.2rem',
					}}
				>
					Take quizzes anytime with Scoreplus’s Live Quiz which allows you to
					practice more and analyse your performance so that you can prepare
					more efficiently
				</p>
				<span className={styles.b2}></span>
			</div>
			<div style={{ width: '30%', margin: 'auto' }}>
				<Image src={line1} />
			</div>
			<div style={{ width: '100%', position: 'relative' }}>
				{ready && window.innerWidth > 800 && (
					<div
						style={{
							width: '100%',
							overflow: 'hidden',
							position: 'absolute',
							top: '0',
							float: 'initial',
							zIndex: 1,
							opacity: '0.6',
						}}
					>
						<Image src={waves3} />
					</div>
				)}
				<div className={styles.q1}>
					<div className={styles.ilus}>
						<Image src={ilus1} />
					</div>
					<div className={styles.expl}>
						<p className={styles.reward}>reward</p>
						<p className={styles.rewardPara}>
							Get reward points based on your performance. Collect more reward
							points to get access to premium study material
						</p>
					</div>
					<span className={styles.b3}></span>
				</div>
			</div>
			<div style={{ width: '30%', margin: 'auto' }}>
				<Image src={line2} />
			</div>
			<div style={{ width: '100%', position: 'relative' }}>
				{ready && window.innerWidth > 800 && (
					<div
						style={{
							width: '100%',
							overflow: 'hidden',
							position: 'absolute',
							top: '0',
							float: 'initial',
							zIndex: 1,
							opacity: '0.5',
							zIndex: '0',
						}}
					>
						<Image src={waves4} />
					</div>
				)}
				<div className={styles.q2}>
					<div className={styles.ilus}>
						<Image src={ilus2} />
					</div>
					<div className={styles.expl}>
						<p className={styles.courses}>Courses</p>
						<p className={styles.rewardPara}>
							Use those reward points to redeem amazing courses by Scoreplus.
						</p>
					</div>
					<span className={styles.b4}></span>
				</div>
			</div>
		</div>
	);
};

export default Page2;
