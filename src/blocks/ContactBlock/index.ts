import { Block } from 'payload/types';

export const ContactBlock: Block = {
  slug: 'contact',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Split with Form', value: 'split-form' },
        { label: 'With BG Image', value: 'bg-image' },
        { label: 'With Map', value: 'with-map' },
        { label: 'Simple Justified', value: 'simple-justified' },
        { label: 'Split with Address', value: 'split-address' },
        { label: 'Simple with Illustration', value: 'simple-illustration' },
        { label: 'Stacked with Illustration', value: 'stacked-illustration' },
        { label: 'Split with Social Links', value: 'split-social-links' },
        { label: 'Split with List', value: 'split-list' },
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
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'bg-image',
      },
    },
    {
      name: 'form',
      type: 'group',
      label: 'Form',
      fields: [
        {
          name: 'formTitle',
          type: 'text',
          required: true,
          label: 'Form Title',
        },
        {
          name: 'fields',
          type: 'array',
          label: 'Form Fields',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Field Name',
            },
            {
              name: 'type',
              type: 'select',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Textarea', value: 'textarea' },
              ],
              label: 'Field Type',
            },
          ],
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-form',
      },
    },
    {
      name: 'map',
      type: 'group',
      label: 'Map',
      fields: [
        {
          name: 'mapTitle',
          type: 'text',
          required: true,
          label: 'Map Title',
        },
        {
          name: 'mapUrl',
          type: 'text',
          required: true,
          label: 'Map URL',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'with-map',
      },
    },
    {
      name: 'address',
      type: 'group',
      label: 'Address',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Address Title',
        },
        {
          name: 'lines',
          type: 'array',
          label: 'Address Lines',
          fields: [
            {
              name: 'line',
              type: 'text',
              required: true,
              label: 'Line',
            },
          ],
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-address',
      },
    },
    {
      name: 'illustration',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Illustration',
      admin: {
        condition: (data, siblingData) => [
          'simple-illustration',
          'stacked-illustration',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
          label: 'Platform',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-social-links',
      },
    },
    {
      name: 'listItems',
      type: 'array',
      label: 'List Items',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          label: 'Item',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-list',
      },
    },
  ],
};
