import type React from "react"
import { Button } from "@/components/atoms/button"

interface SocialButtonProps {
  icon: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}

export function SocialButton({ icon, children, onClick }: SocialButtonProps) {
  return (
    <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-6" onClick={onClick}>
      {icon}
      <span>{children}</span>
    </Button>
  )
}

