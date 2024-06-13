import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { payloadToken } from '../../_api/token'

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
const token = req.cookies.get(payloadToken)?.value
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')
  const secret = searchParams.get('secret')

  if (!url) {
    return new Response('No URL provided', { status: 404 })
  }

  if (!token) {
    new Response('You are not allowed to preview this page', { status: 403 })
  }

    // validate the Payload token
    const userReq = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/me`, {
        headers: {
            Authorization: `JWT ${token}`,
        },
    })

    const userRes = await userReq.json()

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(userRes)
    console.log('############################')

    if (!userReq.ok || !userRes?.user) {
        draftMode().disable()
        return new Response('You are not allowed to preview this page', { status: 403 })
    }

    if (secret !== process.env.PAYLOAD_SECRET) {
        return new Response('Invalid token', { status: 401 })
    }

    draftMode().enable()

    redirect(url)
}
