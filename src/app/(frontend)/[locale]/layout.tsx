import { ThemeProvider } from 'next-themes'
import AuthProvider from '../../_providers/AuthProvider'
import './globals.css'

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
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
