import axios from 'axios';

export const setCurrentCity = (payload: string) => ({
	type: 'SET_CURRENT_CITY',
	payload,
});

export const fetchGeolocation = () => (dispatch: any) => {
	navigator.geolocation.getCurrentPosition(
		async (position) => {
			const response = await axios.get(
				`https://api.weatherapi.com/v1/current.json?key=604caeaf4e0c4b1aa39105110210811&q=${position.coords.latitude},${position.coords.longitude}`,
			);

			console.log(response);

			dispatch(setCurrentCity(response.data.location.name));
		},
		function (error) {
			console.log(error);
		},
	);
};
