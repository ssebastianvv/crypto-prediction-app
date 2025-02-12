import * as React from "react"
import { FaUserAlt } from "react-icons/fa"
import { cn } from "@/lib/utils"

export type AvatarProps = React.ComponentPropsWithoutRef<"div">; 

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    >
      <FaUserAlt className="w-full h-full text-gray-500" />
    </div>
  )
)
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("aspect-square h-full w-full", className)} {...props}>
      <FaUserAlt className="w-full h-full text-gray-500" />
    </div>
  )
)
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
      {...props}
    >
      <FaUserAlt className="w-full h-full text-gray-500" />
    </div>
  )
)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
