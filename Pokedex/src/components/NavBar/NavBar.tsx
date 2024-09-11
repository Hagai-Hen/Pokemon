import { NavigatorBar, ButtonsContainer } from "./styles";
import logo from '../../assets/logo.png';
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
    activePage: string,
}

export const NavBar = ({ activePage } : NavBarProps) => {
    const navigate = useNavigate();

    return (
        <NavigatorBar>
            <img src={logo} alt="logo"/>
            <ButtonsContainer>
                {activePage === "Home" ? <NavButton onClick={() => navigate('/')} isClicked={true}>Home</NavButton> : <NavButton onClick={() => navigate('/')}>Home</NavButton> }
                {activePage === "Favorite" ? <NavButton onClick={() => navigate('/fav')} isClicked={true}>Favorite</NavButton> : <NavButton onClick={() => navigate('/fav')}>Favorite</NavButton> }
            </ButtonsContainer>
        </NavigatorBar>
    )
}