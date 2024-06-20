import React from 'react';

export interface IControlQuantity {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>
}