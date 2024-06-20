import { Add, Remove } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { IControlQuantity } from "../interfaces/IControlQuantity";
import { useWebSettings } from "../../../hooks/useWebSettings";


export const ControlQuantity: FC<IControlQuantity> = (props): ReactElement => {
	const { counter, setCounter, height, width, position, iconFontSize, counterFontSize,
		counterPadding, boxPadding
	} = props;
	const disabledBgColor = '#DADADA'
	const [removeBgColor, setRemoveBgColor] = useState<string>(disabledBgColor);
	const { primaryColour } = useWebSettings();

	const plus = () => setCounter(counter + 1);
	const minus = () => setCounter(counter - 1);

	useEffect(() => {
		if (counter === 1) {
			setRemoveBgColor(disabledBgColor)
		} else {
			setRemoveBgColor(primaryColour || "");
		}
	}, [counter, primaryColour])

	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent={position}
			alignItems="center"
			padding={boxPadding}
		>
			<Fab
				sx={{
					backgroundColor: removeBgColor,
					color: '#ffffff',
					width,
					height,
					minHeight: 'unset',
					padding: '4px',
					'&:hover': {
						backgroundColor: removeBgColor,
					},
					'&:focus': {
						backgroundColor: removeBgColor,
					},
					'&:active': {
						backgroundColor: removeBgColor,
					}
				}}
				size="small"
				aria-label="add"
				disabled={counter === 1}
				onClick={minus}
			>
				<Remove sx={{ fontSize: iconFontSize }} />
			</Fab>
			<Typography padding={counterPadding} fontWeight="600" fontSize={counterFontSize}>
				{counter}
			</Typography>
			<Fab
				sx={{
					backgroundColor: primaryColour,
					color: '#ffffff',
					width,
					height,
					minHeight: 'unset',
					padding: '4px',
					'&:hover': {
						backgroundColor: primaryColour,
					},
					'&:focus': {
						backgroundColor: primaryColour,
					},
					'&:active': {
						backgroundColor: primaryColour,
					},

				}}
				size="small"
				aria-label="add"
				onClick={plus}
			>
				<Add sx={{ fontSize: iconFontSize }} />
			</Fab>

		</Box>
	);
};
