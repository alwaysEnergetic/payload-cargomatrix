import { Block } from 'payload/types';
 
export const FeaturesBlock: Block = {
  slug: 'featureSection',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'With Product Screenshot', value: 'product-screenshot' },
        { label: 'With Large Screenshot', value: 'large-screenshot' },
        { label: 'With Testimonial', value: 'testimonial' },
        { label: 'Simple', value: 'simple' },
        { label: 'Simple Two-Column with Small Icons', value: 'two-column-small-icons' },
      ],
      label: 'Layout Type',
    },
    {
      name: 'showTitle',
      type: 'checkbox',
      label: 'Show Title',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'large-screenshot',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      admin: {
        condition: (data, siblingData) => siblingData?.show_title
      },
    },
    {
      name: 'titleAlgin',
      type: 'select',
      required: true,
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
      defaultValue:'center',
      label: 'Title Algin',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'large-screenshot',
      },
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
      name: 'featureItems', // required
      type: 'array', // required
      label: 'Feature Items',
      minRows: 2,
      maxRows: 10,
      fields: [
        {
          name: 'icon',
          type: 'checkbox',
          label: 'Show Icon',
        },
        {
          name: 'iconImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Icon',
          admin: {
            condition: (data, siblingData) => siblingData?.icon,
          },
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'showImagePanel',
      type: 'checkbox',
      label: 'Show Screenshot Panel',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'product-screenshot',
      },
    },
    {
      name: 'productScreenshot',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Product Screenshot',
      admin: {
        condition: (data, siblingData) => [
          'product-screenshot',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'imgPos', // required
      type: 'radio', // required
      label: 'Image Position',
      required: true,
      options: [
        // required
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      defaultValue: 'left',
      admin: {
        layout: 'horizontal',
        condition: (data, siblingData) => siblingData?.layoutType === 'product-screenshot',
      },
    },
    {
      name: 'showLargeImage',
      type: 'checkbox',
      label: 'Show Large Screenshot',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'large-screenshot',
      },
    },
    {
      name: 'largeScreenshot',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Large Screenshot',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'large-screenshot' && siblingData?.showLargeImage
      },
    },
    {
      name: 'codeExampleImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Code Example Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'code-example-panel',
      },
    },
    {
      name: 'icons',
      type: 'array',
      label: 'Icons',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          label: 'Description',
        },
      ],
      admin: {
        condition: (data, siblingData) => [
          'offset-feature-list',
        ].includes(siblingData?.layoutType),
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
      name: 'featureList',
      type: 'array',
      label: 'Feature List',
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
          required: false,
          label: 'Description',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'offset-feature-list',
      },
    },
  ],
};