'use client'

import Markdown from 'react-markdown'
import { ReactNode } from 'react'

interface MarkdownContentProps {
  children: ReactNode
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return <Markdown>{children}</Markdown>
}

export default MarkdownContent