import styled from "styled-components";

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1.5rem;
	
`;

const NavButtonMenu = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	width: 40px;
	height: 40px;
	background-image: url("/menu.svg");
	background-repeat: no-repeat;
`;

const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const ButtonCartContainer = styled.div`
	display: flex;
	align-items: center;
`;

const NavButtonCart = styled(NavButtonMenu)`
	background-image: url("/cart.svg");
`;

export { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems };
