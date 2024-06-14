export const addSubscriber = async ({
	email,
	name,
}: {
	email: string
	name: string
}) => {
	const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
	const listId = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID
	const server = process.env.MAILCHIMP_API_SERVER

	const data = {
		email_address: email,
		merge_fields: {
			FNAME: name,
		},
		status: 'subscribed',
	}

	const response = await fetch(
		`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
		{
			method: 'POST',
			headers: {
				Authorization: `apikey ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	)

	return response.json()
}
