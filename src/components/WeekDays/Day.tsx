import React from 'react';

export const Day = ({ day, date }: any): React.ReactElement => {
	const getWeekDay = (date: string): number => new Date(date).getDay();
	const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const getCurrentDay =
		new Date().toLocaleDateString().replaceAll('.', '-') ===
		date.split('-').reverse().join('-');

	return (
		<div
			className={`week--day__item ${
				getCurrentDay ? 'week--day__item--active' : ''
			}`}>
			<p className='week--day__label'>{weekDays[getWeekDay(date)]}</p>
			<div className='week--day__img'>
				<img src={day.condition.icon} alt='day' />
			</div>
			<div className='week--day__deg'>
				{day.maxtemp_c.toFixed()}
				<span>{day.mintemp_c.toFixed()}</span>
			</div>
		</div>
	);
};
