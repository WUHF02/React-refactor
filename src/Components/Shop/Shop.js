// eslint-disable-next-line
import React, { useEffect, useState, useCallback } from 'react';
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

// Organizing data in ascending order
function organize(data) {
	return data.sort((a, b) =>
		a.price > b.price ? 1 : b.price > a.price ? -1 : 0
	);
}

const Shop = () => {
	const [data, setData] = useState([]);
	const [list, setList] = useState({ categories: [], manufacturers: [] });
	const [current, setCurrent] = useState({ category: '', manufacturer: '' });
	const [showItems, setShowItems] = useState([]);
	const [organized, setOrganized] = useState();
	function set(category, manufacturer) {
		return setCurrent({ category, manufacturer });
	}
	const ascending = useCallback(() => {
		return organized === true ? setOrganized(false) : setOrganized(true);
	});

	// Fetching data
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
				console.log('Error: ', e);
			}
		})();
	}, []);

	// Updating products to a specific category
	useEffect(() => {
		if (current.category) {
			return setShowItems(
				data.filter((e) => e.category === current.category)
			);
		} else if (current.manufacturer) {
			return setShowItems(
				data.filter((e) => e.make === current.manufacturer)
			);
		} else {
			return setShowItems(data);
		}
	}, [current, data]);

	// Organizing data
	useEffect(() => {
		if (organized === true) {
			console.log(organized);
			setData(organize(data));
		} else if (organized === false) {
			console.log(organized);
			setData(organize(data).reverse());
		} else {
			setData(data);
		}
	}, [organized, data, ascending]);

	return (
		<main>
			<Breadcrumps current={current} onClick={set} />
			<div
				className='main__grid'
				css={css`
					display: grid;
					grid-template-columns: 0.7fr 2fr 0.7fr;
					grid-gap: 1.5rem;
					margin: 1%;
				`}
			>
				<Left list={list} onClick={set} />
				<Center
					data={showItems}
					currentCategory={current.category}
					ascending={ascending}
				/>
				<Right list={list} onClick={set} />
			</div>
		</main>
	);
};

export default Shop;
