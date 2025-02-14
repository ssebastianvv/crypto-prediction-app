
import { BrandTitle } from "@/components/atoms/brand-title";
import { Heading } from "@/components/atoms/heading";
import { QrButton } from "@/components/atoms/qr-button";
import { LoginForm } from "@/components/organisms/login-form";
import { Footer } from "@/components/organisms/footer";

export default function LoginPage() {
    return (
      <div >
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-[420px]">
            <div className="bg-white shadow-[0_2px_16px_-12px_rgba(0,0,0,0.2)] rounded-2xl">
              <div className="px-8 pt-8 pb-6">
                <div className="relative mb-8">
                  <QrButton />
                  <BrandTitle />
                  <Heading>Iniciar sesión</Heading>
                </div>
                <LoginForm />
              </div>
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-[#F0B90B] hover:text-[#F0B90B]/80 text-sm font-medium">
                Crear una cuenta de Binance
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
  