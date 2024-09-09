import { ReactNode } from "react";
import { NavigatorButton } from "./styles";

type NavButtonProps = {
    isClicked?: boolean,
    children: ReactNode
}

export const NavButton = ({ children, isClicked = false }: NavButtonProps) => {
    return (
        <>
            {isClicked ? <NavigatorButton backgroundColor="#94D97E">{children}</NavigatorButton> : <NavigatorButton>{children}</NavigatorButton> }
        </>
    )
}