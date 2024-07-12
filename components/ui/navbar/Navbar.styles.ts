import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    color: ${props => props.theme.colors.textGray};
    background-color: ${props => props.theme.colors.backgroundGreen};
    padding: 1rem 0 1.5rem 1rem;
`;

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const NavUser = styled.div`
    display: flex;
    gap: 20px;
`;

const NavUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 1.2rem;
        font-weight: var(--font-weight-semibold);
    }

    p {
        font-size: 1rem;
        font-weight: var(--font-weight-regular);
    }
`;

const NavList = styled.ul`
    display: flex;
	flex-direction: column;
	gap: 45px;

	li {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			text-decoration: none;
			font-size: 1rem;
			font-weight: var(--font-weight-normal);
			color: ${props => props.theme.colors.textGray};

			&:hover {
				color: ${props => props.theme.colors.textWhite};
				text-decoration: underline;
			}
		}
	}
`;

export { Nav, NavLogo, NavUser, NavUserDetails, NavList };
