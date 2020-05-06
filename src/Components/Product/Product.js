// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';
import Breadcrumps from './Breadcrumps';
import banner from '../../assets/images/product/relocation_banner.png';

let params = new URLSearchParams(document.location.search);
let id = params.get('sku');
const url = `https://hifi-corner.herokuapp.com/api/v1/products/${id}`;

const Product = () => {
	//eslint-disable-next-line
	const colors = useContext(ColorContext);
	const [data, setData] = useState({ data: {}, isFetching: false });

	useEffect(() => {
		(async () => {
			try {
				setData({ data: {}, isFetching: true });
				const response = await fetch(url);
				const result = await response.json();
				setData({ data: result, isFetching: false });
			} catch (e) {
				console.log('Error: ', e);
			}
		})();
	}, []);

	return (
		<main
			css={css`
				display: flex;
				flex-direction: column;
			`}
		>
			<Breadcrumps data={data.data} />
			<img
				src={banner}
				alt='banner'
				css={css`
					max-width: 96%;
					align-self: center;
				`}
			/>
			<section
				css={css`
					padding: 2rem;
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr 1fr 1fr;
				`}
			>
				<img src='' alt='' />
			</section>
		</main>
	);
};

export default Product;
