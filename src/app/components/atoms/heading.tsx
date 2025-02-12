import type React from "react"

interface HeadingProps {
  children: React.ReactNode
}

export function Heading({ children }: HeadingProps) {
  return <h2 className="text-xl font-semibold text-gray-900  mb-6">{children}</h2>
}

