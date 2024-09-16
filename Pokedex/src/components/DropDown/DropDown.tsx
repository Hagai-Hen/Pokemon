import React, { useState, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownInput, DropdownList, DropdownItem, DropdownHeader, ClearButton, OptionText, RemoveButton, SearchContainer } from './styles.ts';
import { Button } from '../Button/Button.tsx';

interface DropdownProps {
    selectedOption: string,
    setSelectedOption: (opt: string) => void,
}

const getInitialRecentSearches = () => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
};

export const DropDown: React.FC<DropdownProps> = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(getInitialRecentSearches);
    const [inputValue, setInputValue] = useState(selectedOption);
    const containerRef = useRef<HTMLDivElement>(null);
    const debounceTimer = useRef<number | null>(null);

    useEffect(() => {
        // Store options in local storage whenever they change
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }, [recentSearches]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        debounceTimer.current = setTimeout(() => {
            setSelectedOption(inputValue);
            // if (inputValue) setRecentSearches((prev) => [...prev, inputValue]);
        }, 500);

        // Cleanup function
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, [inputValue, setSelectedOption]);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (option: string) => {
        setInputValue(option);
        setIsOpen(false);
    };

    const handleRemoveOption = (option: string) => {
        setRecentSearches(recentSearches.filter(item => item !== option));
    };

    const handleClear = () => {
        setRecentSearches([]);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        if (selectedOption) {
            setRecentSearches((prev) => [...prev, selectedOption]);
        }
    };

    return (
        <SearchContainer>
            <DropdownContainer ref={containerRef}>
                <DropdownInput
                    type="text"
                    value={inputValue}
                    onClick={() => setIsOpen(prev => !prev)}
                    onChange={handleInputChange} 
                />
                <DropdownList isOpen={isOpen}>
                    <DropdownHeader>
                        Recent Searches
                        <ClearButton onClick={handleClear}>Clear</ClearButton>
                    </DropdownHeader>
                    {recentSearches.map((option, index) => (
                        <DropdownItem key={index}>
                            <OptionText onClick={() => handleOptionClick(option)}>{option}</OptionText>
                            <RemoveButton onClick={() => handleRemoveOption(option)}>X</RemoveButton>
                        </DropdownItem>
                    ))}
                </DropdownList>
            </DropdownContainer>
            <Button onClick={handleSearchClick}>Search</Button>
        </SearchContainer>
    );
};

export default DropDown;