import React from 'react';
import PayloadImage from '../../_components/Global/Image';

export interface Person {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  location?: string;
  socialMediaUrls?: { platform: string; url: string; }[];
}

export interface TeamSectionProps {
  layoutType: string;
  title: string;
  subtitle?: string;
  description?: string;
  teamMembers: Person[];
  hasAnnouncement?: boolean;
  announcement?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = (props) => {
  const { layoutType, title, subtitle, description, teamMembers, hasAnnouncement, announcement } = props;

  const renderTeamMembers = () => {
    return teamMembers.map((person) => (
      <li key={person.name} className="flex flex-col items-center">
        <PayloadImage className="h-24 w-24 rounded-full" image={person.imageUrl} width={96} height={96} />
        <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
        <p className="text-sm leading-6 text-gray-600">{person.role}</p>
        {person.bio && <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>}
        {layoutType === 'vertical-list' && person.location && <p className="mt-2 text-sm leading-6 text-gray-600">{person.location}</p>}
        {layoutType === 'simple-list-social-icons' && person.socialMediaUrls && (
          <div className="mt-2 flex space-x-3">
            {person.socialMediaUrls.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-500 hover:text-gray-900">
                {social.platform}
              </a>
            ))}
          </div>
        )}
      </li>
    ));
  };

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
          <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
            {teamMembers.map((person) => (
              <li key={person.name}>
                <PayloadImage className="aspect-[3/2] w-full rounded-2xl object-cover" image={person.imageUrl} width={96} height={96} />
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-slate-300">{person.role}</p>
                  {person.bio && <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">{person.bio}</p>}

                  <ul role="list" className="mt-6 flex gap-x-6">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
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
                <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                {person.bio && <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    'vertical-list': (
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 text-xl text-gray-600 dark:text-slate-300">{subtitle}</p>}
            {description && <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">{description}</p>}
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {teamMembers.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <PayloadImage className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" image={person.imageUrl} width={96} height={96} />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-slate-300">{person.role}</p>
                  {person.bio && <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-300">{person.bio}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  };

  return layoutComponents[layoutType] || <div>Unknown layout type: {layoutType}</div>;
};
