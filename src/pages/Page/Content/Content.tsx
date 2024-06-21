import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';
import { Box, Grid, Stack } from '@mui/material';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { FoodCart } from '../../../components/FoodCheckout/FoodCart/FoodCart';

export const Content: FC = (): ReactElement => {
    const isMobScreen = useIsMobScreen();

    return (
        <main>
            <Box bgcolor={isMobScreen ? "#F8F9FA" : "#EEEEEE"}>
                <Grid container display="flex" justifyContent="center">
                    <Grid item md={1} />
                    <Grid item xs={12} md={9}>
                        <SearchInput />
                        <Grid container
                            bgcolor={isMobScreen ? "inherited" : "#F8F9FA"}
                            p={isMobScreen ? "inherited" : "32px 40px"}
                        >
                            <Stack direction="row" spacing={2}>
                                <Grid item xs={12} md={9}>
                                    <FoodHeader />
                                </Grid>
                                {!isMobScreen &&
                                    <Grid item md={3} xs={0}>
                                        <FoodCart />
                                    </Grid>
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </Box>
        </main >
    )
}