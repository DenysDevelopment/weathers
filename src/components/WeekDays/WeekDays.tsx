import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Day } from './Day';
import { LoaderDay } from './LoaderDay';

export const WeekDays = (): React.ReactElement => {
	const { days, loadded } = useTypedSelector((state) => state.weekDays);

	return (
		<div className='week--day'>
			{loadded
				? days.map((day, idx) => <Day key={`${day}_${idx}`} {...day} />)
				: new Array(3)
						.fill(0)
						.map((_, idx) => <LoaderDay key={`${idx}_${--idx}`} />)}
		</div>
	);
};
