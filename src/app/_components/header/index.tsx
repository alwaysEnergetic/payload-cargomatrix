import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import CTAs from './CTAs'
import PayloadImage from '../Global/Image'
import { code } from 'payload/fields/validations'

const GET = async () => {
  const payloadConfig = await configPromise
  const payload = await getPayload({ config: payloadConfig })
  const settings = await payload.findGlobal({ slug: 'settings' })

  return {
    locales: payloadConfig.localization
      ? payloadConfig.localization.locales.map((locale) => ({
          label: locale.label,
          code: locale.code,
        }))
      : [],
    settings,
  }
}
export default async function Header() {
  const { settings, locales } = await GET()

  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="bg-post-yellow">
        <div className="cont mx-auto py-5 flex items-center justify-between">
          <Link href="/">
            <PayloadImage image={settings.logo} width={150} height={50} />
          </Link>
          <CTAs locales={locales} />
        </div>
      </div>
    </header>
  )
}
