import { ThemeProvider } from 'next-themes'
import AuthProvider from '../../_providers/AuthProvider'

import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'

import '@/app/_css/globals.scss'

type Props = {
  params: {
    locale: string
  }
  children: React.ReactNode
}

export default async function RootLayout({ params: { locale }, children }: Props) {
  return (
    <html lang={locale}>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
