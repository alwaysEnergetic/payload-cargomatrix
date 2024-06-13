import { getPayload } from 'payload'
import promiseConfig from '@payload-config'
import ResetPasswordForm from '@/app/_components/ResetPassword/ResetPasswordForm'

const GET = async (locale: string) => {
  const payload = await getPayload({
    config: promiseConfig,
  })

  const resetPasswordPageData = await payload.findGlobal({
    slug: 'resetPassword',
    // @ts-ignore
    locale: locale,
  })

  return {
    resetPasswordPageData,
  }
}

export default async function Login({ params: { locale } }: { params: { locale: string } }) {
  const { resetPasswordPageData } = await GET(locale)

  const { background } = resetPasswordPageData

  const backgroundUrl = typeof background === 'string' ? background : background.url

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <ResetPasswordForm data={resetPasswordPageData} />
    </div>
  )
}
