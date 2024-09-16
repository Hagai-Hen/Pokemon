import { NavigatorBar, ButtonsContainer } from "./styles";
import logo from "../../assets/logo.png";
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PAGES } from "../../resources/routes";

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
      <img src={logo} alt="logo" />
      <ButtonsContainer>
        {PAGES.map((page) => (
          <NavButton
            key={page.key}
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
