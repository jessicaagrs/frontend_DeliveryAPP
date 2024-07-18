import { SlideInLeft } from "@/components/animations/Animations";
import styled from "styled-components";

interface NavbarProps {
    isOpen: boolean;
}

const Nav = styled.nav<NavbarProps>`
    position: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${props => (props.isOpen ? "18%" : "3.5%")};
    color: ${props => props.theme.colors.textWhite};
    background-color: ${props => props.theme.colors.backgroundSidebar};
    padding: 1rem 0 1.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: ${props => (props.isOpen ? SlideInLeft : "none")} 1s ease 0s 1 normal none;
`;

const NavLogo = styled.div<NavbarProps>`
    display: flex;
    align-items: center;
    gap: 45px;

    h1 {
        display: ${props => (props.isOpen ? "block" : "none")};
        font-size: 1.3rem;
        font-weight: var(--font-weight-semibold);
    }
`;

const NavButton = styled.button<NavbarProps>`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: ${props => (props.isOpen ? "url('/close-navbar.svg')" : "url('/open-navbar.svg')")};
    background-repeat: no-repeat;
    background-size: 34px;
    width: 34px;
    height: 34px;
    cursor: pointer;
`;

const NavButtonLogo = styled(NavButton)<NavbarProps>`
    background-image: url("/logo-navbar.svg");
    display: ${props => (props.isOpen ? "block" : "none")};
`;

const NavUser = styled.div`
    display: flex;
    gap: 20px;
`;

const NavUserDetails = styled.div<NavbarProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 1rem;
        font-weight: var(--font-weight-semibold);
        display: ${props => (props.isOpen ? "block" : "none")};
    }

    p {
        font-size: 1rem;
        font-weight: var(--font-weight-regular);
        display: ${props => (props.isOpen ? "block" : "none")};
    }
`;

const NavList = styled.ul<NavbarProps>`
    display: flex;
    flex-direction: column;
    gap: 40px;

    li {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            text-decoration: none;
            font-size: 1rem;
            font-weight: var(--font-weight-normal);
            color: ${props => props.theme.colors.textWhite};
            display: ${props => (props.isOpen ? "block" : "none")};

            &:hover {
                color: ${props => props.theme.colors.buttonPeach};
                text-decoration: underline;
            }
        }
    }

    li:last-child {
        margin-top: 30px;
    }
`;

export { Nav, NavButton, NavButtonLogo, NavList, NavLogo, NavUser, NavUserDetails };

