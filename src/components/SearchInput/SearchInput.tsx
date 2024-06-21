import React, { FC, ReactElement, useState } from 'react';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useIsMobScreen } from '../../hooks/useIsMobScreen';

export const SearchInput: FC = (): ReactElement => {
    const [searchText, setSearchText] = useState<string>('');
    const isMobSecreen = useIsMobScreen();

    const handleOnChange = (e: any) => {
        setSearchText(e.target.value);
    }

    return (
        <Box padding={isMobSecreen ? '16px' : '0'} py='16px' bgcolor={isMobSecreen ? '#ffffff' : 'inherited'}>
            <OutlinedInput
                value={searchText}
                onChange={handleOnChange}
                sx={{ bgcolor: '#ffffff' }}
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