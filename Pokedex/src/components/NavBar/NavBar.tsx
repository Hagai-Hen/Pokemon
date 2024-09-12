import { NavigatorBar, ButtonsContainer } from "./styles";
import logo from '../../assets/logo.png';
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";
import data from "../../resources/data.json";
import { homePageRoute, favPageRoute } from "../../resources/routes";

interface NavBarProps {
    activePage: string,
}

export const NavBar = ({ activePage } : NavBarProps) => {
    const navigate = useNavigate();

    return (
        <NavigatorBar>
            <img src={logo} alt="logo"/>
            <ButtonsContainer>
                {activePage === data.page_title.home ? <NavButton onClick={() => navigate(homePageRoute)} isClicked={true}>{data.page_title.home}</NavButton> : <NavButton onClick={() => navigate(homePageRoute)}>{data.page_title.home}</NavButton> }
                {activePage === data.page_title.favorite ? <NavButton onClick={() => navigate(favPageRoute)} isClicked={true}>{data.page_title.favorite}</NavButton> : <NavButton onClick={() => navigate(favPageRoute)}>{data.page_title.favorite}</NavButton> }
            </ButtonsContainer>
        </NavigatorBar>
    )
}