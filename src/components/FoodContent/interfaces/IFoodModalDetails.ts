import { IFoodItem } from "./IFoodItem";

export interface IFoodModalDetails extends IFoodItem {
    modalOpen: boolean;
    handleModalClose: () => void;
}