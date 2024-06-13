import { Block } from 'payload/types'

export const WithBackgroundImage: Block = {
  slug: 'hero-with-background-image',
  fields: [
    {
      name: 'enableAnnouncement',
      type: 'checkbox',
      label: 'Enable Announcement',
      defaultValue: false,
    },

    {
      name: 'announcementBadgeText',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.enableAnnouncement === true,
      },
    },
    {
      name: 'announcementMainText',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.enableAnnouncement === true,
      },
    },
    {
      name: 'announcementURL',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.enableAnnouncement === true,
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
    {
      name: 'primaryCtaText',
      type: 'text',
      required: true,
    },
    {
      name: 'primaryCtaUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'secondaryCtaText',
      type: 'text',
    },
    {
      name: 'secondaryCtaUrl',
      type: 'text',
    },
    {
      name: 'featuredInLogos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
    },
  ],
}

