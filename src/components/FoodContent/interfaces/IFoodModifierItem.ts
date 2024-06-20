import { MenuModifiersItem } from "../../../types/MenuDetails";

export interface IFoodModifier {
    modifier?: MenuModifiersItem;
    position: number;
    positionSelected: number;
    setPositionSelected: React.Dispatch<React.SetStateAction<number>>;
}