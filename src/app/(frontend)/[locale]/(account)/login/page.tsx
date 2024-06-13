import { getPayload } from 'payload'
import promiseConfig from '@payload-config'
import LoginForm from '@/app/_components/Login/LoginForm'

const GET = async (locale: string) => {
  const payload = await getPayload({
    config: promiseConfig,
  })

  const loginPageData = await payload.findGlobal({
    slug: 'login',
    // @ts-ignore
    locale: locale,
  })

  return {
    loginPageData,
  }
}

export default async function Login({ params: { locale } }: { params: { locale: string } }) {
  const { loginPageData } = await GET(locale)

  const { background } = loginPageData

  const backgroundUrl = typeof background === 'string' ? background : background.url

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <LoginForm data={loginPageData} />
    </div>
  )
}
