import styled from "styled-components";
import { colors } from "../../resources/colors";

export const CardContainer = styled.button`
    position: relative;
    width: 220px;
    height: 230px;
    box-shadow: 2px 2px 4px 0px #00000026;
    border: none;
    border-radius: 10px;
    margin: auto;
`;

export const IdContainer = styled.h4`
    position: absolute;
    top: 0;
    left: 20px;
    color: ${colors.primary};
`;

export const TitleContainer = styled.h1`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    color: ${colors.primary};
`;