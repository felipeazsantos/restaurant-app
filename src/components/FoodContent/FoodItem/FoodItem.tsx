import { Avatar, Grid, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { IFoodItem } from '../interfaces/IFoodItem';
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
                    <Grid item xs={8}>
                        <Typography fontWeight="bold">{name}</Typography>
                        <Typography sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            textOverflow: 'ellipsis'
                        }}> {description}</Typography>
                        <Typography>R$ {price}</Typography>
                    </Grid>
                    <Grid item xs={4}>
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
            <FoodModalDetails {...props} modalOpen={modalOpen} handleModalClose={handleModalClose} />
        </>
    )
}