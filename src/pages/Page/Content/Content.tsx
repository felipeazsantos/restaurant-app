import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';
import { Box, Grid } from '@mui/material';

export const Content: FC = (): ReactElement => {


    return (
        <main>
            <Box bgcolor="#EEEEEE">
                <Grid container display="flex" justifyContent="center">
                    <Grid item md={2} />
                    <Grid item xs={12} md={8}>
                        <Box>
                            <SearchInput />
                            <FoodHeader />
                        </Box>
                    </Grid>
                    <Grid item md={2} />
                </Grid>
            </Box>
        </main>
    )
}