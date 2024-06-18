import { Block } from 'payload/types';

export const LogoCloudsBlock: Block = {
  slug: 'logo-clouds',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Grid', value: 'simple-grid' },
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'With Background Color', value: 'background-color' },
        { label: 'Split Grid', value: 'split-grid' },
        { label: 'Split with Background Image', value: 'split-background-image' },
        { label: 'Centered with Description', value: 'centered-description' },
        { label: 'With Grid Overlap', value: 'grid-overlap' },
        { label: 'Stacked with CTA', value: 'stacked-cta' },
        { label: 'With Alternating Background', value: 'alternating-background' },
        { label: 'With Light Background', value: 'light-background' },
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
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'centered-description',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: false,
      label: 'Background Color',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'background-color',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-background-image',
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
        condition: (data, siblingData) => siblingData?.layoutType === 'stacked-cta',
      },
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
      ],
    },
  ],
};