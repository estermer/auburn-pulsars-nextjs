import fetch from "isomorphic-unfetch"
import { toCamelCase } from "case-converter"

const baseUrl = process.env.REACT_APP_WORDPRESS_API_BASE_URL
const siteUrl = process.env.REACT_APP_WORDPRESS_SITE

export function wpFetch(path, options) {
	return fetch(`${baseUrl}/sites/${siteUrl}${path}`, {
		method: "GET",
		...options,
	})
		.then(res => res.json())
		.then(data => toCamelCase(data))
}
