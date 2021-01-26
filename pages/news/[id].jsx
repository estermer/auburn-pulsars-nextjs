import React from "react"
import Link from "next/Link"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
	MdKeyboardArrowLeft as LeftIcon,
	MdAccessTime as ClockIcon,
} from "react-icons/md"
import { getPost } from "../../lib/post-helpers"
import { createMarkup, toDateString } from "../../lib/post-helpers"
import ShareButtons from "../../components/ShareButtons"
import MobileShareButtons from "../../components/MobileShareButtons"
import Meta from "../../components/Meta"

const useStyles = makeStyles(theme => ({
	section: {
		backgroundColor: theme.palette.background.default,
		padding: `${theme.spacing(10)}px 0`,
		minHeight: "56vh",
	},
	date: {
		fontSize: 14,
	},
}))

export default function Post({ post, slug }) {
	const classes = useStyles()

	return (
		<>
			{post && (
				<Meta
					title={post.title}
					image={post.jetpackFeaturedMediaUrl}
					excerpt={post.excerpt}
					url={`https://www.auburnpulsars.com/news/${slug}`}
					type="article"/>
			)}
			<section className={classes.section}>
				<Container fixed maxWidth="md">
					<Link href="/" passHref>
						<Typography component="a">
							<LeftIcon />
							Home
						</Typography>
					</Link>
				</Container>
				{post && (
					<Container className="post" fixed maxWidth="sm">
						<Typography
							className={classes.date}
							color="textSecondary"
							gutterBottom>
							<ClockIcon /> {toDateString(post.date)}
						</Typography>
						<Typography
							dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
							variant="h4"/>
						<div
							dangerouslySetInnerHTML={createMarkup(post.content.rendered)}/>
						<div style={{ clear: "both" }} />
					</Container>
				)}
				<ShareButtons slug={slug} />
				<MobileShareButtons slug={slug} />
			</section>
		</>
	)
}

export async function getServerSideProps({ params: { id } }) {
	const post = await getPost(id)
	return { props: { post: post[0], slug: id } }
}
