import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const colors = {
	red: '#FF2626',
};

const Header = () => {
	return (
		<header>
			<nav>
				<ul
					css={css`
						display: flex;
						flex-direction: row;
						justify-content: space-around;
					`}
				>
					<li
						css={css`
							color: #ff2626;
							list-style: none;
						`}
					>
						Home
					</li>
					<li
						css={css`
							color: ${colors.red};
							list-style: none;
						`}
					>
						Shop
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
