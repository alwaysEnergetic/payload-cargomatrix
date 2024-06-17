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
  layoutType: string
  imageTiles: Image[]

};

type LinkType = {
  id: string
  link: CMSLinkType
}

type Image = {
  id: string
  image: Media | null 
}
const images = [
  {
    src: "/api/media/file/1.png",
    alt: "Image 1",
    group: 1,
  },
  {
    src: "/api/media/file/2.png",
    alt: "Image 2",
    group: 2,
  },
  {
    src: "/api/media/file/3.png",
    alt: "Image 3",
    group: 2,
  },
  {
    src: "/api/media/file/4.png",
    alt: "Image 4",
    group: 3,
  },
  {
    src: "/api/media/file/5.png",
    alt: "Image 5",
    group: 3,
  }
];


export const SplitWithScreenshot: React.FC<SplitWithScreenshotProps> = ({ layoutType, imageTiles, title, description, logo, logoImage, imageUrl, links } ) => {
  const groupedImages = images.reduce((acc, image) => {
    if (!acc[image.group]) {
      acc[image.group] = [];
    }
    acc[image.group].push(image);
    return acc;
  }, {});

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
        { layoutType == 'split-screenshot' &&
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {/* @ts-expect-error */}
              { logo && <PayloadImage image={imageUrl} width={2432} height={1442} className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" /> }
              </div>
            </div>
          </div>
        }
        { layoutType == 'image-tiles' &&
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          {Object.keys(groupedImages).map((group, index) => (
            <div
              key={index}
              className={`ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ${
                index % 2 === 0 ? 'order-last' : 'order-first'
              }`}
            >
              {groupedImages[group].map((image, idx) => (
                <div className="relative" key={idx}>
                  <PayloadImage image={image} width={2432} height={1442} className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              ))}
            </div>
          ))}
        </div>
        }
        { layoutType == 'phone-mockup' &&
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
              { imageUrl && <PayloadImage image={imageUrl} width={316} height={684} /> }
              </foreignObject>
            </svg>
          </div>
        }
      </div>
    </div>
  )
}
