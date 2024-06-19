import React, { FC, ReactElement, useEffect, useState } from 'react';
import { SearchInput } from '../../../components/SearchInput/SearchInput';
import { FoodHeader } from '../../../components/FoodHeader/FoodHeader';
import { fetchMenuDetails } from '../../../api/apiMenu';
import { MenuDetails } from '../../../types/MenuDetails';

export const Content: FC = (): ReactElement => {
    // eslint-disable-next-line
    const [menuDetails, setMenuDetails] = useState<MenuDetails>({});

    useEffect(() => {
        fetchMenuDetails()
            .then((details: MenuDetails) => setMenuDetails(details));
    }, [])

    return (
        <main>
            <SearchInput />
            <FoodHeader />
        </main>
    )
}