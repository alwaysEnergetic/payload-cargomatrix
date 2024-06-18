import { Block } from 'payload/types';

export const StatsBlock: Block = {
  slug: 'stats',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With Background Image', value: 'background-image' },
        { label: 'Simple List', value: 'simple-list' },
        { label: 'With Cards', value: 'with-cards' },
        { label: 'Split with Description', value: 'split-description' },
        { label: 'With Icons', value: 'with-icons' },
        { label: 'With Text', value: 'with-text' },
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
        condition: (data, siblingData) => siblingData?.layoutType === 'background-image',
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
      name: 'stats',
      type: 'array',
      label: 'Stats',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Icon',
          admin: {
            condition: (data, siblingData) => siblingData?.layoutType === 'with-icons',
          },
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Icon',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'with-cards',
      },
    },
  ],
};