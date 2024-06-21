import { MenuDetails } from "../../../types/MenuDetails"
import { FoodImage } from "../FoodImage/FoodImage"
import { retrieveLocalImageUrl } from "./retrieveLocalImageUrl"

export const renderFoodImage = (detail: MenuDetails, index: number, tabSelected: number) => {
    const imageUrl = retrieveLocalImageUrl(detail?.name || "")
    const imageId = detail?.images ? detail.images[0].id : ""
    const selected = tabSelected === index
    return <FoodImage key={imageId} imageUrl={imageUrl} selected={selected} />
}