import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
`;

export const DescContainer = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    border: none;
    margin-left: 100px;
    width: 844px;
    height: 342px;
    border-radius: 9px;
    background: #F7F7F9;
    box-shadow: 2px 2px 4px 0px #00000026;
    color: #020166;
`;

export const IdContainer = styled.h4`
    position: absolute;
    top: 0;
    left: 20px;
    color: #373299;
`;

export const TitleContainer = styled.h1`
    font-size: 22px;
    color: #373299;
    margin: 0;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
`;

export const LeftContainer = styled.div`
    position: absolute;
    margin: auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export const RightContainer = styled.div`
    position: absolute;
    margin: auto;
    padding: 35%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Separator = styled.div`
    width: 1px;
    background-color: #D7D7D7;
    height: 300px;
    margin-left: 30%;
`;


export const StatsContainer = styled.div`
    display: flex;
    width: 100%;
    color: #020166;
    line-height: 0.5;
`;

export const StatsSection = styled.div`
    width: 50%;
`;

export const DescSection = styled.div`
    width: 70%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const ClearButtonWrapper = styled.div`
    position: relative;
    margin-left: 100px;
    padding: 10px;
    width: auto;
    height: auto;
    z-index: 10;
`;

export const HomePageButton = styled.button`
    background: none;
    border: none;
    color: #373299;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
`;