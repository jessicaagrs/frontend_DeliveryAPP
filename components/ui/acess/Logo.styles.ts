import styled from "styled-components";
import { TitleAnimation } from "../../animations/Animations";

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 35px;
	height: 100vh;
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;

	img {
		@media (min-width: 320px) and (max-width: 480px) {
			width: 80%;
			height: 250px;
		}
	}
`;

export const LogoTitle = styled.h1`
	font-weight: var(--font-weight-bold);
	font-size: 42px;
	color: ${(props) => props.theme.colors.textWhite};
	animation: ${TitleAnimation} 2s ease 0s 1 normal none;
`;

export const LogoPhrase = styled.p`
	font-weight: var(--font-weight-regular);
	font-size: 18px;
	text-align: center;
	color: ${(props) => props.theme.colors.textWhite};
`;
