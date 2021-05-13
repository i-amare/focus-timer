interface timerControlProps {
	switchTimerState: () => void;
	currentTimerState: String;
}

const TimerControl = (props: timerControlProps) => {
	return (
		<div className='timer-control-container' onClick={props.switchTimerState}>
			<p>{`< ${props.currentTimerState.toUpperCase()} >`}</p>
		</div>
	);
};

export default TimerControl;
