'use client'

import React from 'react'
import { toast } from 'sonner'

export const SubscribeForm = () => {
	const nameRef = React.useRef<HTMLInputElement>(null)
	const emailRef = React.useRef<HTMLInputElement>(null)

	const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (emailRef.current?.value && nameRef.current?.value) {
			const res = await fetch('/api/subscribe', {
				body: JSON.stringify({
					email: emailRef.current.value,
					name: nameRef.current.value,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			})

			if (res.status === 201) {
				toast.success('Subscribed successfully')
				emailRef.current.value = ''
				nameRef.current.value = ''
			} else {
				toast.error('Failed to subscribe')
			}
		}
	}

	return (
		<form
			className="mt-8 flex gap-4 flex-col sm:flex-row sm:items-end"
			onSubmit={subscribeUser}
		>
			<div className="flex flex-col gap-1 basis-80">
				<label htmlFor="sub_name">Name</label>
				<input
					ref={nameRef}
					type="text"
					className="w-full p-2 border border-dark-blue rounded-sm"
					name="sub_name"
					id="sub_name"
					required
					autoCapitalize="off"
					autoCorrect="off"
				/>
			</div>

			<div className="flex flex-col gap-1 grow">
				<label htmlFor="sub_email">Email</label>
				<input
					ref={emailRef}
					type="email"
					className="w-full p-2 border border-dark-blue rounded-sm"
					name="sub_email"
					id="sub_email"
					required
					autoCapitalize="off"
					autoCorrect="off"
				/>
			</div>
			<button
				type="submit"
				className="bg-dark-blue text-white font-medium px-4 py-2 rounded-md"
			>
				Subscribe
			</button>
		</form>
	)
}
