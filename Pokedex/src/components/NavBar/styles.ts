import styled from "styled-components";
import { colors } from "../../resources/colors";

export const NavigatorBar = styled.div`
    background-color: ${colors.primary};
    width: 100%;
    height: 67px;
    flex-direction: row;
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    justify-content: space-between;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
        justify-content: center;
        background-color: #ffffff;
    }

`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;