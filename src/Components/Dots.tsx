import { CSSProperties } from 'react';

interface dotsProps {
	dotArray: boolean[][];
}

const Dots = (props: dotsProps) => {
	const conatinerStyling: CSSProperties = {
		margin: 'auto',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden',
	};

	const setStyling: CSSProperties = {
		display: 'flex',
		justifyContent: 'center',
		margin: '4px',
	};

	const dotStyling: CSSProperties = {
		width: '3px',
		height: '3px',
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
							key={dotIdx}
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
