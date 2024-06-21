import React, { FC, ReactElement, useState } from 'react';
import { Box, Tabs } from '@mui/material';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';
import { useDispatch } from 'react-redux';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { handleTabsChange } from '../helpers/handleTabsChange';
import { renderTab } from '../helpers/renderTab';
import { renderCustomTabPanel } from '../helpers/renderCustomTabPanel';


export const FoodTabs: FC = (): ReactElement => {
    const [value, setValue] = useState(0);
    const menuDetails: MenuDetails[] = useMenuDetails();
    const dispatch = useDispatch();
    const isMobScreen = useIsMobScreen();

    return (
        <Box>
            <Box sx={{ width: '100%' }} p="0px 16px 24px 16px" bgcolor="#fff">
                <Tabs
                    value={value}
                    onChange={(event, newValue) => handleTabsChange(dispatch, setValue, event, newValue)}
                    sx={{
                        display: 'flex',
                        justifyContent: isMobScreen ? 'space-around' : 'start',
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#121212',
                        },
                        '& .MuiTab-root': {
                            color: '#121212',
                            marginX: isMobScreen ? 'inherited' : '16px',
                            '&.Mui-selected': {
                                color: '#121212',
                            },
                        },
                    }}
                >
                    {menuDetails.map((detail) => renderTab(detail, isMobScreen))}
                </Tabs>
            </Box>
            {menuDetails.map((detail, number) => renderCustomTabPanel(detail, number, value))}
        </Box >
    )
}