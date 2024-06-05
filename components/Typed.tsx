'use client'

import { ReactTyped } from 'react-typed'

export const Typed = ({ list }: { list: string[] }) => {
	return <ReactTyped strings={list} typeSpeed={50} backSpeed={60} loop />
}
