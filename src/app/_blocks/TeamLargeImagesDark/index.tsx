import React from 'react'
import { Media, Page } from '../../../payload-types'
import PayloadImage from '../../_components/Global/Image'

type Person = {
  name: string;
  role: string;
  imageUrl: string | Media;
};


type TeamLargeImagesDarkProps = Extract<Page['layout'][0], { blockType: 'teamLargeImagesDark' }> & {
  heading: string;
  description: string;
  people: Person[];
};

export const TeamLargeImagesDark: React.FC<TeamLargeImagesDarkProps> = ({ heading, description, people } ) => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{heading}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
      </div>
      <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        {people?.map((person: { name: string; imageUrl: string | Media; role:string }) => (
          <li key={person.name}>
            <div className="aspect-[14/13] w-full rounded-2xl overflow-hidden max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
              <PayloadImage className="object-cover" image={person.imageUrl} width={40} height={40}/>
              </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
            <p className="text-base leading-7 text-gray-300">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}
