import React from 'react'
import { Media } from '../../../payload-types'
import { CMSLink, CMSLinkType } from '../../_components/Link'
import PayloadImage from '../../_components/Global/Image'

type SimpleCenteredProps = {
  title: string
  description: string
  announcementText: string
  announcementUrl: string
  announcement: boolean
  links: LinkType[]
  backgroundImage?: Media | null
  imageUrl?: Media | null
};

type LinkType = {
  id: string
  link: CMSLinkType
}

export const SimpleCentered: React.FC<SimpleCenteredProps> = ({ title, description, backgroundImage, imageUrl, announcementText, announcementUrl, announcement, links } ) => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      { backgroundImage && <PayloadImage image={backgroundImage} width={45} height={45} className='absolute inset-0 -z-10 h-full w-full object-cover'/> }
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {announcement && announcementText && announcementUrl && (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {announcementText}{' '}
            <a href={announcementUrl} className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      )}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8">{description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {links.map((link: LinkType, i: number) => (
            <CMSLink key={i} {...link['link']} />
          ))}
        </div>
      </div>
      { imageUrl && <PayloadImage image={imageUrl} width={2432} height={1442} className='mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24'/> }
      </div>
    </div>
  )
}
