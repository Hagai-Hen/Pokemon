import { ReactNode } from "react";
import { NavigatorButton } from "./styles";
import { colors } from '../../colors';

type NavButtonProps = {
    isClicked?: boolean,
    children: ReactNode,
    onClick: () => void;
}

export const NavButton = ({ children, isClicked = false, onClick }: NavButtonProps) => {
    return (
        <>
            {isClicked ? <NavigatorButton onClick={onClick} backgroundColor={colors.secondary}>{children}</NavigatorButton> : <NavigatorButton onClick={onClick}>{children}</NavigatorButton> }
        </>
    )
}