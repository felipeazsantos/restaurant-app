import React, { FC, ReactElement, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { ICustomTabPanel } from '../interfaces/ICustomTabPanel';
import { FoodContent } from '../../FoodContent/FoodContent';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';

function CustomTabPanel(props: ICustomTabPanel) {
    const { children, value, index } = props;

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
    const menuDetails: MenuDetails[] = useMenuDetails();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const renderTab = (detail: MenuDetails, index: number) => {
        const tabStyle = { flexGrow: 1, maxWidth: 'none', marginLeft: 'inherited' }
        if (index === 1) {
            tabStyle.marginLeft = '10px';
        }
        return <Tab label={detail.name} sx={tabStyle} />
    }

    const renderCustomTabPanel = (detail: MenuDetails, index: number) => {
        const items = detail?.items
        const sectionTitle = detail.name || ""
        return (
            <CustomTabPanel value={value} index={index}>
                <FoodContent items={items} title={sectionTitle} />
            </CustomTabPanel>
        )
    }
    return (
        <Box>
            <Box sx={{ width: '100%' }} padding="0px 16px 24px 16px">
                <Tabs value={value} onChange={handleChange} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {menuDetails.map(renderTab)}
                </Tabs>
            </Box>
            {menuDetails.map(renderCustomTabPanel)}
        </Box >
    )
}