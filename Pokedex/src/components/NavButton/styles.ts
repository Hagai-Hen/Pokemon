import styled from "styled-components";

interface NavigatorButtonProps {
    backgroundColor?: string;
  }

export const NavigatorButton = styled.button<NavigatorButtonProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || '#373299'};
    color: black;
    width: 100px;
    height: 67px;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition for background color */
    &:hover {
        background-color: #94D97E;
    }
`;