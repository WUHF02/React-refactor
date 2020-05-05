// eslint-disable-next-line
import React, { useContext } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColorContext } from '../Utility';

const Right = ({ list }) => {
	const colors = useContext(ColorContext);
	return (
		<div
			className='grid__right'
			css={css`
				grid-column: 3 / 4;
			`}
		>
			<h3
				css={css`
					margin: 0;
					text-transform: uppercase;
					color: ${colors.orange};
				`}
			>
				Manufacturer
			</h3>
			<ul className='right__manufacturerContainer'>
				{list.manufacturers.map((e) => (
					<li
						key={e}
						css={css`
							text-transform: uppercase;
							list-style: none;
							cursor: pointer;
							:hover {
								text-decoration: underline;
							}
						`}
					>
						{e}
					</li>
				))}
			</ul>
			<p
				css={css`
					color: ${colors.orange};
					font-weight: bold;
				`}
			>
				View All
			</p>
		</div>
	);
};

export default Right;
