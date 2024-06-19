import React from 'react'
import PayloadImage from '../../_components/Global/Image'

export interface FeatureItem {
  icon?: boolean
  iconImage?: string
  title: string
  caption: string
}

export interface FeatureSectionProps {
  layoutType: string
  title: string;
  subtitle?: string
  description?: string
  featureItems: FeatureItem[]
  productScreenshot?: string
  imgPos?: string
  largeScreenshot?: string
  icons?: { icon: string; title: string; description?: string; }[]
  testimonial?: string
  featureList?: { title: string; description?: string; }[]
  showImagePanel? : boolean
  titleAlgin?: string
  showTitle?: boolean
  showLargeImage: boolean
}

export const FeatureSection: React.FC<FeatureSectionProps> = (props) => {
  const { showTitle, titleAlgin, layoutType, title, subtitle, description, featureItems, showImagePanel, productScreenshot, imgPos, showLargeImage, largeScreenshot, testimonial } = props
  const layoutComponents: { [key: string]: JSX.Element } = {
    'product-screenshot': (
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2`}>
          <div className="px-6 lg:pr-4 lg:pt-4 sm:pl-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">{subtitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none dark:text-slate-300">
                {featureItems.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      {/* @ts-expect-error */}
                      {feature.icon && <PayloadImage image={feature.iconImage} width={40} height={40} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />}
                      <div className='dark:text-white'>{feature.title}</div>
                    </dt>{' '}
                    <dd className="inline">{feature.caption}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className={`sm:px-6 lg:px-0 ${imgPos === 'left' ? 'flex items-start justify-end lg:order-first' : ''}`}>
            { showImagePanel ? (
              <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white dark:ring-gray-900/10 dark:hover:ring-gray-900/20"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  {productScreenshot && <PayloadImage image={productScreenshot} width={2432} height={1442} className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" />}
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
              ) : (
                productScreenshot && (
                  <PayloadImage image={productScreenshot} width={2432} height={1442} className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                )
              )
            }
          </div>
        </div>
      </div>
    ),
    'large-screenshot': (
      <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {showTitle && (
            <div className={`mx-auto max-w-2xl ${titleAlgin === 'left' ? 'lg:mx-0' : ''}`} >
              <h2 className="text-base font-semibold leading-7 text-primary">{subtitle}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-900 dark:text-white">{description}</p>
            </div>
          )}
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* @ts-expect-error */}
            {showLargeImage && <PayloadImage image={largeScreenshot} width={2432} height={1442} className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" />}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {featureItems.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  {/* @ts-expect-error */}
                  {feature.icon && <PayloadImage image={feature.iconImage} width={40} height={40} className="h-5 w-5 flex-none" aria-hidden="true" />}
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-900 dark:text-white">
                  <p className="flex-auto">{feature.caption}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </>
    ),
    'large-avatars': (
      <div className="bg-background py-24 sm:py-32">
      </div>
    ),
  }
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      {layoutComponents[layoutType]}
    </div>
  )
}