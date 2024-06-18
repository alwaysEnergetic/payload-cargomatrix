import React from 'react'
import { Media } from '../../../payload-types'
import { CMSLink, CMSLinkType } from '../../_components/Link'
import PayloadImage from '../../_components/Global/Image'

type HeroOffsetImageProps = {
  title: string
  description: string
  links: LinkType[]
  imageUrl?: Media | null
};

type LinkType = {
  id: string
  link: CMSLinkType
}

export const HeroOffsetImage: React.FC<HeroOffsetImageProps> = ({ title, description, imageUrl, links } ) => {
    
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] bg-background origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:shadow-xl dark:shadow-indigo-900 dark:ring-indigo-900 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto dark:text-slate-200">{title}</h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-600 dark:text-slate-200">{description}</p>
                        <div className="mt-10 flex items-center gap-x-6">
                            {links.map((link: LinkType, i: number) => (
                                <CMSLink key={i} {...link['link']} />
                            ))}
                        </div>
                    </div>
                    { imageUrl && <PayloadImage image={imageUrl} width={20} height={20} className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'/> }
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
    )
}
