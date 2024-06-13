import { CollectionConfig } from 'payload/types'
import { slugField } from '../../fields/slug'

//access
import { loggedIn } from './access/loggedIn'
import { adminsOrPublished } from './access/adminsOrPublished'

import { HeroBlock } from './../../blocks/HeroBlock'
import { FeaturesBlock } from './../../blocks/FeaturesBlock'
//Hero & Blocks

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: adminsOrPublished,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_CMS_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.NEXT_PUBLIC_CMS_URL}/${data.slug !== 'home' ? data.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_SECRET}`,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'publishedOn',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock,
        FeaturesBlock
      ],
    },
    slugField(),
  ],
}
