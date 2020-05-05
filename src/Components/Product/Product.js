// eslint-disable-next-line
import React, { useContext } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';
import Breadcrumps from './Breadcrumps';
import banner from '../../assets/images/product/relocation_banner.png';

const Product = () => {
	//eslint-disable-next-line
	const colors = useContext(ColorContext);
	return (
		<main
			css={css`
				display: flex;
				flex-direction: column;
			`}
		>
			<Breadcrumps />
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
