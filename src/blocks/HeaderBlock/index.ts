import { Block } from 'payload/types';

export const HeaderBlock: Block = {
  slug: 'header',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Centered with Background', value: 'centered-background' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With CTA', value: 'with-cta' },
        { label: 'With Video', value: 'with-video' },
        { label: 'Simple with Search', value: 'simple-search' },
        { label: 'Simple with Logo', value: 'simple-logo' },
        { label: 'Stacked with Background', value: 'stacked-background' },
        { label: 'With Logo Grid', value: 'logo-grid' },
      ],
      label: 'Layout Type',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
      admin: {
        condition: (data, siblingData) => [
          'centered-background',
          'stacked-background',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Image URL',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-image',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      label: 'Video URL',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'with-video',
      },
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          required: true,
          label: 'CTA Label',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
          label: 'CTA URL',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'with-cta',
      },
    },
    {
      name: 'search',
      type: 'group',
      label: 'Search',
      fields: [
        {
          name: 'placeholder',
          type: 'text',
          required: true,
          label: 'Placeholder Text',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'simple-search',
      },
    },
    {
      name: 'logoGrid',
      type: 'array',
      label: 'Logo Grid',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'logo-grid',
      },
    },
  ],
};