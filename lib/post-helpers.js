import { htmlToText } from "html-to-text"
import { wpFetch } from "./request"

export function createMarkup(html) {
	return { __html: html }
}

export function toDateString(date) {
	return new Date(date).toDateString()
}

export function getExcerpt({ rendered }) {
	return htmlToText(rendered.split("<a")[0], { limits: 150 })
}

export function getTitle({ rendered }) {
	return htmlToText(rendered)
}

export function getPost(slug) {
	return wpFetch(`/posts?slug=${slug}`)
}

export function getPosts() {
	return wpFetch("/posts")
}

export function getPostSlugs() {
	return wpFetch("/posts?_fields=slug")
}
