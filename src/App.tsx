import { useState, useEffect } from 'react';
import Timer from './Components/Timer';
import Dots from './Components/Dots';
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

	const [currentTimeState, setCurrentTimeState] = useState(startTimeState);

	const [countdownState, setCountdownState] = useState(false);

	const toggleCountdown = () => {
		setCountdownState(!countdownState);
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
			<Dots dotArray={[
				[true, true, true],
				[true, true, true],
				[true, false, false],
			]} />
		</div>
	);
}

export default App;
