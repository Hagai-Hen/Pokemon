import { ReactNode } from "react";
import { NavigatorButton } from "./styles";

type NavButtonProps = {
    isClicked?: boolean,
    children: ReactNode,
    onClick: () => void,
}

export const NavButton = ({ children, isClicked = false, onClick }: NavButtonProps) => {
    return (
        <>
            {isClicked ? <NavigatorButton backgroundColor="#94D97E" onClick={onClick}>{children}</NavigatorButton> : <NavigatorButton onClick={onClick}>{children}</NavigatorButton> }
        </>
    )
}