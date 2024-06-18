import { Block } from 'payload/types';

export const TestimonialBlock: Block = {
  slug: 'testimonials',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Simple List', value: 'simple-list' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With Background Image', value: 'background-image' },
        { label: 'Grid with Background', value: 'grid-background' },
        { label: 'Grid with Images', value: 'grid-images' },
        { label: 'With Logo Grid', value: 'logo-grid' },
        { label: 'With Alternating Background', value: 'alternating-background' },
        { label: 'With Sidebar', value: 'sidebar' },
        { label: 'With Video', value: 'video' },
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
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Quote',
        },
        {
          name: 'authorName',
          type: 'text',
          required: true,
          label: 'Author Name',
        },
        {
          name: 'authorTitle',
          type: 'text',
          required: false,
          label: 'Author Title',
        },
        {
          name: 'authorImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Author Image',
        },
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Company Logo',
        },
      ],
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
  ],
};