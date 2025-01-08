export const TextField = (theme) => ({
	defaultProps: {
		variant: "filled",
	},
	styleOverrides: {
		root: {
			position: "relative",
			width: "100%",
			height: "67px",
			border: `1px solid ${theme.palette.gray.light}`,
			borderRadius: theme.spacing(2),
			"& .MuiInputBase-root": {
				backgroundColor: "transparent !important",
				"&:after": {
					width: "0"
				},
				"&:before": {
					width: "0"
				}
			},
			"& .MuiFormLabel-root": {
				fontWeight: 500,
				fontSize: theme.spacing(5),
				color: theme.palette.dark.main
			},
			"& .MuiInputBase-input": {
				paddingTop: theme.spacing(8),
			},
		},

	},
});
