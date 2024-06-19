import React, { FC, ReactElement } from 'react';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';

export const Page: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}