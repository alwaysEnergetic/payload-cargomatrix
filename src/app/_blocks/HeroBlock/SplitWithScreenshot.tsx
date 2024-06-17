import React from 'react'
import { Media } from '../../../payload-types'
import { CMSLink, CMSLinkType } from '../../_components/Link'
import PayloadImage from '../../_components/Global/Image'

type SplitWithScreenshotProps = {
  title: string
  description: string
  links: LinkType[]
  logo: boolean
  logoImage: null | Media
  imageUrl?: null | Media
};

type LinkType = {
  id: string
  link: CMSLinkType
}

export const SplitWithScreenshot: React.FC<SplitWithScreenshotProps> = ({ title, description, logo, logoImage, imageUrl, links } ) => {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10 dark:[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
      >
          <defs>
          <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
          >
              <path d="M.5 200V.5H200" fill="none" />
          </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20 hidden dark:block">
              <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
              />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)] hidden dark:block"
          aria-hidden="true"
      >
          <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
              clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            {/* @ts-expect-error */}
            { logo && <PayloadImage image={logoImage} width={45} height={45} /> }
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">{description}</p>
          <div className="mt-10 flex items-center gap-x-6">
            {links.map((link: LinkType, i: number) => (
                <CMSLink key={i} {...link['link']} />
            ))}
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {/* @ts-expect-error */}
            { logo && <PayloadImage image={imageUrl} width={2432} height={1442} className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
