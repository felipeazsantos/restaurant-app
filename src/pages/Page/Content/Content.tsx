import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';
import { Box, Grid } from '@mui/material';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { FoodCart } from '../../../components/FoodCheckout/FoodCart/FoodCart';

export const Content: FC = (): ReactElement => {
    const isMobScreen = useIsMobScreen();

    return (
        <main>
            <Box bgcolor="#EEEEEE">
                <Grid container display="flex" justifyContent="center">
                    <Grid item md={1} />
                    <Grid item xs={12} md={9}>
                        <SearchInput />
                        <Grid container
                            bgcolor={isMobScreen ? "inherited" : "#F8F9FA"}
                            p={isMobScreen ? "inherited" : "32px 40px"}
                        >
                            <Grid item xs={12} md={8}>
                                <FoodHeader />
                            </Grid>
                            {!isMobScreen &&
                                <Grid item md={4} xs={0}>
                                    <FoodCart />
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </Box>
        </main >
    )
}