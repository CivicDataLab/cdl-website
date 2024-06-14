'use client'

import React from 'react'

export const SubscribeForm = () => {
	const nameRef = React.useRef<HTMLInputElement>(null)
	const emailRef = React.useRef<HTMLInputElement>(null)

	const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (emailRef.current?.value && nameRef.current?.value) {
			await fetch('/api/subscribe', {
				body: JSON.stringify({
					email: emailRef.current.value,
					name: nameRef.current.value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			})
		}
	}

	return (
		<form className="mt-8 flex gap-4" onSubmit={subscribeUser}>
			<input
				ref={nameRef}
				type="text"
				placeholder="Your Name"
				className="w-full p-2 border border-dark-blue"
				name="sub_name"
				id="sub_name"
				required
				autoCapitalize="off"
				autoCorrect="off"
			/>
			<input
				ref={emailRef}
				type="email"
				placeholder="Your email"
				className="w-full p-2 border border-dark-blue"
				name="sub_email"
				id="sub_email"
				required
				autoCapitalize="off"
				autoCorrect="off"
			/>
			<button
				type="submit"
				className="bg-dark-blue text-white font-medium px-4 py-2"
			>
				Subscribe
			</button>
		</form>
	)
}
