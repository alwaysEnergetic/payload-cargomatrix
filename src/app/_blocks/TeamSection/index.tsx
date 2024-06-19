import React from 'react'
import PayloadImage from '../../_components/Global/Image'
import { socialPlatform } from '@/constants'

export interface Person {
  name: string
  role: string
  imageUrl: string
  bio?: string
  social?: SocialType[]
}

export interface SocialType {
  platform: string
  url: string
}

export interface TeamSectionProps {
  layoutType: string
  title: string
  subtitle?: string
  description?: string
  teamMembers: Person[]
  hasAnnouncement?: boolean
  announcement?: string
}

export const TeamSection: React.FC<TeamSectionProps> = (props) => {
  const { layoutType, title, subtitle, description, teamMembers, hasAnnouncement, announcement } = props

  const renderTeamMembers = () => {
    return teamMembers.map((person) => (
      <li key={person.name} className="flex flex-col items-center">
        <PayloadImage className="h-24 w-24 rounded-full" image={person.imageUrl} width={96} height={96} />
        <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
        <p className="text-sm leading-6 text-gray-600">{person.role}</p>
        {person.bio && <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>}
        {layoutType === 'simple-list-social-icons' && person.social && (
          <div className="mt-2 flex space-x-3">
            <ul role="list" className="mt-6 flex gap-x-6">
              {person?.social && renderSocialComponent(person?.social)}
            </ul>
          </div>
        )}
      </li>
    ))
  }


  const renderSocialComponent = (socials: SocialType[]) => {
    return socials.map((social: SocialType) => {
      switch (social.platform) {
        case socialPlatform.Twitter:
          return (
            <li>
              <a href={social.url} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">X</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </a>
            </li>
          )
        case socialPlatform.Linkedin:
          return (
            <li>
              <a href={social.url} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          )
        case socialPlatform.Facebook:
          return (
            <li>
                <a href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
          )
        case socialPlatform.Instagram:
          return (
            <li>
                <a href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
          )
        case socialPlatform.Git:
          return (
            <li>
                <a href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
          )
        default:
          return null
      }
    })
  }

  const layoutComponents: { [key: string]: JSX.Element } = {
    'simple-list-avatars': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
            {hasAnnouncement && announcement && <div className="mt-4 text-sm text-gray-500 dark:text-slate-300">{announcement}</div>}
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'grid-background': (
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'large-avatars': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <li key={person.name} className="flex flex-col items-center">
                <PayloadImage className="mx-auto h-56 w-56 rounded-full" image={person.imageUrl} width={150} height={150} />
                <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-slate-300">{person.role}</p>
                {person.bio && <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-300">{person.bio}</p>}
                <ul role="list" className="mt-6 flex gap-x-6">
                  {person?.social && renderSocialComponent(person?.social)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    'simple-centered': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
            {hasAnnouncement && announcement && <div className="mt-4 text-sm text-gray-500">{announcement}</div>}
          </div>
          <ul role="list" className="mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-auto lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'simple-list-social-icons': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'grid-simple-overlays': (
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'grid-rounded-corners': (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {renderTeamMembers()}
          </ul>
        </div>
      </div>
    ),
    'with-bio': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2 mt-2">
            {teamMembers.map((person) => (
              <li key={person.name}>
                <PayloadImage className="aspect-[3/2] w-full rounded-2xl object-cover" image={person.imageUrl} width={96} height={96} />
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white mt-2">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-slate-300">{person.role}</p>
                  {person.bio && <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">{person.bio}</p>}
                  <ul role="list" className="mt-6 flex gap-x-6">
                    {person?.social && renderSocialComponent(person?.social)}
                  </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    'offset-images': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <li key={person.name} className="relative flex flex-col items-center">
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full bg-gray-200"></div>
                <PayloadImage className="relative z-10 h-24 w-24 rounded-full" image={person.imageUrl} width={96} height={96} />
                <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900 dark:text-slate-300">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-slate-300">{person.role}</p>
                {person.bio && <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-300">{person.bio}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    'vertical-list': (
      <div className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="-mt-13 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {teamMembers.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <PayloadImage className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" image={person.imageUrl} width={96} height={96} />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-slate-300">{person.role}</p>
                  {person.bio && <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-300">{person.bio}</p>}
                  <ul role="list" className="mt-6 flex gap-x-6">
                    {person?.social && renderSocialComponent(person?.social)}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }

  return layoutComponents[layoutType] || <div>Unknown layout type: {layoutType}</div>
}
