import * as React from "react"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface NavButtonProps extends Omit<ButtonProps, "children"> {
  icon: LucideIcon 
  children: React.ReactNode
}

export function NavButton({ icon: Icon, children, ...props }: NavButtonProps) {
  return (
    <Button variant="ghost" className="w-full justify-start gap-2" {...props}>
     
      <Icon className="h-4 w-4" />
      {children} 
    </Button>
  )
}
