import { SlideInLeft } from "@/components/animations/Animations";
import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18%;
    color: ${props => props.theme.colors.textWhite};
    background-color: ${props => props.theme.colors.backgroundSidebar};
    padding: 1rem 1rem 1.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: ${SlideInLeft} 1s ease 0s 1 normal none;
    z-index: 1;

    @media (min-width: 320px) and (max-width: 600px) {
        width: 75%;
        background-color: ${props => props.theme.colors.backgroundSidebar};
        box-shadow: none;
    }

    @media (min-width: 601px) and (max-width: 1280px) {
        width: 50%;
        background-color: ${props => props.theme.colors.backgroundSidebar};
        box-shadow: none;
    }
`;

const NavLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 45px;

    h1 {
        font-size: 1.3rem;
        font-weight: var(--font-weight-semibold);
    }

    @media (min-width: 320px) and (max-width: 600px) {
        font-size: 1rem;
        gap: 30px;
    }
`;

const NavButton = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: url("/close-navbar.svg");
    background-repeat: no-repeat;
    background-size: 34px;
    width: 34px;
    height: 34px;
    cursor: pointer;

    @media (min-width: 320px) and (max-width: 1280px) {
        background-image: url("/close-navbar.svg");
        background-size: 28px;
    }
`;

const NavButtonLogo = styled(NavButton)`
    background-image: url("/logo-navbar.svg");
`;

const NavButtonMenu = styled(NavButton)`
    background-image: url("/menu.svg");
`;

const NavBoxMenu = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1rem 0 0 1rem;
`;

const NavTextMenu = styled.p`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.textInputGray};
    font-weight: var(--font-weight-semibold);
`;

const NavUser = styled.div`
    display: flex;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 1280px) {
        display: flex;
    }
`;

const NavUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 1rem;
        font-weight: var(--font-weight-semibold);
    }

    p {
        font-size: 1rem;
        font-weight: var(--font-weight-regular);
    }

    @media (min-width: 320px) and (max-width: 600px) {
        span {
            font-size: 0.8rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;

const NavList = styled.ul`
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

            &:hover {
                color: ${props => props.theme.colors.buttonPeach};
                text-decoration: underline;
            }
        }

        @media (min-width: 320px) and (max-width: 600px) {
            a {
                font-size: 0.8rem;
            }
        }
    }

    li:last-child {
        margin-top: 30px;
    }
`;

export {
    Nav,
    NavBoxMenu,
    NavButton,
    NavButtonLogo,
    NavButtonMenu,
    NavList,
    NavLogo,
    NavTextMenu,
    NavUser,
    NavUserDetails
};

