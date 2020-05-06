// eslint-disable-next-line
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';

const Center = ({ data, currentCategory }) => {
	const colors = useContext(ColorContext);
	return (
		<div
			className='grid__center'
			css={css`
				grid-column: 2 / 3;
			`}
		>
			<h2
				className='center__category'
				css={css`
					margin: 0 0 0.8rem 0;
					font-weight: bold;
				`}
			>
				{currentCategory ? currentCategory : ''}
			</h2>
			<div
				className='center__sort'
				css={css`
					background-color: ${colors.grey};
					padding: 0.5rem;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				`}
			>
				<div
					className='sort__control'
					css={css`
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
					`}
				>
					<p
						css={css`
							text-transform: uppercase;
							font-weight: bold;
						`}
					>
						sort by:
					</p>
					<button
						css={css`
							background-color: ${colors.white};
						`}
					>
						Price
					</button>
				</div>
				<p className='sort__count'>{data.length} item(s)</p>
				<div
					className='sort__total'
					css={css`
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
					`}
				>
					<p
						css={css`
							text-transform: uppercase;
						`}
					>
						show:
					</p>
					<button
						css={css`
							background-color: ${colors.white};
						`}
					>
						300
					</button>
				</div>
			</div>
			<div
				className='center__productsContainer'
				css={css`
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
				`}
			>
				{data.map((e) => (
					<Link
						to={`/product?sku=${e.sku}`}
						key={e.model}
						className='productsContainer__product'
						css={css`
							height: 12rem;
							padding: 0.625rem;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
						`}
					>
						<img
							src={e.images[0]}
							alt='product'
							css={css`
								object-fit: scale-down;
								max-width: 100%;
								max-height: 40%;
								filter: drop-shadow(0px 0px 1px #e1e1e1)
									drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
							`}
						/>
						<h4
							css={css`
								margin: 0;
								text-transform: uppercase;
							`}
						>
							{e.make} {e.model}
						</h4>
						<h5
							css={css`
								margin: 0;
								color: ${colors.orange};
								font-weight: bold;
							`}
						>
							{e.price} kr
						</h5>
						<button
							css={css`
								color: ${colors.white};
								background-color: ${colors.orange};
								border: 0;
								padding: 5% 15%;
								text-transform: uppercase;
							`}
						>
							Add to cart
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Center;
