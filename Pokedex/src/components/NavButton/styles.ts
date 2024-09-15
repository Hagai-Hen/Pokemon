import styled from "styled-components";
import { colors } from "../../resources/colors";

interface NavigatorButtonProps {
    backgroundColor?: string;
  }

export const NavigatorButton = styled.button<NavigatorButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || colors.primary};
    color: black;
    width: 100px;
    height: 67px;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.secondary};
    }
`;