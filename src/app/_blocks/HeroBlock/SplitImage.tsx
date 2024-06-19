import React from 'react'
import { Media } from '../../../payload-types'
import { CMSLink, CMSLinkType } from '../../_components/Link'
import PayloadImage from '../../_components/Global/Image'

type SplitImageProps = {
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

export const SplitImage: React.FC<SplitImageProps> = ({ title, logo, logoImage, description, imageUrl, announcementText, announcementUrl, announcement, links } ) => {
  return (
    <div className="relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
                {/* @ts-expect-error */}
                { logo && <PayloadImage image={logoImage} width={45} height={45} /> }
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
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl dark:text-white">{title}</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>
                <div className="mt-10 flex items-center gap-x-6">
                    {links.map((link: LinkType, i: number) => (
                        <CMSLink key={i} {...link['link']} />
                    ))}
                </div>
            </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                { imageUrl && <PayloadImage image={imageUrl} width={20} height={20} className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'/> }
            </div>
        </div>
    </div>
  )
}
