import { Avatar, Box, Grid, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { IFoodItem } from '../../interfaces/IFoodItem';
import { FoodModalDetails } from '../FoodModalDetails/FoodModalDetails';
import { useOrderItemQuantity } from '../../../../hooks/useOrderItemQuantity';
import { useWebSettings } from '../../../../hooks/useWebSettings';
import { useIsMobScreen } from '../../../../hooks/useIsMobScreen';

export const FoodItem: FC<IFoodItem> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { name, description, price, imageUrl, menuItem, orders } = props;
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const orderItemQuantity = useOrderItemQuantity(orders, menuItem?.id);
    const { primaryColour } = useWebSettings();
    const isMobScreen = useIsMobScreen();

    return (
        <>
            <div onClick={handleModalOpen}>
                <Grid container spacing={2} marginBottom={isMobScreen ? "10px" : "20px"} paddingRight={isMobScreen ? "40px" : "0"}>
                    <Grid item xs={8} md={10}>
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
                            R${price}
                        </Typography>
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
                </Grid>
            </div>
            <FoodModalDetails {...props} open={modalOpen} onClose={handleModalClose} />
        </>
    )
}