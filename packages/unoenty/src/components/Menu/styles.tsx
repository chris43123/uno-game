import { makeStyles } from "@material-ui/core"

import colors from "@/styles/colors"

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		maxWidth: 422,
		width: "100%",
		backgroundColor: colors.grayScale[1],
	},
	avatarName: {
		fontWeight: "bold",
		marginLeft: theme.spacing(2),
		color: colors.grayScale[15],
	},
	menuTitle: {
		color: colors.grayScale[7],
	},
	listItemIcon: {
		color: colors.palette.black4,
	},
	listItemText: {
		color: colors.palette.black3,
	},
}))

export default useStyles