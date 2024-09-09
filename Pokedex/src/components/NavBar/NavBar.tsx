import { NavigatorBar, ButtonsContainer } from "./styles";
import logo from '../../assets/logo.png';
import { NavButton } from "../NavButton/NavButton";


export const NavBar = () => {
    return (
        <NavigatorBar>
            <img src={logo} alt="logo"/>
            <ButtonsContainer>
                <NavButton>Home</NavButton>
                <NavButton>Favorite</NavButton>
            </ButtonsContainer>
        </NavigatorBar>
    )
}