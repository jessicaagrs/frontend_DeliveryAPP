import styled from "styled-components";

export const ContainerLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 20px;
`;

export const WelcomeBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	h1 {
		font-size: 32px;
		font-weight: var(--font-weight-bold);
		color: ${(props) => props.theme.colors.textGray};
	}

	p {
		font-size: 18px;
		text-align: center;
		font-weight: var(--font-weight-regular);
		color: ${(props) => props.theme.colors.textGray};
	}

	@media (min-width: 320px) and (max-width: 480px) {
		img {
			width: 90%;
			height: 350px;
		}
	}
`;
