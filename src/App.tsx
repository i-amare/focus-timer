import { useState, useEffect } from 'react';
import Timer from './Components/Timer';
import Dots from './Components/Dots';
import TimerControl from './Components/TimerControl';
import './Styles/App.css';

const App = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentTimeState(
				countdownState && currentTimeState > 0
					? currentTimeState - 1
					: currentTimeState
			);
		}, 1000);
		return () => clearTimeout(timer);
	});

	// eslint-disable-next-line
	const [startTimeState, setStartTimeState] = useState(1500);

	const [timerState, setTimerState] = useState('work session');

	const [currentTimeState, setCurrentTimeState] = useState(startTimeState);

	const [countdownState, setCountdownState] = useState(false);

	const toggleCountdown = () => {
		setCountdownState(!countdownState);
	};

	const switchTimerState = () => {
		switch (timerState) {
			case 'work session':
				setTimerState('short break');
				setStartTimeState(5 * 60);
				setCurrentTimeState(5 * 60);
				break;
			case 'short break':
				setTimerState('long break');
				setStartTimeState(15 * 60);
				setCurrentTimeState(15 * 60);
				break;
			case 'long break':
				setTimerState('work session');
				setStartTimeState(25 * 60);
				setCurrentTimeState(25 * 60);
				break;
			default:
				setTimerState('work session');
				setStartTimeState(25 * 60);
				setCurrentTimeState(25 * 60);
				break;
		}
		setCountdownState(false);
	};

	return (
		<div
			style={{
				height: '100vh',
			}}
			id='App'
		>
			<Timer
				startingTime={startTimeState}
				currentTime={currentTimeState}
				toggleCoundown={toggleCountdown}
			/>
			<Dots
				dotArray={[
					[true, true, true],
					[true, true, true],
					[true, false, false],
				]}
			/>
			<TimerControl
				switchTimerState={switchTimerState}
				currentTimerState={timerState}
			/>
		</div>
	);
};

export default App;
