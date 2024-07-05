import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 30px;
	background-image: url("/background-register.png");
	background-position: right;
	background-repeat: no-repeat;
	background-size: 600px;

	@media (min-width: 320px) and (max-width: 1280px) {
		background-image: none;
	}
`;

const FormText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	h1 {
		color: ${(props) => props.theme.colors.textWhite};
		font-weight: var(--font-weight-normal);
		font-size: 35px;
	}

	p {
		color: ${(props) => props.theme.colors.textWhite};
		font-weight: var(--font-weight-normal);
		font-size: 15px;
		width: 40%;
		text-align: center;
	}

	@media (min-width: 320px) and (max-width: 800px) {
		h1 {
			font-size: 25px;
		}

		p {
			font-size: 14px;
			text-align: justify;
			width: 90%;
		}
	}
`;

const FormItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const Input = styled.input`
	appearance: none;
	width: 350px;
	height: 60px;
	border: none;
	border-radius: 15px;
	font-size: 15px;
	font-weight: var(--font-weight-medium);
	color: ${(props) => props.theme.colors.textInputGray};
	outline: none;
	background-image: ${(props) => {
		switch (props.type) {
			case "email":
				return 'url("/input-email.svg")';
			case "password":
				return 'url("/input-password.svg")';
			case "tel":
				return 'url("/input-phone.svg")';
			case "text":
				return 'url("/input-text.svg")';
			default:
				return "none";
		}
	}};
	background-position: left 3% bottom 45%;
	background-repeat: no-repeat;
	background-size: 24px;
	padding-left: 45px;

	&:focus {
		outline: 2px solid ${(props) => props.theme.colors.buttonPeach};
	}

	@media (min-width: 320px) and (max-width: 415px) {
		width: 330px;
		height: 50px;
	}
`;

const ButtonSubmit = styled.button`
	border: none;
	cursor: pointer;
	width: 250px;
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
		width: 230px;
	}
`;

const ContainerButtonPreview = styled.div`
	display: flex;
	margin: 1rem;
`;

const ButtonPreview = styled.button`
	background-color: transparent;
	border: none;
	color: ${(props) => props.theme.colors.textWhite};
	font-weight: var(--font-weight-normal);
	font-size: 18px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export { ButtonPreview, ButtonSubmit, ContainerButtonPreview, Form, FormItems, FormText, Input };
