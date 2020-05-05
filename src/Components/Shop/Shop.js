// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import Breadcrumps from './Breadcrumps';

// Fetching URL
const url = `https://hifi-corner.herokuapp.com/api/v1/products`;

//  Sorting to only one kind of each item
function getUnique(arr) {
	return arr.filter((e, i) => arr.indexOf(e) >= i);
}

const Shop = () => {
	const [data, setData] = useState([]);
	const [list, setList] = useState({ categories: [], manufacturers: [] });
	// eslint-disable-next-line
	const [currentCategory, setCurrentCategory] = useState('');

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setData(result);
				const categories = getUnique(
					result.map((product) => product.category)
				);
				const manufacturers = getUnique(
					result.map((product) => product.make)
				);
				setList({
					categories,
					manufacturers,
				});
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return (
		<main css={css``}>
			<Breadcrumps />
			<div
				className='main__grid'
				css={css`
					display: grid;
					grid-template-columns: 0.7fr 2fr 0.7fr;
					grid-gap: 1.5rem;
					margin: 1%;
				`}
			>
				<Left list={list} />
				<Center data={data} />
				<Right list={list} />
			</div>
		</main>
	);
};

export default Shop;
