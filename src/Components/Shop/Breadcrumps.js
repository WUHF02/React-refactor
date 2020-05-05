// eslint-disable-next-line
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';

const Breadcrumps = ({ currentCategory, onClick }) => {
	const colors = useContext(ColorContext);
	return (
		<div
			className='main__breadCrumps'
			css={css`
				padding: 0.7rem;
				margin: 0 60% 0 3%;
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
				onClick={() => onClick('')}
			>
				Home
			</Link>
			<i>/</i>
			<p
				css={css`
					margin: 0;
				`}
			>
				{currentCategory ? currentCategory : ''}
			</p>
		</div>
	);
};

export default Breadcrumps;
