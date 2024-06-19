import React, { FC, ReactElement, useState } from 'react';
import './SearchInput.css';

export const SearchInput: FC = (): ReactElement => {
    const [searchText, setSearchText] = useState<string>('');

    const handleOnChange = (e: any) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="search-input-container">
            <input type="text" name="searchInput" value={searchText} onChange={handleOnChange} />
        </div>
    )
}