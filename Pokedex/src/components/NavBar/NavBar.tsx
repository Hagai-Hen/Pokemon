import { NavigatorBar, ButtonsContainer } from "./styles";
import logo from '../../assets/logo.png';
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
    activePage: string,
}

export const NavBar = ({ activePage } : NavBarProps) => {
    const navigate = useNavigate();
    const tabs = [{title: "Home", page: "Home", route: '/'}, {title: "Favorite", page: "Favorite", route: '/fav'}]

    const onClickNavButton = ((route:string) => {
        navigate(route);
    });


    return (
        <NavigatorBar>
            <img src={logo} alt="logo"/>
            <ButtonsContainer>
                {tabs.map((tab)=><NavButton  onClick={()=>onClickNavButton(tab.route)}   isClicked={activePage===tab.page}>{tab.title}</NavButton> )}
            </ButtonsContainer>
        </NavigatorBar>
    )
}