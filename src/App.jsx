import styled from "styled-components";

const StyledSlider = styled.div`
	position: relative;
	border-radius: 3px;
	background: #dddddd;
	height: 15px;
`;

const StyledThumb = styled.div`
	width: 10px;
	height: 25px;
	border-radius: 3px;
	position: relative;
	top: -5px;
	opacity: 0.5;
	background: #823eb7;
	cursor: pointer;
`;

const Slider = () => {
	return (
		<>
			<StyledSlider>
				<StyledThumb />
			</StyledSlider>
		</>
	);
};

function App() {
	return (
		<>
			<Slider />
		</>
	);
}

export default App;
