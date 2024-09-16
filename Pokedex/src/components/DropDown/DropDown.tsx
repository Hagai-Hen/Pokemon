import React, { useState, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownInput, DropdownList, DropdownItem, DropdownHeader, ClearButton, OptionText, RemoveButton, SearchContainer } from './styles.ts';
import { Button } from '../Button/Button.tsx';

interface DropdownProps {
    searchQuery: string,
    setSearchQuery: (opt: string) => void,
}

const getInitialRecentSearches = () => {
    const savedSearches = localStorage.getItem('recentSearches');
    return savedSearches ? JSON.parse(savedSearches) : [];
};

const setRecentSearchesHelper = (prev: string[], inputValue: string) => {
    const filteredList = prev.filter(item => item !== inputValue);
    const updatedList = [inputValue, ...filteredList].slice(0, 3);
    return updatedList;
}

export const DropDown: React.FC<DropdownProps> = ({ searchQuery, setSearchQuery }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>(getInitialRecentSearches);
    const [inputValue, setInputValue] = useState(searchQuery);
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
            setSearchQuery(inputValue);
            if (!inputValue) return;

            setRecentSearches((prev) => setRecentSearchesHelper(prev, inputValue));
        }, 500);

        // Cleanup function
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current);
            }
        };
    }, [inputValue, setSearchQuery]);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (option: string) => {
        setInputValue(option);
        setIsOpen(false);
    };

    const handleRemoveOption = (index: number) => {
        setRecentSearches((prevSearches) => prevSearches.filter((_, i) => i !== index));
    };

    const handleClear = () => {
        setRecentSearches([]);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        if (!searchQuery) return;

        setRecentSearches((prev) => setRecentSearchesHelper(prev, searchQuery));
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
                            <RemoveButton onClick={() => handleRemoveOption(index)}>X</RemoveButton>
                        </DropdownItem>
                    ))}
                </DropdownList>
            </DropdownContainer>
            <Button onClick={handleSearchClick}>Search</Button>
        </SearchContainer>
    );
};

export default DropDown;