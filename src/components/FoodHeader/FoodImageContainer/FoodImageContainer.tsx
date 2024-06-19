import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodImage } from '../FoodImage/FoodImage';

export const FoodImageContainer: FC = (): ReactElement => {
    return (
        <Box padding="0px 16px 24px 16px">
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <FoodImage imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
                <FoodImage imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
                <FoodImage imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
            </Box>
        </Box>
    )
}