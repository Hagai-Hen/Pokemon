import React, { useState, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownInput, DropdownList, DropdownItem, DropdownHeader, ClearButton, OptionText, RemoveButton, SearchContainer } from './styles.ts';
import { Button } from '../Button/Button.tsx';
import { RECENT_SEARCHES_LOCAL_STORAGE } from '../../resources/resources.ts';

interface DropdownProps {
    options: string[];
    selectedOption: string,
    setSelectedOption: (opt: string) => void,
}

export const DropDown: React.FC<DropdownProps> = ({ options, selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(options);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Store options in local storage whenever they change
        localStorage.setItem(RECENT_SEARCHES_LOCAL_STORAGE, JSON.stringify(recentSearches));
    }, [recentSearches]);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleRemoveOption = (option: string) => {
        setRecentSearches(recentSearches.filter(item => item !== option));
    };

    const handleClear = () => {
        setRecentSearches([]);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchClick = () => {
        if (selectedOption) {
            setRecentSearches((prev) => [...prev, selectedOption]);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <SearchContainer>
        <DropdownContainer ref={containerRef}>
            <DropdownInput
                type="text"
                value={selectedOption}
                onClick={() => setIsOpen(prev => !prev)}
                onChange={handleInputChange} 
            />
            <DropdownList $isOpen={isOpen}>
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