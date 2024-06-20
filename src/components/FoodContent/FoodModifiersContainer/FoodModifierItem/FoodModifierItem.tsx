import React, { FC, ReactElement } from 'react';
import { IFoodModifier } from '../../interfaces/IFoodModifierItem';
import { Box, Radio, Typography } from '@mui/material';

export const FoodModifierItem: FC<IFoodModifier> = (props): ReactElement => {
    const { modifier, position, positionSelected, setPositionSelected } = props;

    const handleRadioClick = () => {
        setPositionSelected(position);
    }

    return (
        <Box padding="16px 24px" display="flex" flexDirection="row">
            <Box flexGrow="1">
                <Typography fontWeight="bold">
                    {modifier?.name}
                </Typography>
                <Typography>
                    R${modifier?.price}
                </Typography>
            </Box>
            <Box>
                <Radio checked={position === positionSelected} onClick={handleRadioClick} />
            </Box>
        </Box>
    )
}