import styled from "styled-components";

export const ContainerSelect = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	button {
		border: none;
		background-color: transparent;
		width: 40%;
		color: ${(props) => props.theme.colors.textWhite};
		cursor: pointer;
		font-weight: var(--font-weight-semibold);
	}

	button:hover {
		text-decoration: underline;
	}
`;
export const Select = styled.select`
	appearance: none;
	width: 350px;
	height: 60px;
	border: none;
	border-radius: 15px;
	font-size: 15px;
	font-weight: var(--font-weight-medium);
	color: ${(props) => props.theme.colors.textInputGray};
	outline: none;
	padding: 0px 10px 0px 10px;
	background-image: url("/arrow-up-select.svg");
	background-position: right 2% bottom 45%;
	background-repeat: no-repeat;
	background-size: 30px;

	&:focus {
		background-image: url("/arrow-down-select.svg");
	}
`;
