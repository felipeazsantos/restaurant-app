// The API images are cropped, so I used the figma images to look identical to the prototype
import burgersImg from '../../../assets/images/burgers.png';
import drinksImg from '../../../assets/images/drinks.png';
import dessertsImg from '../../../assets/images/desserts.png';

enum foodSectionType {
    BURGERS = "BURGERS",
    DRINKS = "DRINKS",
    DESSERTS = "DESSERTS"
}


export const retrieveLocalImageUrl = (foodName: string): string => {
    const foodNameUpper = foodName.toUpperCase();
    switch (foodNameUpper) {
        case foodSectionType.BURGERS:
            return burgersImg;
        case foodSectionType.DRINKS:
            return drinksImg;
        case foodSectionType.DESSERTS:
            return dessertsImg;
        default: return "";
    }
}