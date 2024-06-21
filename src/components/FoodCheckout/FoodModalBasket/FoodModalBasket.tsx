import React, { FC, ReactElement } from 'react';
import { CustomModal } from '../../Common/CustomModal/CustomModal';
import { IFoodModalBasket } from '../interfaces/IFoodModalBasket';
import { FoodBasket } from '../FoodBasket/FoodBasket';

export const FoodModalBasket: FC<IFoodModalBasket> = (props): ReactElement => {
    const { open, onClose } = props;

    return (
        <CustomModal open={open} onClose={onClose}>
            <FoodBasket onClose={onClose} />
        </CustomModal>
    )
}