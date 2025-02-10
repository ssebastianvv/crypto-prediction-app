"use client"

import { Input } from "@/app/components/atoms/input"
import { Button } from "@/app/components/atoms/button"
import { SocialButton } from "../molecules/social-button"

export function LoginForm() {
  return (
    <div className="space-y-6 mt-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Correo o número de teléfono</label>
        <Input type="text" placeholder="Correo electrónico o teléfono (sin código del país)" className="w-full py-2" />
      </div>

      <Button className="w-full bg-[#FCD535] hover:bg-[#F0B90B] text-black font-medium py-2">Siguiente</Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">o</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialButton icon={<GoogleIcon />}>Continuar con Google</SocialButton>
        <SocialButton icon={<AppleIcon />}>Continuar con Apple</SocialButton>
        <SocialButton icon={<TelegramIcon />}>Continuar con Telegram</SocialButton>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M14.94 5.19A4.38 4.38 0 0016 2a4.38 4.38 0 00-3 1.52 4.09 4.09 0 00-1 3.09 3.64 3.64 0 002.94-1.42zm2.52 7.44a4.51 4.51 0 012.16-3.81 4.66 4.66 0 00-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2.12-.89-3.49-.86a4.88 4.88 0 00-4.13 2.51c-1.75 3-.45 7.52 1.26 10 .84 1.21 1.84 2.57 3.15 2.52 1.26-.05 1.74-.82 3.26-.82s2 .82 3.32.79c1.37 0 2.24-1.24 3.08-2.45a11 11 0 001.4-2.87 4.41 4.41 0 01-2.72-4.01z"
      />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z"
      />
    </svg>
  )
}

