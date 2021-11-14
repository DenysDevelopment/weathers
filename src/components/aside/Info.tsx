import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Search } from '..';
import { LoadingInfo } from './LoadingInfo';

interface InfoProps {
	className?: string;
}

export const Info = ({ className }: InfoProps) => {
	const { dayInfo, loadded } = useTypedSelector((state): any => state.dayInfo);
	const getWeekDay = (date: string): number => new Date(date).getDay();
	const weekDays: string[] = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const [dateMinute, setDateMinute] = React.useState(new Date().getMinutes());

	setInterval(() => setDateMinute(new Date().getMinutes()), 1000);

	return (
		<>
			{loadded ? (
				<div className={`info ${className}`}>
					<Search />
					<div className='info__img'>
						<img
							src={dayInfo?.current?.condition?.icon.replace(
								'64x64',
								'128x128',
							)}
							alt={dayInfo?.current?.condition?.text}
						/>
					</div>
					<div className='info__deg'>
						{dayInfo?.current?.temp_c.toFixed()}
						&#176;
					</div>
					<div className='info__today'>
						<span>{weekDays[getWeekDay(dayInfo?.location?.localtime)]},</span>
						<span>
							{new Date().getHours()}:
							{dateMinute < 9 ? `0${dateMinute}` : dateMinute}
						</span>
					</div>
					<hr className='info__hr' />
					<div className='info__city-img'>
						<p>{dayInfo?.location?.name}</p>
						<img
							src='https://images.unsplash.com/photo-1636573918182-0bfebf18b0cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
							alt=''
						/>
					</div>
				</div>
			) : (
				<LoadingInfo />
			)}
		</>
	);
};
