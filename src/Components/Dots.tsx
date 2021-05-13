import { CSSProperties } from 'react';

interface dotsProps {
	dotArray: boolean[][];
}

const Dots = (props: dotsProps) => {

	const conatinerStyling: CSSProperties = {
		width: '50%',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-evenly'
	};

	const setStyling: CSSProperties = {
		display: 'flex',
		justifyContent: 'center'
	}

	const dotStyling: CSSProperties = {
		width: '5px',
		height: '5px',
		borderRadius: '50%',
		margin: '2px',
	};

	const completedStyle: CSSProperties = {
		backgroundColor: '#fff',
	};

	const incompleteStyle: CSSProperties = {
		backgroundColor: '#999',
	};

	return (
		<div style={conatinerStyling}>
			{props.dotArray.map((set: boolean[], setIdx: number) => (
				<div style={setStyling} key='setIdx'>
					{set.map((dot: boolean, dotIdx: number) => (
						<div
							style={{
								...(dot ? completedStyle : incompleteStyle),
								...dotStyling,
							}}
						></div>
					))}
				</div>
			))}
		</div>
	);
};

export default Dots;
