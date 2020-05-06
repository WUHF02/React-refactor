// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';
import Breadcrumps from './Breadcrumps';
import banner from '../../assets/images/product/relocation_banner.png';

const buttons = [
	'ask a question',
	'part exchange',
	'pay by finance',
	'seen a better price?',
];

const Product = () => {
	let params = new URLSearchParams(document.location.search);
	let id = params.get('sku');
	const url = `https://hifi-corner.herokuapp.com/api/v1/products/${id}`;
	//eslint-disable-next-line
	const colors = useContext(ColorContext);
	const [data, setData] = useState({ content: {}, isFetching: false });

	useEffect(() => {
		(async () => {
			try {
				setData({ content: {}, isFetching: true });
				const response = await fetch(url);
				const result = await response.json();
				setData({ content: result, isFetching: false });
			} catch (e) {
				console.log('Error: ', e);
			}
		})();
	}, [url]);
	console.log(data.content);

	return (
		<main
			css={css`
				display: flex;
				flex-direction: column;
			`}
		>
			<Breadcrumps data={data.content} />
			<img
				src={banner}
				alt='banner'
				css={css`
					max-width: 96%;
					align-self: center;
				`}
			/>
			<div
				css={css`
					padding: 2rem;
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr 0.5fr 0.5fr;
					grid-gap: 1rem;
				`}
			>
				<img
					src={data.content.images}
					alt='product'
					css={css`
						grid-row: 1 / 2;
						grid-column: 1 / 2;
						border: solid 1px ${colors.grey};
						object-fit: contain;
					`}
				/>
				<p
					css={css`
						margin: 0;
						grid-column: 1 / 2;
						grid-row: 2 / 3;
						color: ${colors.orange};
					`}
				>
					MORE VIEWS
				</p>
				<figure
					css={css`
						margin: 3rem 0 0 0;
						padding-right: 40%;
						grid-column: 1 / 2;
						grid-row: 2 / 3;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
					`}
				>
					<img
						src={data.content.images}
						alt='product'
						css={css`
							border: solid 1px ${colors.grey};
							object-fit: contain;
							max-height: 80%;
							max-width: 80%;
						`}
					/>
					<img
						src={data.content.images}
						alt='product'
						css={css`
							border: solid 1px ${colors.grey};
							object-fit: contain;
							max-height: 80%;
							max-width: 80%;
						`}
					/>
				</figure>
				<section
					css={css`
						grid-column: 1 / 2;
						grid-row: 3 / 4;
					`}
				>
					<h4
						css={css`
							color: ${colors.orange};
						`}
					>
						Description
					</h4>
					<p>{data.content.description}</p>
				</section>
				<section
					css={css`
						grid-column: 2 / 3;
						grid-row: 1 / 2;
						display: flex;
						flex-direction: column;
					`}
				>
					<h3
						css={css`
							color: ${colors.orange};
						`}
					>
						{data.content.make} {data.content.model}
					</h3>
					<div
						css={css`
							display: flex;
							flex-direction: row;
							justify-content: space-between;
						`}
					>
						<p
							css={css`
								color: ${colors.orange};
							`}
						>
							See other {data.content.make} products
						</p>
						<p
							css={css`
								color: ${colors.orange};
								font-weight: bold;
							`}
						>
							{data.content.price} kr
						</p>
					</div>
					<p
						css={css`
							overflow: hidden;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
						`}
					>
						{data.content.description}
					</p>
					<div
						css={css`
							padding: 1rem;
							background-color: ${colors.orange};
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							align-items: center;
						`}
					>
						{buttons.map((e) => {
							return (
								<button
									key={e}
									css={css`
										margin: 0;
										color: ${colors.white};
										text-transform: uppercase;
										background-color: ${colors.orange};
										border: none;
										:hover {
											text-decoration: underline;
											cursor: pointer;
										}
									`}
								>
									{e}
								</button>
							);
						})}
					</div>
				</section>
				<div
					css={css`
						grid-column: 2 / 3;
						grid-row: 2 / 3;
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-template-rows: 1fr 1fr;
					`}
				>
					<h5
						css={css`
							grid-column: 1 / 3;
							grid-row: 1 / 2;
							color: ${colors.orange};
						`}
					>
						Finish
					</h5>
					<form
						css={css`
							grid-column: 1 / 2;
							grid-row: 2 / 3;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						`}
					>
						<label
							css={css`
								background-color: ${colors.grey};
								max-width: 50%;
								padding: 0.6rem;
							`}
						>
							<input type='radio' name='radio' defaultChecked />
							Black
						</label>
						<label
							css={css`
								background-color: ${colors.grey};
								max-width: 50%;
								padding: 0.6rem;
							`}
						>
							<input type='radio' name='radio' />
							Silver
						</label>
					</form>
					<form
						css={css`
							grid-column: 2 / 3;
							grid-row: 2 / 4;
							background-color: ${colors.grey};
							display: flex;
							justify-content: center;
							align-items: center;
						`}
					>
						<label
							htmlFor='qty'
							css={css`
								color: ${colors.orange};
							`}
						>
							Qty:
							<input type='number' />
						</label>
						<button
							disabled
							css={css`
								color: ${colors.white};
								background-color: ${colors.orange};
							`}
						>
							ADD TO CART
						</button>
					</form>
				</div>
				<table
					css={css`
						grid-column: 2 / 3;
						grid-row: 3 / 4;
					`}
				>
					<thead>
						<tr
							css={css`
								display: flex;
								justify-content: flex-start;
							`}
						>
							<th
								css={css`
									text-transform: uppercase;
									color: ${colors.orange};
								`}
							>
								Additional information
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Manufacturer
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								{data.content.make}
							</td>
						</tr>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Model
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								{data.content.model}
							</td>
						</tr>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Free warranty
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								3 years
							</td>
						</tr>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Delivery charge
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Free
							</td>
						</tr>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Delivery time
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								1 - 5 Working Days
							</td>
						</tr>
						<tr>
							<td
								css={css`
									width: 50%;
									text-transform: uppercase;
									background-color: ${colors.grey};
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								Card surcharges
							</td>
							<td
								css={css`
									padding: 0.5rem;
									border: solid 1px ${colors.lessdarkgrey};
								`}
							>
								No
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default Product;
