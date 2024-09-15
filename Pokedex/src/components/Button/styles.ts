import styled from "styled-components";
import { colors } from "../../resources/colors";

interface ButtonProps {
    backgroundColor?: string;
    textColor?: string;
  }

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || colors.primary};
    color: ${({ textColor }) => textColor || 'white'};
    height: 37px;
    text-align: center;
    cursor: pointer;
    border-radius: 9px;
    border: none;
    padding: 0 20px;
`;