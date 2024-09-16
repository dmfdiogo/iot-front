'use client'
import RegisterForm from '@/components/forms/register-form'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  const secondButtonStyle =
    'rounded-sm text-sm text-left text-offwhite2 transition duration-150 ease-in hover:text-primaryLit'

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="rounded-lg border-2 border-zinc-800 bg-zinc-900 p-4">
          <div className="flex flex-col gap-4 p-4 text-primary">
            <RegisterForm />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <div className="text-offwhite2">dmfdiogo</div>
      </footer>
    </div>
  )
}

export default LoginPage
