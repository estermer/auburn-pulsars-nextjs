import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Section from "../components/Section"

const useStyles = makeStyles({
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
})

export default function PageTemplate() {
	const classes = useStyles()

	return (
		<>
			<Section>
				<Grid container spacing={3}>
					<Grid className={classes.imageContainer} item sm={12} md={6}>
						<img src="/images/pete-glavin-xc.jpg" alt="Pete Glavin XC" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography gutterBottom variant="h3">
							Pete Glavin XC Series
						</Typography>
						<Typography gutterBottom>
							The PGXC series was started in 1990 by the late Peter Glavin. Come
							run one or all five of the best Cross Country races in Upstate NY
							for Open and Masters runners. Individual and Club members compete
							for individual age group prizes and team awards at each race.
							Members of Upstate NY Clubs also compete for Series points,
							awards, and bragging rights. These races are for the most
							experienced runners as well as beginners to the sport of Cross
							Country running. It’s fun for all and anyone who may participate.
							The five races are hosted by local clubs in locations throughout
							the Southern Tier, Central, and Western NYS.
						</Typography>
						<Button
							color="secondary"
							component="a"
							href="http://www.gvh.net/pete-glavin-xc-series/"
							rel="noopener noreferrer"
							target="_blank"
							variant="contained">
							Race Website
						</Button>
					</Grid>
				</Grid>
			</Section>
			<Section>
				<Grid container spacing={3}>
					<Grid className={classes.imageContainer} item sm={12} md={6}>
						<img src="/images/downtown-mile.jpg" alt="Auburn Downtown Mile" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography gutterBottom variant="h3">
							Auburn Downtown Mile
						</Typography>
						<Typography gutterBottom>
							Just as the summer is winding down and the summer training is
							coming to an end, test your speed at the Downtown Mile. Another
							long standing Auburn race that is a great way to experience the
							down city of Auburn. Being only a mile, you can jump into this one
							with little training, race a downhill course into downtown, and
							finish infront of Prison City brewery for an ice cold pint!
						</Typography>
						<Button
							color="secondary"
							component="a"
							href="https://www.auburnymca.org/programs-auburn-y"
							rel="noopener noreferrer"
							target="_blank"
							variant="contained">
							Race Website
						</Button>
					</Grid>
				</Grid>
			</Section>
			<Section>
				<Grid container spacing={3}>
					<Grid className={classes.imageContainer} item sm={12} md={6}>
						<img src="/images/great-race.jpg" alt="The Great Race" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography gutterBottom variant="h3">
							The Great Race
						</Typography>
						<Typography gutterBottom>
							The Captain Myles Keogh Paddle, Wheel, & Run, otherwise known as
							&ldquo;The Great Race&rdquo; has been the flagship race in Auburn
							for over 40 years! This team triathalon involves running, biking
							and boating right at the top of the beautiful Owasco Lake. With
							beer waiting at the finish, along with food, music, and awards,
							this is a race to stick on your calendar.
						</Typography>
						<Button
							color="secondary"
							component="a"
							href="http://www.great-race.com/"
							rel="noopener noreferrer"
							target="_blank"
							variant="contained">
							Race Website
						</Button>
					</Grid>
				</Grid>
			</Section>
		</>
	)
}
