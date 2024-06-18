import { Block } from 'payload/types';

export const NewsletterBlock: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'With Image', value: 'with-image' },
        { label: 'With Background Image', value: 'background-image' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With Split Columns', value: 'split-columns' },
        { label: 'Simple Justified', value: 'simple-justified' },
        { label: 'Stacked with Image', value: 'stacked-image' },
        { label: 'Split with Form', value: 'split-form' },
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
          'with-image',
          'split-image',
          'stacked-image',
        ].includes(siblingData?.layoutType),
      },
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
          name: 'formFields',
          type: 'array',
          label: 'Form Fields',
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              required: true,
              label: 'Field Name',
            },
            {
              name: 'fieldType',
              type: 'select',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
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
  ],
};