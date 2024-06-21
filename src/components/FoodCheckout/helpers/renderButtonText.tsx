import React from 'react';

export const renderButtonText = (counter: number, price: number, buttonText: string): React.ReactNode => {
    if (counter && price) {
        return <span>{buttonText} • R${price * counter}</span>
    } else if (counter) {
        return <span>{buttonText} • {counter} item(s)</span>
    } else {
        return <span>{buttonText}</span>
    }
}