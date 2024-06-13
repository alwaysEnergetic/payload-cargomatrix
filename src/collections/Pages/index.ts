import { CollectionConfig } from 'payload/types'
import { slugField } from '../../fields/slug'

//access
import { loggedIn } from './access/loggedIn'
import { adminsOrPublished } from './access/adminsOrPublished'
import { WithBackgroundImage } from '../../blocks/WithBackgroundImage'

//Hero & Blocks
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'

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
      url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_NEXT_URL}/preview/${data.slug}`,
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
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Block',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [MediaBlock],
            },
          ],
        },
      ],
    },
    {
      type: 'blocks',
      name: 'blocks',
      localized: true,
      minRows: 1,
      blocks: [
        {
          slug: 'richtext',
          fields: [
            {
              name: 'body',
              type: 'richText',
              required: true,
            },
          ],
        },
        WithBackgroundImage,
      ],
    },
    slugField(),
  ],
}
