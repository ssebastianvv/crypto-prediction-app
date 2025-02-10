import { QrCode } from "lucide-react"
import { Button } from "@/app/components/atoms/button"

export function QrButton() {
  return (
    <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
      <QrCode className="h-5 w-5" />
      <span className="sr-only">Iniciar sesión con código QR</span>
    </Button>
  )
}

