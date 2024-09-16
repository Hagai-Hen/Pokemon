import { NavigatorBar, ButtonsContainer, LogoContainer } from "./styles";
import logo from "../../assets/logo.png";
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { HOME_ROUTE, PAGES } from "../../resources/routes";

interface NavBarProps {
  activePage: string;
}

export const NavBar = ({ activePage }: NavBarProps) => {
  const navigate = useNavigate();

  const onClickNavButton = useCallback((route: string) => {
    navigate(route);
  }, []);

  return (
    <NavigatorBar>
      <LogoContainer>
        <img src={logo} alt="logo" onClick={() => navigate(HOME_ROUTE)} />
      </LogoContainer>
      <ButtonsContainer>
        {PAGES.map((page) => (
          <NavButton
            onClick={() => onClickNavButton(page.route)}
            isClicked={activePage === page.key}
          >
            {page.title}
          </NavButton>
        ))}
      </ButtonsContainer>
    </NavigatorBar>
  );
};
