import { useTheme, useMediaQuery } from "@mui/material";

export const useIsMobScreen = (): boolean => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('sm'));
}