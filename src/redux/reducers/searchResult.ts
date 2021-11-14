interface SearchResultState {
	results: Array<{ name: string; id: number }>;
	loadded: boolean;
}

const initialState: SearchResultState = {
	results: [],
	loadded: false,
};

interface searchResultAction {
	type: string;
	payload: any;
}

export const searchResult = (
	state = initialState,
	action: searchResultAction,
): SearchResultState => {
	switch (action.type) {
		case 'SET_SEARCH_RESULT':
			return {
				...state,
				results: action.payload,
				loadded: true,
			};
		default:
			return state;
	}
};
