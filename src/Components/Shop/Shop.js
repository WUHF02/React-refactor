// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import Breadcrumps from './Breadcrumps';
// eslint-disable-next-line
// import example from '../assets/images/shop/creek_classic_cd.jpg';

const colors = {
	orange: '#A39161',
	black: '#000',
	white: '#FFF',
	grey: '#E1E1E1',
};

// Fetching URL
const url = `https://hifi-corner.herokuapp.com/api/v1/products`;

//  Sorting to only one kind of each item
function getUnique(arr) {
	return arr.filter((e, i) => arr.indexOf(e) >= i);
}

//  Search for category, brands & price in URL
let params = new URLSearchParams(window.location.search);
let productCategory = params.get('product_category');

const Shop = () => {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	const [manufacturers, setManufacturer] = useState([]);
	// eslint-disable-next-line
	const [currentCategory, setCurrentCategory] = useState('');

	/* 	function setCategory() {
		return setCurrentCategory(params.get('product_category'));
	} */

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
				setData(result);
				const categories = result.map((product) => product.category);
				setCategories(getUnique(categories));
				const manufacturer = result.map((product) => product.make);
				setManufacturer(getUnique(manufacturer));
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	if (productCategory) {
		console.log(productCategory);
		/* const product = data.filter((e) => {
			return e.category === productCategory;
		}); */
	}

	return (
		<main css={css``}>
			<Breadcrumps colors={colors} productCategory={productCategory} />
			<div
				className='main__grid'
				css={css`
					display: grid;
					grid-template-columns: 0.7fr 2fr 0.7fr;
					grid-gap: 1.5rem;
					margin: 1%;
				`}
			>
				<Left colors={colors} categories={categories} />
				<Center
					colors={colors}
					data={data}
					productCategory={productCategory}
				/>
				<Right colors={colors} manufacturers={manufacturers} />
			</div>
		</main>
	);
};

export default Shop;
