import React, { FC, ReactElement, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { ICustomTabPanel } from '../interfaces/ICustomTabPanel';
import { FoodContent } from '../../FoodContent/FoodContent';

function CustomTabPanel(props: ICustomTabPanel) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export const FoodTabs: FC = (): ReactElement => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ width: '100%' }} padding="0px 16px 24px 16px">
                <Tabs value={value} onChange={handleChange}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <Tab label="Item One" sx={{ flexGrow: 1, maxWidth: 'none' }} />
                    <Tab label="Item Two" sx={{ flexGrow: 1, maxWidth: 'none', marginLeft: '10px' }} />
                    <Tab label="Item Three" sx={{ flexGrow: 1, maxWidth: 'none' }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FoodContent />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FoodContent />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <FoodContent />
            </CustomTabPanel>
        </Box >
    )
}