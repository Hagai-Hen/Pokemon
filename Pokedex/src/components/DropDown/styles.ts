import styled from 'styled-components';
import { colors } from '../../resources/colors';

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownInput = styled.input`
    padding: 10px;
    box-sizing: border-box;
    width: 341px;
    height: 36px;
    border-radius: 9px;
    margin-right: 3px;
    background: #F7F7F9;
    border: 1px solid #02016680;

    @media (max-width: 480px) {
        width: 200px;
    }
`;

interface DropdownListProps {
    isOpen: boolean;
  }

  export const DropdownList = styled.div<DropdownListProps>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 1px;
`;

export const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: #f1f1f1;
    }
`;

export const ClearButton = styled.button`
    background: none;
    border: none;
    color: ${colors.primary};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
`;

export const OptionText = styled.span`
    flex: 1;
    font-family: arial;
    color: #5A5A89;
    font-size: 12px;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #5A5A8980;
    cursor: pointer;
    font-size: 10px;
    margin-left: auto;
`;

export const DropdownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #ffffff;
    color: ${colors.primary};
    font-family: arial;
`;

export const SearchContainer = styled.div`
    border-radius: 9px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    box-sizing: border-box;
`;