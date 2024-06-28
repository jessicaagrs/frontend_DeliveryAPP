import styled from "styled-components";
import { RotateRight, RotateLeft } from "../../animations/Animations";

export const ContainerLoading = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
`;

export const BoxItemsLoading = styled.div`
	position: absolute;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 600px;
	display: flex;
	justify-content: center;
	gap: 20px;

	div {
		width: 20px;
		height: 20px;
		background-color: ${(props) => props.theme.colors.backgroundGreen};
		border-radius: 50%;
	}

	div:nth-child(1),
	div:nth-child(3) {
		animation: ${RotateLeft} 1.2s linear 0s infinite normal none;
	}

	div:nth-child(2) {
		animation: ${RotateRight} 1.2s linear 0s infinite normal none;
		margin-right: 2rem;
	}
`;
