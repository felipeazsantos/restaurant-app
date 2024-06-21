import { Tab } from "@mui/material"
import { MenuDetails } from "../../../types/MenuDetails"


export const renderTab = (detail: MenuDetails, isMobScreen: boolean) => {
    return (
        <Tab
            key={detail.id}
            label={detail.name}
            sx={{
                flexGrow: isMobScreen ? 1 : 'inherited',
                maxWidth: 'none',
                marginLeft: 'inherited',
                textTransform: 'none',
                fontSize: '16px'
            }}
        />
    )
}