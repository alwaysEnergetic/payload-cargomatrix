import React from 'react'
import { Media } from '../../../payload-types'
import { CMSLink, CMSLinkType } from '../../_components/Link'
import PayloadImage from '../../_components/Global/Image'

type AngledImgProps = {
  title: string
  description: string
  announcementText: string
  announcementUrl: string
  announcement: boolean
  links: LinkType[]
  backgroundImage?: Media | null
  imageUrl?: Media | null
  logo: boolean
  logoImage: null | Media
};

type LinkType = {
  id: string
  link: CMSLinkType
}

export const AngledImg: React.FC<AngledImgProps> = ({ title, logo, logoImage, description, imageUrl, announcementText, announcementUrl, announcement, links } ) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block dark:fill-background"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
            {/* @ts-expect-error */}
          { logo && <PayloadImage image={logoImage} width={45} height={45} /> }
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  {announcement && announcementText && announcementUrl && (
                      <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white dark:hover:ring-white">
                              {announcementText}{' '}
                              <a href={announcementUrl} className="whitespace-nowrap font-semibold text-indigo-600">
                              <span className="absolute inset-0" aria-hidden="true" />
                              </a>
                          </div>
                      </div>
                  )}
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-200">{title}</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                  <div className="mt-10 flex items-center gap-x-6">
                      {links.map((link: LinkType, i: number) => (
                          <CMSLink key={i} {...link['link']} />
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      { imageUrl && <PayloadImage image={imageUrl} width={20} height={20} className='aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full'/> }
      </div>
    </div>
  )
}
