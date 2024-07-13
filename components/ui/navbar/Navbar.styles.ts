import styled from "styled-components";

interface NavbarProps {
    isOpen: boolean;
}

const Nav = styled.nav<NavbarProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${props => (props.isOpen ? "30%" : "3.5%")};
    color: ${props => props.theme.colors.textGray};
    background-color: ${props => props.theme.colors.backgroundGreen};
    padding: 1rem 0 1.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const NavLogo = styled.div<NavbarProps>`
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
        display: ${props => (props.isOpen ? "block" : "none")};
        font-size: 1.5rem;
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
        font-size: 1.2rem;
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
        cursor: pointer;

        a {
            text-decoration: none;
            font-size: 1rem;
            font-weight: var(--font-weight-normal);
            color: ${props => props.theme.colors.textGray};
            display: ${props => (props.isOpen ? "block" : "none")};

            &:hover {
                color: ${props => props.theme.colors.textWhite};
                text-decoration: underline;
            }
        }
    }

    li:last-child {
        margin-top: 30px;
    }
`;

export { Nav, NavButton, NavButtonLogo, NavList, NavLogo, NavUser, NavUserDetails };

