import {
	WeekDaysAction,
	WeekDaysState,
	WeekDaysTypes,
} from '../../types/weekDays';

const initialState: WeekDaysState = {
	days: [],
	loadded: false,
};

export const weekDays = (
	state = initialState,
	action: WeekDaysAction,
): WeekDaysState => {
	switch (action.type) {
		case WeekDaysTypes.SET_DAYS_WEEK:
			return {
				...state,
				days: action.payload,
				loadded: true,
			};
		default:
			return state;
	}
};
