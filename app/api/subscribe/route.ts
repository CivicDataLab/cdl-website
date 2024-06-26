export async function POST(request: Request) {
	const { email, name } = await request.json()

	if (!email) {
		return Response.json({ error: 'Email is required' }, { status: 400 })
	}

	if (!name) {
		return Response.json({ error: 'Name is required' }, { status: 400 })
	}

	try {
		const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
		const API_KEY = process.env.MAILCHIMP_API_KEY
		const DATACENTER = process.env.MAILCHIMP_API_SERVER

		const data = {
			email_address: email,
			merge_fields: {
				FNAME: name,
			},
			status: 'subscribed',
		}

		const response = await fetch(
			`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

			{
				body: JSON.stringify(data),
				headers: {
					Authorization: `apikey ${API_KEY}`,
					'Content-Type': 'application/json',
				},
				method: 'POST',
			}
		)

		if (response.status >= 400) {
			return new Response('There was an error subscribing to the newsletter.', {
				status: 400,
			})
		}

		return new Response('Success!', {
			status: 201,
		})
	} catch (error) {
		const message = (error as Error).message || (error as Error).toString()
		return new Response(message, {
			status: 500,
		})
	}
}
