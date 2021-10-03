import classes from '../styles/Header.module.css';
import Image from 'next/dist/client/image';
import logo from '../public/head/headerLogo.svg';
const Header = () => {
	return (
		<div className={classes.container}>
			<div style={{ flex: 1 }}>
				<div className={classes.logo}>
					<Image src={logo} height={40} width={160} />
				</div>
			</div>
			<div
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'row-reverse',
					columnGap: '1rem',
				}}
			>
				<span className={classes.link}>LOG IN</span>
				<span className={classes.link}>SIGN UP</span>
			</div>
		</div>
	);
};

export default Header;
