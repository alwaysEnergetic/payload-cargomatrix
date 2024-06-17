import { Block } from 'payload/types';

export const CTABlock: Block = {
  slug: 'cta',
  labels:{
    plural:'CTA Block',
    singular:'CTA Block'
  },
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Simple Justified', value: 'simple-justified' },
        { label: 'Simple Inline', value: 'simple-inline' },
        { label: 'Simple Stacked', value: 'simple-stacked' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With Background Image', value: 'background-image' },
        { label: 'With Logo Grid', value: 'logo-grid' },
        { label: 'With Testimonial', value: 'testimonial' },
        { label: 'With Video', value: 'video' },
        { label: 'Two Columns with Image', value: 'two-columns-image' },
        { label: 'Two Columns with Bullets', value: 'two-columns-bullets' },
        { label: 'Offset with Bullets', value: 'offset-bullets' },
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
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Image URL',
      admin: {
        condition: (data, siblingData) => [
          'split-image',
          'background-image',
          'two-columns-image',
          'video',
        ].includes(siblingData?.layoutType),
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
    {
      name: 'testimonial',
      type: 'textarea',
      required: false,
      label: 'Testimonial',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'testimonial',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      label: 'Video URL',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'video',
      },
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
      fields: [
        {
          name: 'bullet',
          type: 'text',
          required: true,
          label: 'Bullet Point',
        },
      ],
      admin: {
        condition: (data, siblingData) => [
          'two-columns-bullets',
          'offset-bullets',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'ctaButtons',
      type: 'array',
      label: 'Call to Action Buttons',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Button Label',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Button URL',
        },
      ],
    },
  ],
};
