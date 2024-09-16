import { ReactNode } from "react";
import { NavigatorButton } from "./styles";
import { colors } from '../../resources/colors';
import { useMemo } from "react";

interface NavButtonProps {
    isClicked?: boolean,
    children: ReactNode,
    onClick: () => void;
}

export const NavButton = ({ children, isClicked = false, onClick }: NavButtonProps) => {

    const backgroundColor = useMemo(() => {
        return isClicked ? colors.secondary : '';
    }, [isClicked]);
    return (
        <>
            {<NavigatorButton $backgroundColor={backgroundColor} onClick={onClick}>{children}</NavigatorButton>}
        </>
    )
}