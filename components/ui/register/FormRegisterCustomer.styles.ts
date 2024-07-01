import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    height: 100vh;
    gap: 30px;
    background-image: url("/background-form-customer.png");
    background-position: top;
    background-size: auto;

    h1 {
        color: ${(props) => props.theme.colors.textWhite};
        font-weight: var(--font-weight-normal);
        font-size: 35px;
    }
`;

export const FormItems = styled.div`
	display: flex;
	flex-direction: column;
    gap: 20px;
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
	background-image: ${(props) => {
		switch (props.type) {
			case "email":
				return 'url("/input-email.png")';
			case "password":
				return 'url("/input-password.png")';
			case "tel":
				return 'url("/input-phone.png")';
			case "text":
				return 'url("/input-text.png")';
			default:
				return 'none';
		}
	}};
	background-position: left 3% bottom 45%;
	background-repeat: no-repeat;
	background-size: 24px;
	padding-left: 45px;

	&:focus {
		outline: 2px solid ${(props) => props.theme.colors.buttonPeach};
	}
`;

export const ButtonSubmit = styled.button`
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
		width: 320px;
	}
`;
