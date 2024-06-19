import React, { FC, ReactElement, useState } from 'react';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchInput: FC = (): ReactElement => {
    const [searchText, setSearchText] = useState<string>('');

    const handleOnChange = (e: any) => {
        setSearchText(e.target.value);
    }

    return (
        <Box padding="16px" width="100vw">
            <OutlinedInput
                value={searchText}
                onChange={handleOnChange}
                fullWidth
                size="small"
                placeholder="Search menu items"
                startAdornment={(<InputAdornment position="start">
                    < Search />
                </InputAdornment>)
                }
            />
        </Box >
    )
}