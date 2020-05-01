// eslint-disable-next-line
import React from 'react';
/**@jsx jsx*/
import { css, jsx } from '@emotion/core';
import logo from '../assets/images/home/logo-white.png';
import parallax from '../assets/images/home/new-home-1.jpg';
import showroom from '../assets/images/home/moved.jpg';
import primaLuna from '../assets/images/home/slide-3.jpg';
import arrow from '../assets/images/home/arrow.png';
import blog from '../assets/images/home/social-blog.png';
import facebook from '../assets/images/home/social-facebook.png';
import twitter from '../assets/images/home/social-twitter.png';
import social1 from '../assets/images/home/social-1.jpg';
import social2 from '../assets/images/home/social-2.jpg';
import social3 from '../assets/images/home/social-3.jpg';

const colors = {
	red: '#FF2626',
	orange: '#A39161',
	black: '#000',
	white: '#FFF',
};

const Home = () => {
	return (
		<main>
			<figure
				css={css`
					margin: 0;
					background: url(${parallax});
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center;
					background-attachment: fixed;
					height: 80vh;
					display: flex;
					justify-content: center;
					align-items: center;
				`}
			>
				<img src={logo} alt='logo' />
			</figure>
			<img
				src={showroom}
				alt='showroom'
				css={css`
					max-width: 100%;
					border-top: 1px solid ${colors.orange};
				`}
			/>
			<figure
				css={css`
					margin: 0;
					background: url(${primaLuna});
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					height: 50vh;
				`}
			>
				<h2
					css={css`
						margin: 0;
						padding: 2.8125rem;
						text-transform: uppercase;
						color: ${colors.orange};
						font-weight: bold;
					`}
				>
					Primaluna <br />
					sounds
				</h2>
				<div
					css={css`
						padding: 2.8125rem 2.8125rem 0 2.8125rem;
						display: flex;
						justify-content: space-between;
						align-items: center;
					`}
				>
					<img
						src={arrow}
						alt='backward'
						css={css`
							transform: rotate(180deg);
							height: 2.8125rem;
						`}
					/>
					<img
						src={arrow}
						alt='forward'
						css={css`
							height: 2.8125rem;
						`}
					/>
				</div>
			</figure>
			<div
				css={css`
					margin: 0;
					height: 31.1875rem;
					display: flex;
					flex-direction: row;
					max-width: 100%;
				`}
			>
				<figure
					css={css`
						margin: 0;
						width: 100%;
						background: url(${social1});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
						transition: all 500ms;
						display: flex;
						align-items: center;
						justify-content: center;
						:hover {
							box-shadow: inset 0 0 28.125rem ${colors.black};
						}
					`}
				>
					<img
						src={facebook}
						alt='facebook'
						css={css`
							max-width: 80%;
						`}
					/>
				</figure>
				<figure
					css={css`
						margin: 0;
						width: 100%;
						background: url(${social2});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
						transition: all 500ms;
						display: flex;
						align-items: center;
						justify-content: center;
						:hover {
							box-shadow: inset 0 0 28.125rem ${colors.black};
						}
					`}
				>
					<img
						src={blog}
						alt='blog'
						css={css`
							max-width: 80%;
						`}
					/>
				</figure>
				<figure
					css={css`
						margin: 0;
						width: 100%;
						background: url(${social3});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
						transition: all 500ms;
						display: flex;
						align-items: center;
						justify-content: center;
						:hover {
							box-shadow: inset 0 0 28.125rem ${colors.black};
						}
					`}
				>
					<img
						src={twitter}
						alt='twitter'
						css={css`
							max-width: 80%;
						`}
					/>
				</figure>
			</div>
			<div
				css={css`
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: ${colors.black};
				`}
			>
				<section>
					<button
						css={css`
							background-color: ${colors.black};
							color: ${colors.white};
							text-transform: uppercase;
							border: 1px solid ${colors.white};
							font-size: 1.5rem;
						`}
					>
						History
					</button>
				</section>
			</div>
		</main>
	);
};

export default Home;
