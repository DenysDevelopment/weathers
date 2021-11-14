import axios from 'axios';

export const searchResult = (payload: object[]) => ({
	type: 'SET_SEARCH_RESULT',
	payload,
});

export const fetchSearchResult = (city: string) => async (dispatch: any) => {
	try {
		const response = await axios.get(
			`https://api.weatherapi.com/v1/search.json?q=${city}&key=604caeaf4e0c4b1aa39105110210811&lang=ru`,
		);

		dispatch(searchResult(response.data));
	} catch (error) {
		console.log(error);
	}
};
