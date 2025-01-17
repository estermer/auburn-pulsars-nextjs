import React from "react"
import Link from "next/Link"
import {
	AppBar,
	Container,
	Hidden,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import cx from "classnames"

const useStyles = makeStyles(theme => ({
	defaultAppBar: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		boxShadow: theme.shadows[4],
	},
	clearAppBar: {
		backgroundColor: "transparent",
		boxShadow: "none",
		color: theme.palette.primary.contrastText,
	},
	desktopContainer: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		padding: `${theme.spacing(1)}px 0`,
	},
}))

export default function Nav({ pathname }) {
	const classes = useStyles()
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 150,
	})

	return (
		<Hidden smDown>
			<AppBar
				className={cx(classes.defaultAppBar, {
					[classes.clearAppBar]: !scrollTrigger && pathname === "/",
				})}
				position="sticky">
				<Toolbar>
					<Container className={classes.desktopContainer} fixed maxWidth="md">
						<Link href="/team" passHref>
							<Typography component="a" variant="h6">
								Team
							</Typography>
						</Link>
						<Link href="/about" passHref>
							<Typography component="a" variant="h6">
								About
							</Typography>
						</Link>
						<Link href="/" passHref>
							<a>
								<img alt="logo" src="/images/pulsar-logo.png" height="60px" />
							</a>
						</Link>
						<Link href="/events" passHref>
							<Typography component="a" variant="h6">
								Events
							</Typography>
						</Link>
						<Link
							href="https://www.facebook.com/groups/PulsarsXC/photos/"
							passHref>
							<Typography
								component="a"
								rel="noopener noreferrer"
								target="_blank"
								variant="h6">
								Photos
							</Typography>
						</Link>
					</Container>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}
