import styled from "styled-components";

export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	@media (min-width: 320px) and (max-width: 410px) {
		input {
			width: 330px;
		}
	}
`;

export const Input = styled.input`
	appearance: none;
	width: 350px;
	height: 60px;
	border: none;
	border-radius: 15px;
	font-size: 15px;
	font-weight: var(--font-weight-medium);
	color: ${(props) => props.theme.colors.textInputGray};
	outline: none;
	background-image: ${(props) => (props.type === "email" ? 'url("/login-email.svg")' : 'url("/login-password.svg")')};
	background-position: left 3% bottom 45%;
	background-repeat: no-repeat;
	background-size: 24px;
	padding-left: 45px;

	&:focus {
		outline: 2px solid ${(props) => props.theme.colors.buttonPeach};
	}
`;

export const BoxOptions = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

interface ButtonOptionsProps {
	dark?: boolean;
}

export const ButtonOptions = styled.button<ButtonOptionsProps>`
	appearance: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	font-size: 15px;
	font-weight: var(--font-weight-medium);
	color: ${(props) => (props.dark ? props.theme.colors.textLink : props.theme.colors.textWhite)};

	&:hover {
		text-decoration: underline;
	}
`;

export const BoxPassword= styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: relative;
`;

export const ButtonEyePassword = styled.button`
	appearance: none;
	background-color: transparent;
	border: none;
	position: absolute;
	cursor: pointer;
	background-image: url("/password-eye-close.svg");
	background-repeat: no-repeat;
	width: 24px;
	height: 24px;
	z-index: 1;
	bottom: 40%;
	right: 10%;
	transform: translateY(50%);

	@media (min-width: 320px) and (max-width: 480px) {
		right: 8%;
	}
`;

export const ButtonLogin = styled.button`
	border: none;
	cursor: pointer;
	width: 350px;
	height: 60px;
	border-radius: 30px;
	color: ${(props) => props.theme.colors.textWhite};
	background-color: ${(props) => props.theme.colors.buttonPeach};
	font-weight: var(--font-weight-regular);
	font-size: 20px;

	&:hover {
		color: ${(props) => props.theme.colors.buttonPeach};
		background-color: ${(props) => props.theme.colors.textWhite};
	}

	@media (min-width: 320px) and (max-width: 410px) {
		width: 320px;
	}
`;
