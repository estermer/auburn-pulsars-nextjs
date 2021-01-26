import React from "react"
import { IconButton, Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Section from "../components/Section"
import {
	FaFacebookF as FacebookIcon,
	FaStrava as StravaIcon,
} from "react-icons/fa"

const useStyles = makeStyles(() => ({
	verticalCenterContent: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100%",
	},
}))

export default function Team() {
	const classes = useStyles()

	return (
		<>
			<Section>
				<Grid container spacing={4}>
					<Grid item md={6} sm={12}>
						<img
							alt="2019 Auburn Pulsars"
							src="/images/2019-pulsar-team.jpg"
							width="100%"
							height="auto"/>
					</Grid>
					<Grid item md={6} sm={12}>
						<Container className={classes.verticalCenterContent}>
							<Typography gutterBottom variant="h4">
								Our Team
							</Typography>
							<Typography gutterBottom>
								Whether it is is for fitness, acheiving lofty goals, reliving
								the glory days, or just looking forward to the beer at the
								finish line, we are just a bunch of misfits having fun.
							</Typography>
							<div>
								<Typography variant="h6">Join Us On: </Typography>
								<IconButton
									color="secondary"
									component="a"
									href="https://www.facebook.com/groups/PulsarsXC/"
									rel="noopener noreferrer"
									target="_blank"
									variant="contained">
									<FacebookIcon />
								</IconButton>
								<IconButton
									color="secondary"
									component="a"
									href="https://www.strava.com/clubs/pulsars"
									rel="noopener noreferrer"
									target="_blank"
									variant="contained">
									<StravaIcon />
								</IconButton>
							</div>
						</Container>
					</Grid>
				</Grid>
			</Section>
			<Section>
				<Grid container spacing={4}>
					<Grid item md={6} sm={12}>
						<img
							alt="2019 Auburn Pulsars"
							src="/images/pulsar-youth-team.jpg"
							width="100%"
							height="auto"/>
					</Grid>
					<Grid item md={6} sm={12}>
						<Container className={classes.verticalCenterContent}>
							<Typography gutterBottom variant="h4">
								Pulsar Youth Running
							</Typography>
							<Typography gutterBottom>
								Coached by the very first Pulsar, Al Wilson works through the
								Auburn YMCA to train the next generation of Pulsars.
							</Typography>
						</Container>
					</Grid>
				</Grid>
			</Section>
		</>
	)
}
