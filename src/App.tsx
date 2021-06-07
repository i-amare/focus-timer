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
			if (currentTimeState === 0) {
				onTimeout();
			}
		}, 1000);
		return () => clearTimeout(timer);
	});

	const [startTimeState, setStartTimeState] = useState(25 * 60);

	const [timerMode, setTimerMode] = useState('work session');

	const [currentTimeState, setCurrentTimeState] = useState(startTimeState);

	const [setSize] = useState(3);

	const [sessionGoal] = useState(6);

	const [countdownState, setCountdownState] = useState(false);

	const [sessionCounter, setCounterState] = useState(() => {
		let set = (() => {
			let temp = [];
			for (let i = 0; i < setSize; i++) {
				temp.push(false);
			}
			return temp;
		})();
		let numOfSets = Math.ceil(sessionGoal / setSize);
		let temp: boolean[][] = [];
		for (let i = 0; i < numOfSets; i++) {
			temp.push([...set]);
		}
		return temp;
	});

	const toggleCountdown = () => {
		setCountdownState(!countdownState);
	};

	// Triggered when timer hits zero
	const onTimeout = () => {
		if (timerMode === 'work session') {
			incrementSessionCounter();
		}
		switchTimerMode(true);
	};

	const incrementSessionCounter = () => {
		let tempCounter = [...sessionCounter];

		// Finds the index of the nearest unfilled dot and fills it
		for (let i = 0; i < sessionCounter.length; i++) {
			let dotArray = sessionCounter[i];
			for (let j = 0; j < dotArray.length; j++) {
				let dot = dotArray[j];
				if (!dot) {
					tempCounter[i][j] = true;
					i = sessionCounter.length;
					break;
				}
			}
		}

		// Checks if the sessionCounter is full
		if (
			sessionCounter[sessionCounter.length - 1][sessionCounter[0].length - 1]
		) {
			// Adds another array of dots
			let appendedDotArray = [];
			for (let i = 0; i < sessionCounter[0].length; i++) {
				appendedDotArray.push(false);
			}
			tempCounter.push(appendedDotArray);
		}

		setCounterState(tempCounter);
	};

	// Switches the current mode of the timer
	const switchTimerMode = (skipLongBreaks: boolean) => {
		if (skipLongBreaks) {
			switch (timerMode) {
				case 'work session':
					setTimerMode('short break');
					setStartTimeState(5 * 60);
					setCurrentTimeState(5 * 60);
					break;
				case 'short break':
					setTimerMode('work session');
					setStartTimeState(25 * 60);
					setCurrentTimeState(25 * 60);
					break;
				default:
					setTimerMode('work session');
					setStartTimeState(25 * 60);
					setCurrentTimeState(25 * 60);
					break;
			}
		} else {
			switch (timerMode) {
				case 'work session':
					setTimerMode('short break');
					setStartTimeState(5 * 60);
					setCurrentTimeState(5 * 60);
					break;
				case 'short break':
					setTimerMode('long break');
					setStartTimeState(15 * 60);
					setCurrentTimeState(15 * 60);
					break;
				case 'long break':
					setTimerMode('work session');
					setStartTimeState(25 * 60);
					setCurrentTimeState(25 * 60);
					break;
				default:
					setTimerMode('work session');
					setStartTimeState(25 * 60);
					setCurrentTimeState(25 * 60);
					break;
			}
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
			<Dots dotArray={sessionCounter} />
			<TimerControl
				switchTimerMode={() => switchTimerMode(false)}
				currentTimerState={timerMode}
			/>
		</div>
	);
};

export default App;
