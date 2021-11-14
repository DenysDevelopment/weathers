import { currentInfoReducer as dayInfo } from './currentDay';
import { combineReducers } from 'redux';
import { weekDays } from './weekDays';
import { searchResult } from './searchResult';
import { currentCity } from './currentCity';

export const rootReducer = combineReducers({
	weekDays,
	dayInfo,
	searchResult,
	currentCity,
});

export type RootState = ReturnType<typeof rootReducer>;
