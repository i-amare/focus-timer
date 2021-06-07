import { CSSProperties } from 'react';
import { ReactComponent as Icon } from '../Assets/switch-arrows.svg';
interface timerControlProps {
	switchTimerMode: () => void;
	currentTimerState: String;
}

const TimerControl = (props: timerControlProps) => {
	const containerStyling: CSSProperties = {
		display: 'flex',
		margin: 'auto',
		alignContent: 'center',
		justifyContent: 'center',
	};

	const iconStyling: CSSProperties = {
		width: '30px',
	};


	return (
		<div
			style={containerStyling}
			className='timer-control-container'
			onClick={props.switchTimerMode}
		>
			<Icon style={iconStyling} />
			<p>{props.currentTimerState.toUpperCase()}</p>
		</div>
	);
};

export default TimerControl;
