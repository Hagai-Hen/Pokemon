import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface StyledButtonProps {
    $backgroundColor?: string;
    $textColor?: string;
    children: ReactNode;
    onClick?: () => void;
    $border?: boolean;
}

export const Button = ({ children, $backgroundColor, $textColor, onClick, $border }: StyledButtonProps) => {
    return (
        <>
            <StyledButton onClick={onClick} $backgroundColor={$backgroundColor} $textColor={$textColor} $border={$border}>{children}</StyledButton>
        </>
    )
}

export default Button;