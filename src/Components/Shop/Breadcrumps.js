// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';

const Breadcrumps = ({ colors }) => {
	return (
		<div
			className='main__breadCrumps'
			css={css`
				padding: 0.7rem;
				margin: 0 70% 0 3%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			`}
		>
			<Link
				to='/shop'
				css={css`
					color: ${colors.orange};
					text-decoration: none;
				`}
			>
				Home
			</Link>
			<i>/</i>
			<p>Category</p>
		</div>
	);
};

export default Breadcrumps;
