import axios from 'axios';

export const setCurrentDayInfo = (payload: {}) => ({
	type: 'SET_CURRENT_DAY_INFO',
	payload,
});

export const fetchTodayInfo = (city: string) => async (dispatch: any) => {
	try {
		const response = await axios.get(
			`https://api.weatherapi.com/v1/current.json?q=${city}&key=604caeaf4e0c4b1aa39105110210811&lang=ru`,
		);

		await dispatch(setCurrentDayInfo(response.data));
	} catch (error) {
		console.log(error);
	}
};
