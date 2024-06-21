import { Box } from "@mui/material";
import { MenuDetails } from "../../../types/MenuDetails"
import { ICustomTabPanel } from "../interfaces/ICustomTabPanel";
import { FoodContent } from "../../FoodContent/FoodContent";

const CustomTabPanel = (props: ICustomTabPanel) => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export const renderCustomTabPanel = (detail: MenuDetails, index: number, value: number) => {
    const items = detail?.items
    const sectionTitle = detail.name || ""
    return (
        <CustomTabPanel key={detail.id} value={value} index={index}>
            <FoodContent items={items} title={sectionTitle} />
        </CustomTabPanel>
    )
}