import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import { Info } from './components';
import { Today, Week } from './pages';
import { useDispatch } from 'react-redux';
import { fetchTodayInfo } from './redux/actions/currentDayInfo';
import { fetchWeekDays } from './redux/actions/weekDays';
import { useTypedSelector } from './hooks/useTypedSelector';
import { fetchGeolocation } from './redux/actions/currentCity';
const App: React.FC = () => {
	const dispatch = useDispatch();
	const { city } = useTypedSelector((state) => state.currentCity);

	React.useEffect(() => {
		dispatch(fetchGeolocation());
	}, []);

	React.useEffect(() => {
		dispatch(fetchWeekDays(city));
		dispatch(fetchTodayInfo(city));
	}, [city]);

	return (
		<div className='weather'>
			<div className='weather__aside'>
				<Info />
			</div>
			<div className='weather__body'>
				<Router>
					<div className='weather__header'>
						<nav className='weather__nav'>
							<NavLink to='/today'>Today</NavLink>
							<NavLink to='/week'>week</NavLink>
						</nav>
					</div>
					<Routes>
						<Route path='/today' element={<Today />} />
						<Route path='/week' element={<Week />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
