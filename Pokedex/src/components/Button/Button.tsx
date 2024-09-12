import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface StyledButtonProps {
    backgroundColor?: string;
    textColor?: string;
    children: ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, backgroundColor, textColor, onClick }: StyledButtonProps) => {
    return (
        <>
            <StyledButton onClick={onClick} backgroundColor={backgroundColor} textColor={textColor}>{children}</StyledButton>
        </>
    )
}

export default Button;