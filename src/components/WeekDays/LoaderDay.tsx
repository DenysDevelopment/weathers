import React from 'react';
import ContentLoader from 'react-content-loader';

export const LoaderDay = () => (
	<ContentLoader
		speed={2}
		width={100}
		height={148}
		viewBox='0 0 100 148'
		backgroundColor='#dedede'
		foregroundColor='#ecebeb'
		style={{ border: '1px solid #ecebeb', borderRadius: `${20}px` }}>
		<rect x='31' y='9' width='38' height='10' />
		<rect x='35' y='120' width='15' height='10' />
		<rect x='55' y='120' width='15' height='10' />
		<circle cx='49.5' cy='61.5' r='30.5' />
	</ContentLoader>
);
