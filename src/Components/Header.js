// eslint-disable-next-line
import React from 'react';
import phone from '../assets/images/top-call.png';
import address from '../assets/images/top-map.png';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const colors = {
	red: '#FF2626',
	orange: '#A39161',
	black: '#000',
	white: '#FFF',
};

const Header = () => {
	return (
		<header>
			<ul
				css={css`
					background-color: ${colors.black};
					margin: 0;
					border-bottom: solid 1px ${colors.orange};
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					padding: 0.5rem 0 0.5rem 80%;
				`}
			>
				<li
					css={css`
						list-style: none;
					`}
				>
					<img src={address} alt='address' />
				</li>
				<li
					css={css`
						list-style: none;
					`}
				>
					<img src={phone} alt='phone' />
				</li>
				<li
					css={css`
						list-style: none;
					`}
				>
					<img src={phone} alt='phone' />
				</li>
			</ul>
			<nav>
				<ul
					css={css`
						background-color: ${colors.black};
						margin: 0;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						padding: 0.5rem 0.5rem;
					`}
				>
					<li
						css={css`
							color: ${colors.white};
							list-style: none;
							text-transform: uppercase;
							font-size: 1.3125rem;
							font-style: bold;
							:hover {
								color: ${colors.orange};
								cursor: pointer;
							}
						`}
					>
						Home
					</li>
					<li
						css={css`
							color: ${colors.white};
							list-style: none;
							text-transform: uppercase;
							font-size: 1.3125rem;
							font-style: bold;
							:hover {
								color: ${colors.orange};
								cursor: pointer;
							}
						`}
					>
						Shop
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
