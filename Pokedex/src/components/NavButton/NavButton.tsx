import { ReactNode } from "react";
import { NavigatorButton } from "./styles";
import { colors } from '../../colors';

type NavButtonProps = {
    isClicked?: boolean,
    children: ReactNode
}

export const NavButton = ({ children, isClicked = false }: NavButtonProps) => {
    return (
        <>
            {isClicked ? <NavigatorButton backgroundColor={colors.secondary}>{children}</NavigatorButton> : <NavigatorButton>{children}</NavigatorButton> }
        </>
    )
}