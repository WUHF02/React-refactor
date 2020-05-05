import React from 'react';
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';

const Left = ({ colors, categories }) => {
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
				{categories.map((e) => (
					<li
						key={e}
						css={css`
							color: ${colors.orange};
							list-style: none;
						`}
					>
						<Link
							to={`/shop/?product_category=${e}`}
							css={css`
								color: ${colors.orange};
								text-decoration: none;
							`}
							//onClick={() => setCategory()}
							/* onClick={(e) => console.log(e)} */
						>
							{e}
						</Link>
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
					<li
						css={css`
							color: ${colors.orange};
							list-style: none;
						`}
					>
						£0 - £799
					</li>
					<li
						css={css`
							color: ${colors.orange};
							list-style: none;
						`}
					>
						£800 - £999
					</li>
					<li
						css={css`
							color: ${colors.orange};
							list-style: none;
						`}
					>
						£1.000 - £1.499
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Left;
