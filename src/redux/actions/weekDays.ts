import { WeekDaysAction } from './../../types/weekDays';
import axios from 'axios';
import { Dispatch } from 'react';
import { WeekDaysTypes } from '../../types/weekDays';

export const setWeekDays = (payload: any) => ({
	type: WeekDaysTypes.SET_DAYS_WEEK,
	payload,
});

export const fetchWeekDays =
	(city: string) => async (dispatch: Dispatch<WeekDaysAction>) => {
		try {
			const response = await axios.get(
				`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=604caeaf4e0c4b1aa39105110210811&lang=ru&days=10`,
			);

			dispatch(setWeekDays(response.data.forecast.forecastday));
		} catch (error) {}
	};
