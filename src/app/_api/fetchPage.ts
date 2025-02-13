import { Page } from '@/payload-types'

export const fetchPage = async (slug: string, locale: string): Promise<Page | undefined | null> => {
  const pageRes: {
    docs: Page[]
  } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}&depth=2&locale=${locale}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  ).then((res) => res.json())

  return pageRes?.docs?.[0] ?? null
}
