import { Block } from 'payload/types';

export const PricingBlock: Block = {
  slug: 'pricing',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Simple Grid', value: 'simple-grid' },
        { label: 'With Comparison', value: 'comparison' },
        { label: 'With Feature List', value: 'feature-list' },
        { label: 'With Toggle', value: 'toggle' },
        { label: 'With Background', value: 'background' },
        { label: 'With Split Image', value: 'split-image' },
        { label: 'Simple List', value: 'simple-list' },
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
        condition: (data, siblingData) => siblingData?.layoutType === 'background',
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
      name: 'pricingPlans',
      type: 'array',
      label: 'Pricing Plans',
      fields: [
        {
          name: 'planName',
          type: 'text',
          required: true,
          label: 'Plan Name',
        },
        {
          name: 'price',
          type: 'text',
          required: true,
          label: 'Price',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              label: 'Feature',
            },
          ],
        },
        {
          name: 'cta',
          type: 'text',
          required: true,
          label: 'Call to Action',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
          label: 'CTA URL',
        },
      ],
    },
    {
      name: 'comparisonTable',
      type: 'group',
      label: 'Comparison Table',
      fields: [
        {
          name: 'columns',
          type: 'array',
          label: 'Columns',
          fields: [
            {
              name: 'columnName',
              type: 'text',
              required: true,
              label: 'Column Name',
            },
          ],
        },
        {
          name: 'rows',
          type: 'array',
          label: 'Rows',
          fields: [
            {
              name: 'rowName',
              type: 'text',
              required: true,
              label: 'Row Name',
            },
            {
              name: 'values',
              type: 'array',
              label: 'Values',
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: 'Value',
                },
              ],
            },
          ],
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'comparison',
      },
    },
    {
      name: 'toggleOptions',
      type: 'group',
      label: 'Toggle Options',
      fields: [
        {
          name: 'option1',
          type: 'text',
          required: true,
          label: 'Option 1',
        },
        {
          name: 'option2',
          type: 'text',
          required: true,
          label: 'Option 2',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'toggle',
      },
    },
  ],
};