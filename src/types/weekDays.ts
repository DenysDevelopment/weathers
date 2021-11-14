export interface WeekDaysState {
	days: object[];
	loadded: boolean;
}

export enum WeekDaysTypes {
	FETCH_DAYS_WEEK = 'FETCH_DAYS_WEEK',
	SET_DAYS_WEEK = 'SET_DAYS_WEEK',
	ERROR_DAYS_WEEK = 'ERROR_DAYS_WEEK',
}

interface WeekDaysActionFetch {
	type: WeekDaysTypes.FETCH_DAYS_WEEK;
}
interface WeekDaysActionError {
	type: WeekDaysTypes.ERROR_DAYS_WEEK;
}
interface WeekDaysActionSet {
	type: WeekDaysTypes.SET_DAYS_WEEK;
	payload: object[];
}

export type WeekDaysAction =
	| WeekDaysActionFetch
	| WeekDaysActionError
	| WeekDaysActionSet;
