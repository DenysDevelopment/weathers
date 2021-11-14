import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const SearchModal = ({ onClick }: any) => {
	const { results } = useTypedSelector((state) => state.searchResult);

	return (
		<ul className='info__search-modal'>
			{results.length
				? results &&
				  results.map((result, idx) => (
						<li key={result.id}>
							<button onClick={() => onClick(result.name)}>
								{result.name}
							</button>
						</li>
				  ))
				: ''}
		</ul>
	);
};
