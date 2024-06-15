import { ThemeProvider } from 'next-themes'
import AuthProvider from '../../_providers/AuthProvider'
import { InitTheme } from '../../_providers/InitTheme'


import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import '@/app/_css/globals.scss'

// import { themes } from '@/app/constants'
// import { useConfig } from '@/app/_hooks/use-config'
// import React from 'react'

// import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher'


type Props = {
  params: {
    locale: string
  }
  children: React.ReactNode
}

export default async function RootLayout({ params: { locale }, children }: Props) {

  return (
    <html lang={locale}>
      <InitTheme />
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
