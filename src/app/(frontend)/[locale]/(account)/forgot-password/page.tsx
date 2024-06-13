import { getPayload } from 'payload'
import promiseConfig from '@payload-config'
import ForgotPasswordForm from '@/app/_components/ForgotPassword/ForgotPasswordForm'

const GET = async (locale: string) => {
  const payload = await getPayload({
    config: promiseConfig,
  })

  const forgotPasswordPageData = await payload.findGlobal({
    slug: 'forgotPassword',
    // @ts-ignore
    locale: locale,
  })

  return {
    forgotPasswordPageData,
  }
}

export default async function Login({ params: { locale } }: { params: { locale: string } }) {
  const { forgotPasswordPageData } = await GET(locale)

  const { background } = forgotPasswordPageData

  const backgroundUrl = typeof background === 'string' ? background : background.url

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <ForgotPasswordForm data={forgotPasswordPageData} />
    </div>
  )
}
