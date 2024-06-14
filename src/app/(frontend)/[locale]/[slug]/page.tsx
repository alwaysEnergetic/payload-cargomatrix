import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Page } from '../../../../payload-types'
import { fetchPage } from '@/app/_api/fetchPage'
import { fetchPages } from '@/app/_api/fetchPages'
import { Blocks } from '../../../_components/Blocks'
// import { Hero } from '../../../_components/Hero'
// import { generateMeta } from '../../../../_utilities/generateMeta'

interface PageParams {
    params: { slug: string; locale: string }
  }

export default async function Page({ params: { slug = 'home', locale } }: PageParams) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null | undefined = null

  try {
    page = await fetchPage(slug, locale)
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    page = undefined
  }

  if (!page) {
    return notFound()
  }

  const { layout } = page

  return (
    <React.Fragment>
      {/* <Hero {...hero} /> */}
      <Blocks
        blocks={layout}
      />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchPages()
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

// export async function generateMetadata({ params: { slug = 'home', locale } }): Promise<Metadata> {
//   const { isEnabled: isDraftMode } = draftMode()

//   let page: Page | null | undefined = null

//   try {
//     page = await fetchPage(slug, locale)
//   } catch (error) {
//     // don't throw an error if the fetch fails
//     // this is so that we can render a static home page for the demo
//     // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
//     // in production you may want to redirect to a 404  page or at least log the error somewhere
//   }

//   if (!page && slug === 'home') {
//     page = undefined
//   }

//   return generateMeta({ doc: page })
// }
