import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoadingInfo = () => (
	<ContentLoader
		speed={2}
		width={100 + '%'}
		height={95 + '%'}
		viewBox='0 0 268 756'
		backgroundColor='#dedede'
		foregroundColor='#ecebeb'>
		<rect x='35' y='120' width='200' height='200' rx='20' />
		<rect y='360' width='51' height='71' rx='20' />
		<rect x='53' y='353' width='13' height='13' rx='6.5' strokeWidth='2' />
		<rect y='500' width='258' height='1' />
		<rect y='460' width='84' height='22' rx='11' />
		<rect x='94' y='460' width='50' height='22' rx='11' />
		<path d='M0 584H258V756H20C8.9543 756 0 747.046 0 736V584Z' />
		<rect width='268' height='30' />
	</ContentLoader>
);
