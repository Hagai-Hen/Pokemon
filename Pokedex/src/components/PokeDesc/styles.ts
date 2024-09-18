import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1;
    height: 100vh;
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
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 950px) {
        max-width: 650px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        width: 90%;
        height: 800px;
    }
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
    display: flex;
    justify-content: center;
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
    max-width: 30%;

    @media (max-width: 700px) {
        max-width: 90%;
    }
`;
export const RightContainer = styled.div`
    margin: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;

    @media (max-width: 1200px) {
        max-width: 800px;
    }

    @media (max-width: 950px) {
        max-width: 650px;
    }

    @media (max-width: 700px) {
        max-width: 90%;
        width: 90%;
        height: 90%;
    }

`;

export const Separator = styled.div`
    width: 1px;
    background-color: #D7D7D7;
    height: 300px;
    margin-left: 30%;

    @media (max-width: 700px) {
        width: 100%;
        height: 1px;
        margin-left: 0;
        margin-top: 300px;
    }
    @media (max-width: 700px) {
        margin-top: 300px;
    }

    @media (max-width: 600px) {
        margin-top: 250px;
    }

    @media (max-width: 500px) {
        margin-top: 230px;
    }
    
    @media (max-width: 400px) {
        margin-top: 200px;
    }
    
    @media (max-width: 300px) {
        margin-top: 170px;
    }
`;


export const StatsContainer = styled.div`
    display: flex;
    width: 100%;
    color: #020166;
    line-height: 0.5;
    
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const StatsSection = styled.div`
    width: 50%;

    @media (max-width: 700px) {
        flex-direction: column;
        width: 90%
    }
`;

export const DescSection = styled.div`
    width: 70%;
    @media (max-width: 700px) {
        flex-direction: column;
        width: 90%
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 100px;
    padding: 10px;
    cursor: pointer;
    align-items: center;
`;

export const HomePageButton = styled.button`
    background: none;
    border: none;
    color: #373299;
    cursor: pointer;
    font-size: 14px;
`;

export const LocationContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 70px;
    align-items: center;
`;