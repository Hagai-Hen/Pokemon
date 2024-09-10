import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    box-sizing: border-box;
    border-radius: 9px;
    border: 1px solid transparent;
    max-width: 1070px;
    max-height: 870px;
    margin: auto;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;