import styled from 'styled-components';

interface GridProps {
    $isFav?: boolean;
  }

export const GridContainer = styled.div<GridProps>`
    padding: ${({ $isFav }) => $isFav ? `100px 0 0 0` : ''};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    box-sizing: border-box;
    border-radius: 9px;
    border: 1px solid transparent;
    max-width: 900px;
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

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    box-sizing: border-box;
`;

export const Container = styled.div`
    position: relative;
    display: inline-block;
`;