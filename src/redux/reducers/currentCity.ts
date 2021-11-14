const initialState = {
	city: '',
	loadded: false,
};

interface CurrentInfoAction {
	type: string;
	payload: any;
}

export const currentCity = (
	state = initialState,
	action: CurrentInfoAction,
) => {
	switch (action.type) {
		case 'SET_CURRENT_CITY':
			return {
				...state,
				city: action.payload,
				loadded: true,
			};
		default:
			return state;
	}
};
