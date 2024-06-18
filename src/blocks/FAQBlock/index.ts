import { Block } from 'payload/types';

export const FAQBlock: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'Simple with Background', value: 'simple-background' },
        { label: 'Simple with Large Heading', value: 'simple-large-heading' },
        { label: 'Offset Background', value: 'offset-background' },
        { label: 'Split with Screenshot', value: 'split-screenshot' },
        { label: 'Simple with Alternating Background', value: 'alternating-background' },
        { label: 'With Bullets', value: 'with-bullets' },
        { label: 'With Cards', value: 'with-cards' },
        { label: 'Split with Feature List', value: 'split-feature-list' },
        { label: 'With Grid', value: 'with-grid' },
        { label: 'Split with Testimonial', value: 'split-testimonial' },
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
        condition: (data, siblingData) => [
          'split-image',
          'split-screenshot',
          'with-grid',
          'split-testimonial',
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
        condition: (data, siblingData) => [
          'split-image',
          'split-screenshot',
          'split-feature-list',
          'split-testimonial',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'faqItems',
      type: 'array',
      label: 'FAQ Items',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
        },
      ],
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
        condition: (data, siblingData) => siblingData?.layoutType === 'with-bullets',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'with-cards',
      },
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: false,
      label: 'Testimonial',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-testimonial',
      },
    },
  ],
};
