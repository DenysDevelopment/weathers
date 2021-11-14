const initialState = {
	dayInfo: {},
	loadded: false,
};

const SET_CURRENT_DAY_INFO = 'SET_CURRENT_DAY_INFO';

interface DayInfoAction {
	type: 'SET_CURRENT_DAY_INFO';
	payload: {};
}

export const currentInfoReducer = (
	state = initialState,
	action: DayInfoAction,
) => {
	switch (action.type) {
		case SET_CURRENT_DAY_INFO:
			return {
				...state,
				dayInfo: action.payload,
				loadded: true,
			};
		default:
			return state;
	}
};
