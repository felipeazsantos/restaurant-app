import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useIsMobScreen } from '../../hooks/useIsMobScreen';
import { useDispatch } from 'react-redux';
import { useMenuDetails } from '../../hooks/useMenuDetails';
import { useSearch } from '../../hooks/useSearch';

export const SearchInput: FC = (): ReactElement => {
    const [searchText, setSearchText] = useState<string>('');
    const isMobSecreen = useIsMobScreen();
    const dispatch = useDispatch();
    const menuDetailsRef = useRef(useMenuDetails());

    const handleOnChange = (e: any) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSearch(dispatch, searchText, menuDetailsRef);
    }, [dispatch, searchText])

    return (
        <Box padding={isMobSecreen ? '16px' : '0'} py='16px' bgcolor={isMobSecreen ? '#ffffff' : 'inherited'}>
            <OutlinedInput
                value={searchText}
                onInput={handleOnChange}
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