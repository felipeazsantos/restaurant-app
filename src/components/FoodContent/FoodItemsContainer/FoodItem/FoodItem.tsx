import { Avatar, Grid, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { IFoodItem } from '../../interfaces/IFoodItem';
import { FoodModalDetails } from '../FoodModalDetails/FoodModalDetails';

export const FoodItem: FC<IFoodItem> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { name, description, price, imageUrl } = props;
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <div onClick={handleModalOpen}>
                <Grid container spacing={2} marginBottom="10px" paddingRight="40px">
                    <Grid item xs={8} md={11}>
                        <Typography fontWeight="500" fontSize="16px" color="#121212">
                            {name}
                        </Typography>
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
                    <Grid item xs={4} md={1}>
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