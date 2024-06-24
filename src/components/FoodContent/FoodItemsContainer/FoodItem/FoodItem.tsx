import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { IFoodItem } from '../../interfaces/IFoodItem';
import { FoodModalDetails } from '../FoodModalDetails/FoodModalDetails';
import { useOrderItemQuantity } from '../../../../hooks/useOrderItemQuantity';
import { useWebSettings } from '../../../../hooks/useWebSettings';
import { useIsMobScreen } from '../../../../hooks/useIsMobScreen';
import { formatToBRL } from '../../../../helpers/formatToBRL';

export const FoodItem: FC<IFoodItem> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { name, description, price = 0, imageUrl, menuItem, orders } = props;
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const orderItemQuantity = useOrderItemQuantity(orders, menuItem?.id);
    const { primaryColour } = useWebSettings();
    const isMobScreen = useIsMobScreen();
    return (
        <>
            <Box onClick={handleModalOpen} sx={{ cursor: 'pointer' }}>
                <Grid container marginBottom="20px">
                    <Stack direction="row" spacing={2} paddingRight="20px">
                        <Grid item xs={8} md={10}>
                            <Box minWidth={isMobScreen ? "45vw" : "35vw"}>
                                <Box display="flex" alignItems="center">
                                    {orderItemQuantity > 0 &&
                                        <Typography
                                            borderRadius="4px"
                                            bgcolor={primaryColour}
                                            color="#ffffff"
                                            p="0 5px"
                                            mr="8px"
                                            fontSize="12px"
                                            fontWeight="bold">
                                            {orderItemQuantity}
                                        </Typography>}
                                    <Typography fontWeight="500" fontSize="16px" color="#121212">
                                        {name}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body2"
                                    fontSize="16px"
                                    color="#464646"
                                    fontWeight="300"
                                    sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Typography fontWeight="500" fontSize="16px" color="#464646">
                                    {formatToBRL(price)}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Avatar
                                src={imageUrl}
                                alt={name}
                                variant="square"
                                sx={{
                                    width: '128px',
                                    height: '85px',
                                    borderRadius: '6px'
                                }} />
                        </Grid>
                    </Stack>
                </Grid >
            </Box>
            <FoodModalDetails {...props} open={modalOpen} onClose={handleModalClose} />
        </>
    )
}