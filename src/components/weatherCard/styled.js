import styled from "styled-components";

const colorSelect = (props) => props.isNight ? '#FFFCFF' : '#070707';
const bgColorSelect = (props) => props.isNight ? '3, 4, 95' : '169, 222, 249';

export const WeatherCardContainer = styled.div`
  background: linear-gradient(150deg,
		rgba(${bgColorSelect}, 1) 20%,
		rgba(${bgColorSelect}, 0.7) 40%,
		rgba(${bgColorSelect}, 0.7) 60%,
		rgba(${bgColorSelect}, 1) 80%);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  height: 500px;
	border-radius: 40px;
	box-shadow: 0 0 20px rgba(${bgColorSelect}, 0.7);
	padding: 40px;
	display: flex;
	flex-direction: column;

  @keyframes gradient {
	0% {
		background-position: 0% 0%;
	}
	
	100% {
		background-position: 100% 100%;
	}
}
`;