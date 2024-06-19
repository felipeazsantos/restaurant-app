import React, { FC, ReactElement } from 'react';
import { SearchInput } from '../../../specific/SearchInput/SearchInput';

export const Content: FC = (): ReactElement => {
    return (
        <main>
            <SearchInput />
        </main>
    )
}