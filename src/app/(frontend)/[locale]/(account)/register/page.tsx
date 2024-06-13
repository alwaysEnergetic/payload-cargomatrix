import { getPayload } from 'payload'
import promiseConfig from '@payload-config'
import RegisterForm from '@/app/_components/register/RegisterForm'

const GET = async (locale: string) => {
  const payload = await getPayload({
    config: promiseConfig,
  })

  const registerPageData = await payload.findGlobal({
    slug: 'register',
    // @ts-ignore
    locale: locale,
  })

  return {
    registerPageData,
  }
}

export default async function Register({ params: { locale } }: { params: { locale: string } }) {
  const { registerPageData } = await GET(locale)

  const { background } = registerPageData

  const backgroundUrl = typeof background === 'string' ? background : background.url

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <RegisterForm data={registerPageData} />
    </div>
  )
}
