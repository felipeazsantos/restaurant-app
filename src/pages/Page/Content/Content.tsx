import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';
import { Grid } from '@mui/material';
import { FoodTab } from '../../../components/FoodHeader/FoodTab/FoodTab';

export const Content: FC = (): ReactElement => {
    return (
        <main>
            <SearchInput />
            <Grid container spacing={2} padding="20px 0px 24px 16px">
                <Grid item xs={4}>
                    <FoodHeader imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
                    <FoodTab />
                </Grid>
                <Grid item xs={4}>
                    <FoodHeader imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
                    <FoodTab />
                </Grid>
                <Grid item xs={4}>
                    <FoodHeader imageUrl="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg?t=st=1718804916~exp=1718808516~hmac=26e8bdd5adc82837f43c47f549d9dfccc77dc3ccead2b7e8e779c56ca74aaa42&w=826" />
                    <FoodTab />
                </Grid>
            </Grid>
        </main>
    )
}