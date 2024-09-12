import styled from "styled-components";

export const CardContainer = styled.button`
    position: relative;
    width: 220px;
    height: 230px;
    box-shadow: 2px 2px 4px 0px #00000026;
    border: none;
    border-radius: 10px;
    margin: auto;
    &:hover {
        background-color: #f6f6f6;
        cursor: pointer;
    }
`;

export const IdContainer = styled.h4`
    position: absolute;
    top: 0;
    left: 20px;
    color: #373299;
`;

export const TitleContainer = styled.h1`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    color: #373299;
`;