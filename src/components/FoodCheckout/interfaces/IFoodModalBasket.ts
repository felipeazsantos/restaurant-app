import { IOrder } from "../../../types/Order";
import { ICustomModal } from "../../Common/interfaces/ICustomModal";

export interface IFoodModalBasket extends ICustomModal {
    orders: IOrder[]
}