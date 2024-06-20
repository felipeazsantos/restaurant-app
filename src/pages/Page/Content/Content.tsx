import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';

export const Content: FC = (): ReactElement => {
    return (
        <main>
            <SearchInput />
            <FoodHeader />
        </main>
    )
}