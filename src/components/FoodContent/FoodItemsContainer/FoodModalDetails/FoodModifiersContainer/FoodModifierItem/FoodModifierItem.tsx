import React, { FC, ReactElement } from 'react';
import { IFoodModifier } from '../../../../interfaces/IFoodModifierItem';
import { Box, Radio, Typography } from '@mui/material';
import { formatToBRL } from '../../../../../../helpers/formatToBRL';

export const FoodModifierItem: FC<IFoodModifier> = (props): ReactElement => {
    const { modifier, position, positionSelected, setPositionSelected } = props;

    const handleRadioClick = () => setPositionSelected(position);

    return (
        <Box padding="16px 24px" display="flex" flexDirection="row">
            <Box flexGrow="1">
                <Typography fontWeight="bold">
                    {modifier?.name}
                </Typography>
                <Typography>
                    {formatToBRL(modifier?.price || 0)}
                </Typography>
            </Box>
            <Box>
                <Radio checked={position === positionSelected} onClick={handleRadioClick} />
            </Box>
        </Box>
    )
}