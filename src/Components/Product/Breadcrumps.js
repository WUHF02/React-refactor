// eslint-disable-next-line
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';

const Breadcrumps = ({ data }) => {
	const colors = useContext(ColorContext);
	return (
		<div
			css={css`
				width: 50%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin: 0.5rem 0 0.5rem 1rem;
			`}
		>
			<Link
				to='/shop'
				css={css`
					text-decoration: none;
					color: ${colors.orange};
					font-size: 0.8rem;
				`}
			>
				Home
			</Link>
			<i>/</i>
			<Link
				to='/shop'
				css={css`
					text-decoration: none;
					color: ${colors.black};
					font-size: 0.8rem;
				`}
			>
				{data.category}
			</Link>
			<i>/</i>
			<Link
				to='/shop'
				css={css`
					text-decoration: none;
					color: ${colors.black};
					font-size: 0.8rem;
				`}
			>
				{data.make}
			</Link>
		</div>
	);
};

export default Breadcrumps;
