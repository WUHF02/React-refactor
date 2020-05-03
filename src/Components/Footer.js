// eslint-disable-next-line
import React from 'react';
/**@jsx jsx*/
import { css, jsx } from '@emotion/core';
import facebook from '../assets/images/footer/footer-facebook.png';
import youtube from '../assets/images/footer/footer-youtube.png';
import twitter from '../assets/images/footer/footer-twitter.png';
import linkedin from '../assets/images/footer/footer-linkedin.png';
import pay from '../assets/images/footer/pay_logos.png';

const colors = {
	orange: '#A39161',
	white: '#FFF',
};

const Footer = () => {
	return (
		<footer
			css={css`
				background-color: ${colors.orange};
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
			`}
		>
			<address
				css={css`
					max-width: 15%;
					font-style: italic;
					margin: 1rem;
				`}
			>
				Hi-Fi Corner Edinburgh 22 Joppa Road EH15 2EU Falkirk 44 Cow
				Wynd FK1 1PU
			</address>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				`}
			>
				<p
					css={css`
						color: ${colors.white};
						max-width: 33%;
					`}
				>
					Returns & Refunds
				</p>
				<p
					css={css`
						color: ${colors.white};
					`}
				>
					|
				</p>
				<p
					css={css`
						color: ${colors.white};
						max-width: 30%;
					`}
				>
					Privacy Policy
				</p>
			</div>
			<img
				src={pay}
				alt=''
				css={css`
					max-width: 30%;
				`}
			/>
			<figure
				css={css`
					width: 15%;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					margin: 1rem;
				`}
			>
				<img src={facebook} alt='' />
				<img src={youtube} alt='' />
				<img src={twitter} alt='' />
				<img src={linkedin} alt='' />
			</figure>
		</footer>
	);
};

export default Footer;
