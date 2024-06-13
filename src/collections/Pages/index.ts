import { CollectionConfig } from 'payload/types'
import { slugField } from '../../fields/slug'

//access
import { loggedIn } from './access/loggedIn'
import { adminsOrPublished } from './access/adminsOrPublished'
import { WithBackgroundImage } from '../../blocks/WithBackgroundImage'

//Hero & Blocks
import { MediaBlock } from '../../blocks/MediaBlock'
import { TeamImageShortParagraph } from '../../blocks/TeamImageShortParagraph'
import { TeamLargeImages } from '../../blocks/TeamLargeImages'
import { TeamLargeImagesDark } from '../../blocks/TeamLargeImagesDark'
import { TeamMediumImagesDark } from '../../blocks/TeamMediumImagesDark'
import { TeamRoundImages } from '../../blocks/TeamRoundImages'
import { TeamSmallImages } from '../../blocks/TeamSmallImages'
import { TeamVerticalImages } from '../../blocks/TeamVerticalImages'
import { BackgroundImageHeroBlock } from '../../blocks/BackgroundImageHeroBlock'
import { DefaultHeroSectionBlock } from '../../blocks/DefaultHeroSectionBlock'
import { ImageTextHeroBlock } from '../../blocks/ImageTextHeroBlock'
import { LeadershipBlock } from '../../blocks/Leadership'
import { SimpleCenteredHeroBlock } from '../../blocks/SimpleCenteredHeroBlock'
import { TwoButtonsHeroBlock } from '../../blocks/TwoButtonsHeroBlock'


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
    preview: doc => {
      return `${process.env.NEXT_PUBLIC_CMS_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.NEXT_PUBLIC_CMS_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_SECRET}`
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
              blocks: [
                MediaBlock, 
                TeamImageShortParagraph, 
                TeamLargeImages, 
                TeamLargeImagesDark, 
                TeamMediumImagesDark, 
                TeamRoundImages,
                TeamSmallImages,
                TeamVerticalImages,
                BackgroundImageHeroBlock,
                DefaultHeroSectionBlock,
                ImageTextHeroBlock,
                LeadershipBlock,
                SimpleCenteredHeroBlock,
                TwoButtonsHeroBlock
              ],
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
