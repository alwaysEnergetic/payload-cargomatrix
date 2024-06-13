import configPromise from '@payload-config'
import { Metadata } from 'next'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'DHL Homepage',
  description: 'DHL Homepage for test',
}

const GET = async (locale: string) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const homepageData = await payload.findGlobal({
    slug: 'homepage',
    depth: 1,
    // @ts-ignore
    locale: locale,
  })

  return {
    homepageData,
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const { homepageData } = await GET(locale)

  const backgroundUrl =
    typeof homepageData.background === 'string'
      ? homepageData.background
      : homepageData.background?.url

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="min-h-screen bg-cover bg-center"
    ></div>
  )
}
