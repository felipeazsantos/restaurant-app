import { Grid, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import './FoodItem.css';

export const FoodItem: FC = (): ReactElement => {
    return (
        <Grid container spacing={2} marginBottom="10px" paddingRight="40px">
            <Grid item xs={8}>
                <Typography fontWeight="bold">Food Item Title</Typography>
                <Typography sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    textOverflow: 'ellipsis'
                }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                <Typography>R$ 33,00</Typography>
            </Grid>
            <Grid item xs={4}>
                <div className="food-item__img-container">
                    <img
                        className="food-item__img"
                        src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
                        alt="top" />
                </div>
            </Grid>
        </Grid>
    )
}