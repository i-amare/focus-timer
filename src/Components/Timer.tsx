import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface timerProps {
	currentTime: number;
	startingTime: number;
	toggleCoundown: () => void;
}

const Timer = (props: timerProps) => {
	const calculatePercentage = () => {
		let percentage = (props.currentTime / props.startingTime) * 100;
		return percentage;
	};

	const formatTime = () => {
		let mins = `${Math.floor(props.currentTime / 60)}`;
		let secs = `${props.currentTime % 60}`;
		if (parseFloat(secs) < 10) {
			secs = `0${secs}`;
		}
		if (parseFloat(mins) < 10) {
			mins = `0${mins}`;
		}
		return [mins, secs];
	};

	let formattedTime = formatTime();
	let percentage = calculatePercentage();

	return (
		<div className='timer-container' onClick={props.toggleCoundown}>
			<CircularProgressbar
				value={percentage}
				text={`${formattedTime[0]} : ${formattedTime[1]}`}
				background
				backgroundPadding={3}
				strokeWidth={3.5}
				styles={buildStyles({
					backgroundColor: 'transparent',
					textColor: '#fff',
					pathColor: '#fff',
					trailColor: 'transparent',
				})}
			/>
		</div>
	);
};

export default Timer;
