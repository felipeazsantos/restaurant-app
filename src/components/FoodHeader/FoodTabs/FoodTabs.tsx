import React, { FC, ReactElement, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { ICustomTabPanel } from '../interfaces/ICustomTabPanel';
import { FoodContent } from '../../FoodContent/FoodContent';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../../types/Reducers';

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
    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        dispatch({
            type: ActionType.SET_TAB_SELECTED,
            payload: newValue
        })
    };

    const renderTab = (detail: MenuDetails) => {
        return (
            <Tab
                key={detail.id}
                label={detail.name}
                sx={{
                    flexGrow: 1,
                    maxWidth: 'none',
                    marginLeft: 'inherited',
                    textTransform: 'none',
                    fontSize: '16px'
                }}
            />
        )
    }

    const renderCustomTabPanel = (detail: MenuDetails, index: number) => {
        const items = detail?.items
        const sectionTitle = detail.name || ""
        return (
            <CustomTabPanel key={detail.id} value={value} index={index}>
                <FoodContent items={items} title={sectionTitle} />
            </CustomTabPanel>
        )
    }
    return (
        <Box>
            <Box sx={{ width: '100%' }} padding="0px 16px 24px 16px">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#121212',
                        },
                        '& .MuiTab-root': {
                            color: '#121212',
                            '&.Mui-selected': {
                                color: '#121212',
                            },
                        },
                    }}
                >
                    {menuDetails.map(renderTab)}
                </Tabs>
            </Box>
            {menuDetails.map(renderCustomTabPanel)}
        </Box >
    )
}