import { ReactNode } from "react";
import { NavigatorButton } from "./styles";
import { colors } from '../../colors';

type NavButtonProps = {
    isClicked?: boolean,
    children: ReactNode,
    onClick: () => void,
}

export const NavButton = ({ children, isClicked = false, onClick }: NavButtonProps) => {
    return (
        <>
            {isClicked ? <NavigatorButton backgroundColor={colors.secondary} onClick={onClick}>{children}</NavigatorButton> : <NavigatorButton onClick={onClick}>{children}</NavigatorButton> }
        </>
    )
}