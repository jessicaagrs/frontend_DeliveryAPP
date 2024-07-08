import { FadeInLeft } from "@/components/animations/Animations";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;

const SidebarBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 20%;
	background-color: ${(props) => props.theme.colors.backgroundGray};
	color: ${(props) => props.theme.colors.textGray};
	padding: 15px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	animation: ${FadeInLeft} 0.5s ease 0s 1 normal none;
`;

const SidebarItems = styled.div`
	display: flex;
	margin: 40px 0 0 40px;
	gap: 10px;
`;

const SidebarIconItem = styled.div`
	width: 44px;
	height: 44px;
	background-image: url("/user.svg");
	background-repeat: no-repeat;
`;

const SidebarIdentificationItem = styled.div`
	display: flex;
	flex-direction: column;

	p {
		font-size: 16px;
		font-weight: var(--font-weight-semibold);
	}

	span {
		font-size: 14px;
		font-weight: var(--font-weight-regular);
	}
`;

const SidebarList = styled.ul`
	margin: 40px 0 0 40px;
	display: flex;
	flex-direction: column;
	gap: 25px;

	li {
		list-style: none;
		display: flex;
		gap: 10px;
		align-items: center;

		a {
			text-decoration: none;
			color: ${(props) => props.theme.colors.iconSidebar};
		}

		a:hover {
			color: ${(props) => props.theme.colors.backgroundGreen};
		}
	}

	li:last-child {
		margin-top: 50px;
	}
`;

export { Container, SidebarBox, SidebarIconItem, SidebarIdentificationItem, SidebarItems, SidebarList };
