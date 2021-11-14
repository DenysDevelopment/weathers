import React from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../hooks/useDebounce';
import { setCurrentCity } from '../redux/actions/currentCity';
import { fetchSearchResult } from '../redux/actions/searchResult';
import { SearchModal } from './SearchModal';

export const Search: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const debouncedSearch = useDebounce(searchValue, 500);
	const [showSearchModal, setShowSearchModal] = React.useState(false);
	const dispatch = useDispatch();

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		if (!showSearchModal) {
			onHandleModal();
		}
	};

	const onHandleModal = () => {
		setShowSearchModal(true);
	};

	const onClickOutsideModal = (e: any) => {
		if (!e.target.closest('.search__input')) {
			setShowSearchModal(false);
		}
	};

	const onSelectCity = (city: string) => {
		dispatch(setCurrentCity(city));
	};

	React.useEffect(() => {
		document.body.addEventListener('click', onClickOutsideModal);
	}, []);

	React.useEffect(() => {
		if (searchValue) {
			dispatch(fetchSearchResult(searchValue));
		}
	}, [debouncedSearch]);

	return (
		<div className='info__search search'>
			<svg className='search__img' width='13' height='15' viewBox='0 0 13 15'>
				<path
					d='M9.23114 11.2794C8.27561 11.9603 7.10645 12.3607 5.84375 12.3607C2.61634 12.3607 0 9.74441 0 6.517C0 3.28958 2.61634 0.673248 5.84375 0.673248C9.07116 0.673248 11.6875 3.28958 11.6875 6.517C11.6875 8.13071 11.0334 9.59164 9.97591 10.6492L12.5 13.5C12.6891 13.6891 12.6845 13.9923 12.4947 14.1822C12.3035 14.3733 11.9994 14.3744 11.8125 14.1875L9.23114 11.2794ZM5.84375 11.6732C8.69147 11.6732 11 9.36472 11 6.517C11 3.66928 8.69147 1.36075 5.84375 1.36075C2.99603 1.36075 0.6875 3.66928 0.6875 6.517C0.6875 9.36472 2.99603 11.6732 5.84375 11.6732Z'
					fill='black'
				/>
				<path
					d='M9.23114 11.2794C8.27561 11.9603 7.10645 12.3607 5.84375 12.3607C2.61634 12.3607 0 9.74441 0 6.517C0 3.28958 2.61634 0.673248 5.84375 0.673248C9.07116 0.673248 11.6875 3.28958 11.6875 6.517C11.6875 8.13071 11.0334 9.59164 9.97591 10.6492L12.5 13.5C12.6891 13.6891 12.6845 13.9923 12.4947 14.1822C12.3035 14.3733 11.9994 14.3744 11.8125 14.1875L9.23114 11.2794ZM5.84375 11.6732C8.69147 11.6732 11 9.36472 11 6.517C11 3.66928 8.69147 1.36075 5.84375 1.36075C2.99603 1.36075 0.6875 3.66928 0.6875 6.517C0.6875 9.36472 2.99603 11.6732 5.84375 11.6732Z'
					stroke='black'
				/>
			</svg>
			<input
				type='search'
				className='search__input'
				placeholder='Search for places...'
				value={searchValue}
				onChange={onChangeInput}
				onClick={onHandleModal}
			/>
			{showSearchModal ? <SearchModal onClick={onSelectCity} /> : ''}
		</div>
	);
};
