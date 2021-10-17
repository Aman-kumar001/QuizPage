import styles from '../styles/Footer.module.css';
import Image from 'next/dist/client/image';
import yt from '../public/footer/YT.svg';
import fb from '../public/footer/fb.svg';
import mail from '../public/footer/mail.svg';
import { useEffect, useState } from 'react';
const Footer = () => {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		setReady(true);
	}, []);
	return (
		<div className={styles.container}>
			<p className={styles.links}>
				<span className={styles.img}>
					<Image src={yt} height={30} width={50} />
				</span>
				<span className={styles.img}>
					<Image src={fb} height={30} width={50} />
				</span>
				<span className={styles.img}>
					<Image src={mail} height={30} width={50} />
				</span>
			</p>
			{ready && window.innerWidth > 800 && (
				<>
					<span className={styles.b1}></span>
					<span className={styles.b2}></span>
					<span className={styles.b3}></span>
					<span className={styles.b4}></span>
				</>
			)}
		</div>
	);
};

export default Footer;
