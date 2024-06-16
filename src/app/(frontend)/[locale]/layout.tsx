import { ThemeProvider } from 'next-themes'
import AuthProvider from '../../_providers/AuthProvider'
import { InitTheme } from '../../_components/InitTheme'
import ThemeWrapper from '../../_components/ThemeWrapper'


import Footer from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import '@/app/_css/globals.scss'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

type Props = {
  params: {
    locale: string
  }
  children: React.ReactNode
}

export default async function RootLayout({ params: { locale }, children }: Props) {
  const payload = await getPayloadHMR({ config })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const { color, radius, mode } = settings
  return (
    <html lang={locale}>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeWrapper mode={mode}>
              <InitTheme color={color} radius={radius}/>
              <Header />
              <main className="pt-20">{children}</main>
              <Footer />
            </ThemeWrapper>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
