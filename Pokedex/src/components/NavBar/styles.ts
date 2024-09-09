import styled from "styled-components";

export const NavigatorBar = styled.div`
    background-color: #373299;
    width: 100%;
    height: 67px;
    flex-direction: row;
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    justify-content: space-between;
    box-sizing: border-box; /* Ensure padding does not affect total width */

    /* Media Queries for responsiveness */
    @media (max-width: 768px) {
        padding: 0 20px; /* Adjust padding for small screens */
    }

    @media (max-width: 480px) {
        padding: 0 10px; /* Further adjust padding for very small screens */
        justify-content: center; /* Center content */
        background-color: #ffffff;
    }

`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    /* Media Queries for responsiveness */
    @media (max-width: 480px) {
        display: none; /* Hide buttons on very small screens */
    }
`;