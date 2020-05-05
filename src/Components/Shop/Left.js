// eslint-disable-next-line
import React, { useContext } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';

const priceGroups = [
	'£0 - £799',
	'£800 - £999',
	'£1.000 - £1.499',
	'£1,500.00 - £1,999.99',
	'£2.000 00 - £2.999.99',
	'£3.000.00 - £3.499 99',
	'£3,500.00 - £4,999.99',
	'£5,000.00 - £7.999.99',
	'£8,000 00 - £11.999.99',
	'£12.000.00 and above',
];

const Left = ({ list }) => {
	const colors = useContext(ColorContext);
	return (
		<div
			className='grid__left'
			css={css`
				grid-column: 1 / 2;
			`}
		>
			<ul
				className='left__categoryContainer'
				css={css`
					background-color: ${colors.grey};
					padding: 1rem;
					margin: 0 0 2rem 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: baseline;
				`}
			>
				{list.categories.map((e) => (
					<li
						key={e}
						css={css`
							color: ${colors.orange};
							list-style: none;
						`}
					>
						<button
							css={css`
								color: ${colors.orange};
								text-decoration: none;
								border: 0;
								background-color: ${colors.grey};
								font-size: 1rem;
								cursor: pointer;
								:hover {
									text-decoration: underline;
								}
							`}
						>
							{e}
						</button>
					</li>
				))}
			</ul>
			<div
				className='left__priceContainer'
				css={css`
					background-color: ${colors.grey};
					padding: 1rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: baseline;
				`}
			>
				<h3
					css={css`
						margin: 0;
						text-transform: uppercase;
						color: ${colors.orange};
					`}
				>
					Shop by
				</h3>
				<h4
					css={css`
						text-transform: uppercase;
						margin: 0.8rem 0;
					`}
				>
					price
				</h4>
				<ul
					className='priceContainer__priceList'
					css={css`
						padding: 0;
						margin: 0;
					`}
				>
					{priceGroups.map((interval) => (
						<li
							key={interval}
							css={css`
								color: ${colors.orange};
								list-style: none;
								cursor: pointer;
								:hover {
									text-decoration: underline;
								}
							`}
						>
							{interval}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Left;
